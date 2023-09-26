import * as S from './styles'

import Button from '../button'

import foodImg from '../../assets/images/image-3.png'

const Product = () => (
  <S.Card>
    <img src={foodImg} alt="food" />
    <h4>Pizza Marguerita</h4>
    <p>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </p>
    <Button
      title="Clique aqui para adicionar ao carrinho"
      type="button"
      variant="cream"
    >
      Adicionar ao Carrinho
    </Button>
  </S.Card>
)

export default Product
