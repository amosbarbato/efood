import { Provider } from 'react-redux'
import Banner from './components/banner'
import RestaurantList from './containers/restaurantList'
import Global from './styles'

import { store } from './services/store'

function App() {
  return (
    <Provider store={store}>
      <Global />
      <Banner />
      <RestaurantList />

      <h1>Teste</h1>
    </Provider>
  )
}

export default App
