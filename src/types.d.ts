declare type Restaurants = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string

  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

declare type ModalState = {
  enable: boolean
  image: string
  price: number
  id: number
  title: string
  description: string
  portion: string
  quantity: number
}
