import { useDispatch, useSelector } from "react-redux"
import { cancelBooking } from "../Redux/Slice/flightSlice";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { bookings } = useSelector(state => state.flights)

  const handleCancel = (id) => {
    dispatch(cancelBooking(id));
  };

   const handleCheckout = (booking) => {
    navigate("/checkout",{state:{BookingId:booking.BookingId}})
  }


  if (bookings.length === 0) {
    return <p className="mb-5 text-center mt-20 text-xl">No bookings yet 😔</p>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-rose-200 to-orange-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center p-3 rounded-2xl shadow-2xl bg-gradient-to-r from-red-600 to-rose-500 underline mb-8">
          ✈️ My Flight Bookings
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {bookings.map((booking, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-red-500">{booking.airline}</h2>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                  Confirmed
                </span>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-gray-500 text-sm">From</p>
                  <p className="font-semibold">{booking.from}</p>
                </div>

                <div className="text-indigo-500 font-bold">→</div>

                <div>
                  <p className="text-gray-500 text-sm">To</p>
                  <p className="font-semibold">{booking.to}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <p><span className="font-medium">Class:</span> {booking.classType}</p>
                <p><span className="font-medium">Price:</span> ₹{booking.price}</p>
              </div>

              <div className="mt-6 flex justify-end gap-3">
               
                  <button onClick={() => handleCheckout(booking)} className="px-4 py-2 text-sm rounded-lg border bg-blue-500 text-white hover:bg-blue-600">
                    Checkout
                  </button>      
                
                <button onClick={() => handleCancel(booking.bookingId)} className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyBookings
