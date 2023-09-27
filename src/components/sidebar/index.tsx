import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../services/store'
import Cart from '../cart'

import * as S from './styles'
import { closeSidebar } from '../../services/store/reducers/sidebar'
import Checkout from '../checkout'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { component } = useSelector((state: RootReducer) => state.sidebar)

  const switchComponents = () => {
    switch (component) {
      case 'cart':
        return <Cart />
      case 'checkout':
        return <Checkout />
      default:
        return null
    }
  }

  const toClose = () => {
    dispatch(closeSidebar())
  }

  return (
    <S.SidebarModal>
      <S.Overlay onClick={toClose} />
      <S.SidebarContent>{switchComponents()}</S.SidebarContent>
    </S.SidebarModal>
  )
}

export default Sidebar
