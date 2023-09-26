import * as S from './styles'

import Button from '../button'
import { getDescription, parseToBrl } from '../utiles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../services/store/reducers/cart'

import { useState } from 'react'

import closeIcon from '../../assets/close.png'

type Props = {
  title: string
  description: string
  image: string
  portion: string
  price: number
  id: number
}

const Product = ({ title, description, image, portion, price, id }: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<Cardapio>({
    enable: false,
    foto: '',
    preco: 0,
    id: 0,
    nome: '',
    descricao: '',
    porcao: ''
  })

  const addCart = () => {
    setModal({
      enable: false,
      foto: '',
      preco: 0,
      id: 0,
      nome: '',
      descricao: '',
      porcao: ''
    })

    dispatch(add(modal))
    dispatch(open())
  }

  const closeModal = () => {
    setModal({
      enable: false,
      foto: '',
      preco: 0,
      id: 0,
      nome: '',
      descricao: '',
      porcao: ''
    })
  }

  return (
    <>
      <S.Card>
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>{getDescription(description)}</p>
        <Button
          title="Clique aqui para adicionar ao carrinho"
          type="button"
          variant="cream"
          onClick={() =>
            setModal({
              enable: true,
              foto: image,
              preco: price,
              id: id,
              nome: title,
              descricao: description,
              porcao: portion
            })
          }
        >
          Mais detalhes
        </Button>
      </S.Card>

      <S.Modal className={modal.enable ? 'enable' : ''}>
        <S.Overlay onClick={closeModal} />
        <S.ModalContent className="container">
          <img src={modal.foto} alt={title} />
          <div>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Serve: {portion}</p>
            </div>

            <Button
              title="Clique aqui para adicionar ao carrinho"
              type="button"
              variant="cream"
              onClick={() => addCart()}
            >
              Adicionar ao carrinho - {parseToBrl(price)}
            </Button>
          </div>
          <S.Close onClick={closeModal}>
            <img src={closeIcon} alt="Fechar" />
          </S.Close>
        </S.ModalContent>
      </S.Modal>
    </>
  )
}

export default Product
