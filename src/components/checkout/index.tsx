import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { usePurchaseMutation } from '../../services/api'

import Button from '../button'
import { RootReducer } from '../../services/store'
import { changeComponent } from '../../services/store/reducers/sidebar'
import { getTotalPrice, parseToBrl } from '../utiles'

import * as S from './styles'

const Checkout = () => {
  const dispatch = useDispatch()
  const [payment, setPayment] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isLoading, isSuccess, data }] = usePurchaseMutation()

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const form = useFormik({
    initialValues: {
      name: '',
      adress: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Mínimo de 5 Caracteres')
        .required('Campo obrigatório'),
      adress: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      zipCode: Yup.string()
        .min(9, 'Mínimo de 9 Caracteres')
        .max(9, 'Máximo de 9 Caracteres')
        .required('Campo obrigatório'),
      number: Yup.string().required('Campo obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string()
        .min(5, 'Mínimo de 5 Caracteres')
        .required('Campo obrigatório'),
      cardNumber: Yup.string().required('Campo obrigatório'),
      cardCode: Yup.string()
        .max(3, 'Máximo de 3 caracteres')
        .required('Campo obrigatório'),
      expiresMonth: Yup.string().required('Campo obrigatório'),
      expiresYear: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.name,
          adress: {
            city: values.city,
            description: values.adress,
            number: Number(values.number),
            zipCode: values.zipCode,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            },
            code: Number(values.cardCode)
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const goToPayment = () => {
    if (
      !form.errors.name &&
      form.touched.name &&
      !form.errors.adress &&
      form.touched.adress &&
      !form.errors.city &&
      form.touched.city &&
      !form.errors.zipCode &&
      form.touched.zipCode &&
      !form.errors.number &&
      form.touched.number
    ) {
      setPayment(true)
    }
  }

  return (
    <>
      <S.FormContent>
        <form onSubmit={form.handleSubmit}>
          {payment && !isSuccess && (
            <>
              <h4 className="margin-bottom">
                Pagamento - Valor a pagar{' '}
                {items && parseToBrl(getTotalPrice(items))}
              </h4>
              <div className="margin-bottom">
                <S.InputGroup>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={form.values.cardName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardName') ? 'error' : ''}
                  />
                </S.InputGroup>
                <div className="flex">
                  <S.InputGroup maxWidth="228px">
                    <label htmlFor="cardNumber">Numero do cartão</label>
                    <InputMask
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="88px">
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="999"
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                    />
                  </S.InputGroup>
                </div>
                <div className="flex">
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99"
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      type="text"
                      id="expiresYear"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99"
                      className={
                        checkInputHasError('expiresYear') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                </div>
              </div>
              <Button
                title="Clique aqui para finalizar o pagamento"
                type="submit"
                variant="cream"
                onClick={form.handleSubmit}
              >
                {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
              </Button>
              <Button
                title="Clique aqui para valtar ao carrinho"
                type="button"
                variant="cream"
                onClick={() => {
                  setPayment(false)
                }}
              >
                Voltar para a edição do endereço
              </Button>
            </>
          )}
          {!payment && !isSuccess && (
            <>
              <h4 className="margin-bottom">Entrega</h4>
              <div className="margin-bottom">
                <S.InputGroup>
                  <label htmlFor="name">Quem irá receber</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.values.name}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('name') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="adress">Endereço</label>
                  <input
                    type="text"
                    id="adress"
                    name="adress"
                    value={form.values.adress}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('adress') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                </S.InputGroup>
                <div className="flex">
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="zipCode">CEP</label>
                    <InputMask
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99999-999"
                      className={checkInputHasError('zipCode') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="number">Número</label>
                    <input
                      type="number"
                      id="number"
                      name="number"
                      value={form.values.number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('number') ? 'error' : ''}
                    />
                  </S.InputGroup>
                </div>
                <S.InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    type="text"
                    id="complement"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('complement') ? 'error' : ''}
                  />
                </S.InputGroup>
              </div>
              <Button
                title="Clique aqui para continuar com o pagamento"
                type="button"
                variant="cream"
                onClick={goToPayment}
              >
                Continuar com o pagamento
              </Button>
              <Button
                title="Clique aqui para valtar ao carrinho"
                type="button"
                variant="cream"
                onClick={() => {
                  dispatch(changeComponent('cart'))
                }}
              >
                Voltar para o carrinho
              </Button>
            </>
          )}
        </form>
        {isSuccess && payment && data && (
          <>
            <S.CheckoutContent>
              <h4 className="margin-bottom">
                Pedido realizado - {data.orderId}
              </h4>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <br />
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <br />
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <br />
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </S.CheckoutContent>
            <Button
              title="Clique aqui para concluir o pedido"
              type="button"
              variant="cream"
              onClick={() => location.reload()}
            >
              Concluir
            </Button>
          </>
        )}
      </S.FormContent>
    </>
  )
}

export default Checkout
