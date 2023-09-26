import * as S from './styles'

type Props = {
  image: string
  type: string
  title: string
}

const Hero = ({ image, type, title }: Props) => (
  <S.Image style={{ backgroundImage: `url(${image})` }}>
    <S.Titles className="container">
      <span>{type}</span>
      <h2>{title}</h2>
    </S.Titles>
  </S.Image>
)

export default Hero
