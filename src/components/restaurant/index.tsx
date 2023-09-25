import Button from '../button'
import Tag from '../tag'

import starIcon from '../../assets/star.svg'

import * as S from './styles'
import { getDescription } from '../utiles'

type Props = {
  title: string
  image: string
  description: string
  detach?: boolean
  type: string
  evaluation: number
  id: number
}

const Restaurant = ({
  title,
  image,
  description,
  detach,
  type,
  evaluation
}: Props) => (
  <S.Card>
    <img src={image} alt={title} />
    <div className="tags">
      {detach && <Tag>Destaque da Semana</Tag>}
      <Tag>{type}</Tag>
    </div>
    <S.Infos>
      <h3>{title}</h3>
      <div>
        <span>{evaluation}</span>
        <img src={starIcon} alt="Avaliação" />
      </div>
    </S.Infos>
    <p>{getDescription(description)}</p>

    <Button
      title="Clique aqui para mais informações"
      type="button"
      variant="red"
    >
      Saiba Mais
    </Button>
  </S.Card>
)

export default Restaurant
