import logo from '../../assets/logo.svg'
import { Logo } from '../../styles'

import instagramIcon from '../../assets/instagram.svg'
import facebookIcon from '../../assets/facebook.svg'
import twitterIcon from '../../assets/twitter.svg'

import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <Logo src={logo} alt="efood" />
    <ul>
      <li>
        <a href="">
          <img src={instagramIcon} alt="" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={facebookIcon} alt="" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={twitterIcon} alt="" />
        </a>
      </li>
    </ul>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade
      <br />
      dos produtos é toda do estabelecimento contratado.
    </p>
  </S.FooterContainer>
)

export default Footer
