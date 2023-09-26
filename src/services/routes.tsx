import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Menu from '../pages/menu'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<Menu />} />
  </Routes>
)

export default Rotas
