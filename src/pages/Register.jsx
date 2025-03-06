import { useState } from "react"
import { NavLink } from "react-router-dom"
import { registerUser } from "../api/authRoutes"

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = async () => {
       await registerUser({name, email, password})
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-xl">
                <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input value={name} onInput={(e)=>setName(e.target.value)} type="text" className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input value={email} onInput={(e)=>setEmail(e.target.value)} type="email" className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="example@email.com" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input value={password} onInput={(e)=>setPassword(e.target.value)} type="password" className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required />
                    </div>
                    <button onClick={submitHandler} className="w-full py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600">Register</button>
                </div>
                <p className="text-sm text-center text-gray-600">Already have an account? <NavLink to="/login" className="text-blue-500 hover:underline">Login</NavLink></p>
            </div>
        </div>
    )
}

export default Register