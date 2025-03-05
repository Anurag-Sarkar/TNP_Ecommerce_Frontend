import React from 'react'
import { loginUser } from './api/authRoutes'

const App = () => {
  console.log("first")
  loginUser({ email: 'sarkaranurah104@gmail.com', password:"password"})

  return (
    <div>App</div>
  )
}

export default App