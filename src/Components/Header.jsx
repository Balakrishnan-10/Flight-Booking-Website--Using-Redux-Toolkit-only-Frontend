import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Redux/Slice/AuthSlice';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuthenticated, currentUser } = useSelector(state => state.auth);
    
    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
        setOpen(false);
    };

    return (
        <>
            <nav className="bg-gradient-to-r from-red-500 to-pink-500 shadow-md">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">

                        <div className="flex items-center gap-2">
                            <img
                                src="/flight.svg"
                                alt="Travellingo"
                                className="h-8 w-8 rounded-full bg-white"
                            />
                            <span className="text-xl font-bold text-white">
                                Travellingo
                            </span>
                        </div>

                        <div className="hidden md:flex space-x-6">
                            <Link to="/" className="nav-btn hover:text-white">Home</Link>
                            <Link to="/about" className="nav-btn hover:text-white">About</Link>
                            <Link to="/contact" className="nav-btn hover:text-white">Contact</Link>

                            {isAuthenticated && (
                                <>
                                    <Link to="/flights" className="nav-btn hover:text-white">
                                        All Flights
                                    </Link>
                                    <Link to="/mybookings" className="nav-btn hover:text-white">
                                        My Bookings
                                    </Link>
                                    <Link to="/alltickets" className="nav-btn hover:text-white">
                                        View Ticket
                                    </Link>
                                </>
                            )}
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            {!isAuthenticated ? (
                                <Link
                                    to="/login"
                                    className="rounded-md bg-white px-4 py-2 text-red-500 font-semibold"
                                >
                                    Login
                                </Link>
                            ) : (
                                <>
                                    
                                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        👤 {currentUser?.name}
                                    </span>

                                   
                                    <button
                                        onClick={handleLogout}
                                        className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
                                    >
                                        Logout
                                    </button>
                                </>
                            )}
                        </div>

                      
                        <div className="md:hidden">
                            <button
                                onClick={() => setOpen(!open)}
                                className="text-white text-2xl"
                            >
                                ☰
                            </button>
                        </div>
                    </div>
                </div>

                {open && (
                    <div className="md:hidden bg-red-400 shadow-lg">
                        <div className="space-y-2 px-4 py-4">

                            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                            <Link to="/contact" onClick={() => setOpen(false)}>Contatc</Link>

                            {isAuthenticated && (
                                <>
                                    <Link to="/flights" onClick={() => setOpen(false)}>
                                        All Flights
                                    </Link>
                                    <Link to="/mybookings" onClick={() => setOpen(false)}>
                                        My Bookings
                                    </Link>
                                    <Link to="/alltickets" onClick={() => setOpen(false)}>
                                        All Tickets
                                    </Link>

                                    <p className="font-medium text-black">
                                        <FaUser /> {currentUser?.name}
                                    </p>

                                    <button
                                        onClick={handleLogout}
                                        className="text-red-700 font-semibold"
                                    >
                                        Logout
                                    </button>
                                </>
                            )}

                            {!isAuthenticated && (
                                <Link to="/login" onClick={() => setOpen(false)}>
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Header;


