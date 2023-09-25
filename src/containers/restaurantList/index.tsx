import Restaurant from '../../components/restaurant'
import { useGetRestaurantListQuery } from '../../services/api'

import * as S from './styles'

const RestaurantList = () => {
  const { data } = useGetRestaurantListQuery()

  return (
    <S.Content className="container">
      <ul>
        {data &&
          data.map((r) => (
            <Restaurant
              key={r.id}
              title={r.titulo}
              image={r.capa}
              description={r.descricao}
              type={r.tipo}
              detach={r.destacado}
              evaluation={r.avaliacao}
              id={r.id}
            />
          ))}
      </ul>
    </S.Content>
  )
}

export default RestaurantList
