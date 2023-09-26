import { Logo } from '../../styles'
import logo from '../../assets/logo.svg'

import * as S from './styles'

const Header = () => {
  return (
    <S.HeaderContent>
      <div className="container">
        <h3>Restaurantes</h3>
        <Logo src={logo} alt="efood" />
        <a href="" className="CardButton">
          00
          <span> produto(s) no carrinho</span>
        </a>
      </div>
    </S.HeaderContent>
  )
}

export default Header
