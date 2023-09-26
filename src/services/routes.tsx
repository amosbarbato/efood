import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Menu from '../pages/menu'
import Teste from '../pages/test'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<Menu />} />
    <Route path="/teste" element={<Teste />} />
  </Routes>
)

export default Rotas
