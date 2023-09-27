import { useDispatch, useSelector } from 'react-redux'
import { changeComponent } from '../../services/store/reducers/sidebar'
import Button from '../button'
import * as S from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../services/store'
import { useState } from 'react'
import { getTotalPrice, parseToBrl } from '../utiles'

const Form = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isLoading, isSuccess, data }] = usePurchaseMutation()
  const [delivery, setDelivery] = useState(true)

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

      adress: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O campo precisa ter no mínimo 9 caracteres')
        .max(9, 'O campo precisa ter no máximo 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório')
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

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <>
      <form onSubmit={form.handleSubmit}>
        <S.FormContent>
          {isSuccess && data ? (
            <h1>Finalizado</h1>
          ) : delivery ? (
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
                    <input
                      type="number"
                      id="zipCode"
                      name="zipCode"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
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
                  />
                </S.InputGroup>
              </div>
              <Button
                title="Clique aqui para continuar com o pagamento"
                type="button"
                variant="cream"
                onClick={() => {
                  setDelivery(false)
                }}
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
          ) : (
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
                <S.InputGroup>
                  <label htmlFor="cardNumber">Numero do cartão</label>
                  <input
                    type="number"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cardCode">CVV</label>
                  <input
                    type="number"
                    id="cardCode"
                    name="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardCode') ? 'error' : ''}
                  />
                </S.InputGroup>
                <div className="flex">
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <input
                      type="number"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input
                      type="number"
                      id="expiresYear"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresYear') ? 'error' : ''
                      }
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
                  />
                </S.InputGroup>
              </div>
              <Button
                title="Clique aqui para finalizar o pagamento"
                type="button"
                variant="cream"
              >
                {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
              </Button>
              <Button
                title="Clique aqui para valtar ao carrinho"
                type="button"
                variant="cream"
                onClick={() => {
                  setDelivery(true)
                }}
              >
                Voltar para a edição do endereço
              </Button>
            </>
          )}
        </S.FormContent>
      </form>
    </>
  )
}

export default Form
