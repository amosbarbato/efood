import { useDispatch, useSelector } from 'react-redux'
import Button from '../button'

import * as S from './styles'
import { RootReducer } from '../../services/store'

import { getTotalPrice, parseToBrl } from '../utiles'
import { changeComponent } from '../../services/store/reducers/sidebar'

const Cart = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const goToForm = () => dispatch(changeComponent('form'))

  return (
    <S.CartModal>
      {items.length > 0 ? (
        <>
          <S.ItemList>
            {items.map((item) => (
              <li key={item.id}>
                <img src={item.foto} alt="" />
                <div>
                  <h4>{item.nome}</h4>
                  <span>{parseToBrl(item.preco)}</span>
                </div>
              </li>
            ))}
          </S.ItemList>
          <S.Quantity>{items.length} item(s) no carrinho</S.Quantity>
          <S.Prices>
            Valor Total <span>{parseToBrl(getTotalPrice(items))}</span>
          </S.Prices>
          <Button
            title="Clique aqui para continuar com a entrega"
            type="button"
            variant="cream"
            onClick={goToForm}
          >
            Continuar com a entrega
          </Button>
        </>
      ) : (
        <S.Empyt>
          O carrinho está vazio, adicione pelo menos um produto para continuar
        </S.Empyt>
      )}
    </S.CartModal>
  )
}

export default Cart
