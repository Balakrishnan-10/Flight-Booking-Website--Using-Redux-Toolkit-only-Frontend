import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { bookFlight, loadFlights } from "../Redux/Slice/flightSlice"
import { useNavigate } from "react-router-dom"

const AllFlights = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { flights } = useSelector(state => state.flights)

  useEffect(() => {
    dispatch(loadFlights())
  }, [dispatch])

  const handleBook = (flight) => {
    dispatch(bookFlight(flight))
    navigate("/mybookings")
  }

  return (
    <div className="max-w-6xl rounded-2xl my-10 shadow-md mx-auto px-4 py-10 bg-gradient-to-br from-red-100 via-rose-200 to-orange-100">
      <h1 className="text-3xl font-bold text-center mb-10">
        Available Flights ✈️
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {flights.map(flight => (
          <div
            key={flight.id}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={flight.logo}
                alt={flight.airline}
                className="w-12 h-12 object-cover rounded-full shadow-md"
              />
              <div>
                <h3 className="font-semibold text-lg">{flight.airline}</h3>
                <p className="text-sm text-gray-500">{flight.classType}</p>
              </div>
            </div>

            <div className="flex justify-between text-sm mb-4">
              <span>{flight.from}</span>
              <span className="font-bold">→</span>
              <span>{flight.to}</span>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-red-500 font-bold text-lg">
                ₹ {flight.price}
              </p>

              <button onClick={() => handleBook(flight)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Book Flight
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllFlights
