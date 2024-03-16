import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { registerService, loginService } from "../services"
import Header from "../components/Header"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const SignupSignIn = () => {
    const [dataUser, setDataUser] = useState({})
    const path = useLocation().pathname
    const navigate = useNavigate()

    const handleChange = (e) => {
        setDataUser({ ...dataUser, [e.target.name]: e.target.value })
    }

    const isValidUser = () => {
        if (!dataUser.name && path === "/signup") {
            toast.error("Username is required!")
            return false
        }
        if (!dataUser.email) {
            toast.error("Email is required!")
            return false
        }
        const re = /\S+@\S+\.\S+/;
        if (!re.test(dataUser.email)) {
            toast.error("Please enter a valid email address!")
            return false
        }
        if (!dataUser.password) {
            toast.error("Password is required!")
            return false
        }
        if (path === "/signup") {
            if (dataUser.password !== dataUser.repassword) {
                toast.error("Your password is not the same!")
                return false
            }
        }
        return true
    }

    const handleSignUpSignIn = async () => {
        if (isValidUser()) {
            if (path === "/signup") {
                const res = await registerService(dataUser)
                if (+res.data.EC === 0) {
                    toast.success("Sign Up Success!!")
                    navigate('/signin')
                }
                else toast.error(res.data.EM)
            } else {
                const res = await loginService(dataUser)
                if (+res.data.EC === 0) {
                    toast.success("Sign In Success!!")
                    const data = {
                        isAuthenticated: true,
                        token: "fake token"
                    }
                    sessionStorage.setItem("account", JSON.stringify(data))
                    navigate('/')
                }
                else toast.error(res.data.EM)
            }
        }
    }
    return (
        <div>
            <Header />
            <div className="flex min-h-full h-[65vh] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {path === "/signin" ? "Sign in to your account" : "Create Account"}
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6" >
                        {path === "/signin" ? "" :
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">User Name</label>
                                <input onChange={handleChange} name="name" type="text" class="form-control" id="exampleInputPassword1" />
                            </div>}

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Email address</label>
                            <input onChange={handleChange} name="email" type="email" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input onChange={handleChange} name="password" type="password" class="form-control" id="exampleInputPassword1" />
                        </div>


                        {path === "/signin" ? "" :
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Re-enter password</label>
                                <input onChange={handleChange} name="repassword" type="password" class="form-control" id="exampleInputPassword1" />
                            </div>

                        }

                        <div>
                            <button
                                onClick={handleSignUpSignIn}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {path === "/signin" ? "Sign In" : "Sign Up"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupSignIn