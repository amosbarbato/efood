import { useParams } from 'react-router-dom'
import * as S from './styles'
import { RestaurantParams } from '../../pages/menu'
import { useGetRestaurantQuery } from '../../services/api'

const Hero = () => {
  const { id } = useParams() as RestaurantParams
  const { data } = useGetRestaurantQuery(id)

  return (
    <S.Image style={{ backgroundImage: `url(${data?.capa})` }}>
      <S.Titles className="container">
        <span>{data?.tipo}</span>
        <h2>{data?.titulo}</h2>
      </S.Titles>
    </S.Image>
  )
}
export default Hero
