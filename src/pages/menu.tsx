import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Header from '../components/header'
import Hero from '../components/hero'
import ProductList from '../containers/productList'
import { RootReducer } from '../services/store'
import Sidebar from '../components/sidebar'

import { useGetRestaurantQuery } from '../services/api'

export type RestaurantParams = {
  id: string
}

const Menu = () => {
  const { sidebarEnable } = useSelector((state: RootReducer) => state.sidebar)
  const { id } = useParams() as RestaurantParams
  const { data: foodId } = useGetRestaurantQuery(id)

  return (
    <>
      <Header />
      {foodId && (
        <>
          <Hero />
          <ProductList />
        </>
      )}
      {sidebarEnable && <Sidebar />}
    </>
  )
}

export default Menu
