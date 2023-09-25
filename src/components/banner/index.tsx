import logo from '../../assets/logo.svg'
import { Logo } from '../../styles'
import * as S from './styles'

const Banner = () => (
  <S.HeaderContainer>
    <Logo src={logo} alt="efood" />
    <h1>
      Viva experiências gastronômicas
      <br />
      no conforto da sua casa
    </h1>
  </S.HeaderContainer>
)

export default Banner
