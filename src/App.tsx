import { Provider } from 'react-redux'
import Global from './styles'

import { store } from './services/store'
import Footer from './components/footer'
import Rotas from './services/routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Global />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
