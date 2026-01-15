import SignUp from './Pages/SignUp.jsx'
import SignIn from './Pages/SignIn.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import About from './Pages/About.jsx'
import ViewTicket from './Pages/ViewTicket.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import AllFlights from './Pages/AllFlights.jsx'
import ProtectedRoute from './Components/ProtectedRoute.jsx'
import MyBookings from './Pages/MyBookings.jsx'
import Payment from './Pages/Payment.jsx'
import Checkout from './Pages/Checkout.jsx'
import AllTickets from './Pages/AllTickets.jsx'
import Contact from './Pages/Contact.jsx'

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/flights" element={<AllFlights />} />
          <Route path="/mybookings" element={<MyBookings />} />
          <Route path="/viewticket" element={<ViewTicket />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/alltickets" element={<AllTickets/>} />
        </Route>
      </Routes>

      <Footer />
    </>


  )
}

export default App