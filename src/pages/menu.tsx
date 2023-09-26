import Header from '../components/header'
import Hero from '../components/hero'
import ProductList from '../containers/productList'

import { useGetRestaurantQuery } from '../services/api'
import { useParams } from 'react-router-dom'

export type RestaurantParams = {
  id: string
}

const Menu = () => {
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
    </>
  )
}

export default Menu
