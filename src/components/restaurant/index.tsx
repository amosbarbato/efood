import { Link } from 'react-router-dom'

import Button from '../button'
import Tag from '../tag'
import starIcon from '../../assets/star.svg'
import { getDescription } from '../utiles'

import * as S from './styles'

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
  evaluation,
  id
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
    <Link to={`/restaurant/${id}`}>
      <Button
        title="Clique aqui para mais informações"
        type="button"
        variant="red"
      >
        Saiba Mais
      </Button>
    </Link>
  </S.Card>
)

export default Restaurant
