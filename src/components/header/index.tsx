import { Logo } from '../../styles'
import logo from '../../assets/logo.svg'
import { open } from '../../services/store/reducers/cart'

import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../services/store'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContent>
      <div className="container">
        <h3>Restaurantes</h3>
        <Logo src={logo} alt="efood" />
        <a href="" className="CardButton" onClick={openCart}>
          {items.length}
          <span> produto(s) no carrinho</span>
        </a>
      </div>
    </S.HeaderContent>
  )
}

export default Header
