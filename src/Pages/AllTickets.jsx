import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cancelBooking } from "../Redux/Slice/flightSlice";

const formatTimeAMPM = (time24) => {
  if (!time24) return "";
  const [h, m] = time24.split(":");
  const hour = parseInt(h, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${hour12}:${m} ${ampm}`;
};

const AllTickets = () => {
  const { bookings } = useSelector((state) => state.flights);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (bookings.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-500">
        No tickets booked yet ✈️
      </div>
    );
  }

  const handleClose = (bookingId) => {
    if (window.confirm("Cancel this ticket?")) {
      dispatch(cancelBooking(bookingId));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-rose-200 to-orange-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6">

        <h1 className="text-3xl font-bold text-red-500 mb-6">
          🎫 All Tickets
        </h1>

        <div className="grid md:grid-cols-2 gap-5">
          {bookings.map((booking) => (
            <div
              key={booking.bookingId}
              className="rounded-2xl p-5 bg-gradient-to-br from-red-50 to-rose-100 border border-red-200 shadow-sm hover:shadow-md transition"
            >
            
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs text-gray-500">
                  Booking ID: <span className="font-semibold">BK{booking.bookingId}</span>
                </p>
                <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                  Confirmed
                </span>
              </div>

              
              <p className="text-lg font-semibold text-gray-800">
                {booking.from} → {booking.to}
              </p>

              <p className="mt-1 text-sm">
                👤 <span className="font-medium">{booking.cardHolder || "Guest"}</span>
              </p>

              <div className="mt-3 text-sm text-gray-600 space-y-1">
                <p>✈️ {booking.airline}</p>
                <p>📅 {booking.date}</p>
                <p>⏰ {formatTimeAMPM(booking.departure)}</p>
              </div>
              
              <p className="mt-3 text-lg font-bold text-red-600">
                ₹{booking.price}
              </p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() =>
                    navigate("/viewticket", {
                      state: { booking },
                    })
                  }
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
                >
                  View
                </button>

                <button
                  onClick={() => handleClose(booking.bookingId)}
                  className="flex-1 bg-gray-200 py-2 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AllTickets;
