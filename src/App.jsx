import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Productos from './views/Productos'
import Producto from './views/Producto'
import Login from './views/Login'
import Registro from './views/Registro'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/productos' element={<Productos />} />

      <Route path='/producto' element={<Producto />} /> {/* cambiar para que busque por ID, de mientras se deja asi para que no muestre en blanco*/}

      <Route path='/login' element={<Login />} />
      
      <Route path='/registro' element={<Registro />} />
    </Routes>
  )
}

export default App