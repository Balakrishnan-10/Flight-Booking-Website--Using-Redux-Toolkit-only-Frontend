import { useState } from "react";
import { CiLock } from "react-icons/ci";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { signup } from "../Redux/Slice/AuthSlice"; 
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData));
    navigate("/login"); 
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <div className="flex items-center justify-center gap-3">
          <img src="/flight.svg" className="h-10 w-auto rounded-full bg-red-500" />
          <span className="text-xl font-bold text-red-500">Travellingo</span>
        </div>

        <h2 className="mt-8 text-2xl font-bold text-red-500">
          Sign Up
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm font-medium text-red-500">
              User Name
            </label>
            <div className="mt-2 relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400" />
              <input
                name="name"
                type="text"
                required
                placeholder="User Name"
                onChange={handleChange}
                className="block w-full rounded-md border border-red-500 pl-10 py-1.5"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-red-500">
              Email
            </label>
            <div className="mt-2 relative">
              <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400" />
              <input
                name="email"
                type="email"
                required
                placeholder="E-mail"
                onChange={handleChange}
                className="block w-full rounded-md border border-red-500 pl-10 py-1.5"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-red-500">
              Password
            </label>
            <div className="mt-2 relative">
              <CiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400" />
              <input
                name="password"
                type="password"
                required
                placeholder="Password"
                onChange={handleChange}
                className="block w-full rounded-md border border-red-500 pl-10 py-1.5"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-red-500">
              Contact
            </label>
            <div className="mt-2 relative">
              <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-red-400" />
              <input
                name="contact"
                type="number"
                required
                placeholder="Contact"
                onChange={handleChange}
                className="block w-full rounded-md border border-red-500 pl-10 py-1.5"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-red-500 py-1.5 text-white font-semibold"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-blue-500">
          You have an Account?
          <Link to="/login" className="ms-2 text-red-500 font-semibold">
            Please Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
