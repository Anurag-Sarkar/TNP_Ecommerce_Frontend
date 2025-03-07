import { Route, Routes } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'

const Routing = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default Routing