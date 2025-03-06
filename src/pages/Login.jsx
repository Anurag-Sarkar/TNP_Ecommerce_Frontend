import { NavLink } from "react-router-dom"


const Login = () => {
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-xl">
                <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="example@email.com" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required />
                    </div>
                    <button type="submit" className="w-full py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600">Log In</button>
                </div>
                <p className="text-sm text-center text-gray-600">Don't have an account? <NavLink to="/register" className="text-blue-500 hover:underline">Register</NavLink></p>
            </div>
        </div>
    )
}

export default Login