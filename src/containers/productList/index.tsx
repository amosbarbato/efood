import Product from '../../components/product'

import * as S from './styles'

const ProductList = () => {
  return (
    <S.Content className="container">
      <ul>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ul>
    </S.Content>
  )
}

export default ProductList
