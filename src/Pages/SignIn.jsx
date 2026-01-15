import React, { useEffect, useState } from 'react'
import { CiLock } from 'react-icons/ci'
import { HiOutlineMail } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../Redux/Slice/AuthSlice'

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated } = useSelector(state => state.auth)

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(formData))
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        }
    }, [isAuthenticated, navigate]);


    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
                    <div className="flex items-center justify-center gap-3">
                        <img
                            alt="Travellingo"
                            src="/flight.svg"
                            className="h-10 w-auto rounded-full text-red-500 bg-red-500"
                        />
                        <span className="text-xl font-bold text-red-500 tracking-wide">
                            Travellingo
                        </span>
                    </div>

                    <h2 className="mt-8 text-center text-2xl font-bold tracking-tight text-red-500">
                        Sign Up
                    </h2>
                </div>


                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">



                        <div>
                            <label className="block text-sm/6 font-medium text-red-500">
                                Email
                            </label>
                            <div className="mt-2 relative">
                                <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400" />
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='E-mail'
                                    className="block w-full rounded-md border border-red-500 pl-10 pr-3 py-1.5 text-red-600 placeholder:text-red-300 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
                                />
                            </div>
                        </div>



                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm/6 font-medium text-red-500">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-red-400 hover:text-blue-700">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2 relative">
                                <CiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400" />
                                <input
                                    name="password"
                                    type="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder='Password'
                                    className="block w-full rounded-md border border-red-500 pl-10 pr-3 py-1.5 text-red-600 placeholder:text-red-300 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
                                />
                            </div>
                        </div>



                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-blue-500">
                        Don't have an Account?
                        <Link to="/signup" className="font-semibold ms-2 text-red-500 hover:text-blue-700">
                            Please Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignIn