import { Logo } from '../../styles'
import logo from '../../assets/logo.svg'
import { openSidebar } from '../../services/store/reducers/sidebar'

import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../services/store'
import { Link } from 'react-router-dom'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <S.HeaderContent>
      <div className="container">
        <h3>Restaurantes</h3>
        <Link to="/">
          <Logo src={logo} alt="efood" />
        </Link>
        <span onClick={() => dispatch(openSidebar())}>
          {items.length} produto(s) no carrinho
        </span>
      </div>
    </S.HeaderContent>
  )
}

export default Header
