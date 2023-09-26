import { useParams } from 'react-router-dom'
import Product from '../../components/product'
import { useGetRestaurantQuery } from '../../services/api'

import * as S from './styles'
import { RestaurantParams } from '../../pages/menu'

const ProductList = () => {
  const { id } = useParams() as RestaurantParams
  const { data } = useGetRestaurantQuery(id)

  return (
    <S.Content className="container">
      <ul>
        {data &&
          data?.cardapio.map((item) => (
            <Product
              key={item.id}
              title={item.nome}
              description={item.descricao}
              image={item.foto}
              portion={item.porcao}
              price={item.preco}
              id={item.id}
            />
          ))}
      </ul>
    </S.Content>
  )
}

export default ProductList
