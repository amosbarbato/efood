import foodImg from '../assets/images/image-3.png'
import Button from '../components/button'

import * as S from './styles'

const Teste = () => (
  <>
    <S.Modal>
      <S.Overlay />
      <S.ModalContent>
        <img src={foodImg} alt="" />
        <div>
          <h3>Pizza Marguerita</h3>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
          </p>
          <p>Serve: de 2 a 3 pessoas</p>
          <Button
            title="Clique aqui para adicionar ao carrinho"
            type="button"
            variant="cream"
          >
            Adicionar ao carrinho
          </Button>
        </div>
      </S.ModalContent>
    </S.Modal>
    <h1>teste</h1>
  </>
)

export default Teste
