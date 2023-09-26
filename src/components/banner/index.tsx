import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Logo } from '../../styles'
import * as S from './styles'

const Banner = () => (
  <S.HeaderContainer>
    <Link to="/">
      <Logo src={logo} alt="efood" />
    </Link>
    <h1>
      Viva experiências gastronômicas
      <br />
      no conforto da sua casa
    </h1>
  </S.HeaderContainer>
)

export default Banner
