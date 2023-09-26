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

  const [modal, setModal] = useState<ModalState>({
    enable: false,
    image: '',
    price: 0,
    id: 0,
    title: '',
    description: '',
    portion: '',
    quantity: 0
  })

  const addCart = () => {
    setModal({
      enable: false,
      image: '',
      price: 0,
      id: 0,
      title: '',
      description: '',
      portion: '',
      quantity: 0
    })

    dispatch(add(modal))
    dispatch(open())
  }

  const closeModal = () => {
    setModal({
      enable: false,
      image: '',
      price: 0,
      id: 0,
      title: '',
      description: '',
      portion: '',
      quantity: 0
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
              image: image,
              price: price,
              id: id,
              title: title,
              description: description,
              portion: portion,
              quantity: 1
            })
          }
        >
          Mais detalhes
        </Button>
      </S.Card>

      <S.Modal className={modal.enable ? 'enable' : ''}>
        <S.Overlay onClick={closeModal} />
        <S.ModalContent className="container">
          <img src={modal.image} alt={title} />
          <div>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Serve: de {portion}</p>
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
