import { useLocation } from "react-router-dom";

const formatTimeAMPM = (time24) => {
  if (!time24) return "";
  const [h, m] = time24.split(":");
  const hour = parseInt(h, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${hour12}:${m} ${ampm}`;
};
const ViewTicket = () => {
  const location = useLocation();
  const { booking } = location.state || {};

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
        Ticket not found 😔
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-rose-200 to-orange-100 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="bg-gradient-to-r from-red-600 to-rose-500 p-6 text-white">
          <h1 className="text-2xl font-bold">✈️ Flight Ticket</h1>
          <p className="text-sm opacity-90">
            Booking ID: BK{booking.bookingId}
          </p>
        </div>

        <div className="p-6 grid gap-6">

          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">From</p>
              <p className="text-xl font-semibold">{booking.from}</p>
            </div>

            <div className="text-red-500 text-2xl font-bold">→</div>

            <div className="text-right">
              <p className="text-sm text-gray-500">To</p>
              <p className="text-xl font-semibold">{booking.to}</p>
            </div>
          </div>

          <div className="border-dashed border-t border-red-200"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Passenger</p>
              <p className="font-medium">{booking.cardHolder}</p>
            </div>

            <div>
              <p className="text-gray-500">Flight</p>
              <p className="font-medium text-red-600">
                {booking.airline} {booking.flightNo || ""}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Class</p>
              <p className="font-medium">{booking.classType}</p>
            </div>

            <div>
              <p className="text-gray-500">Date</p>
              <p className="font-medium">{booking.date}</p>
            </div>

            <div>
              <p className="text-gray-500">Departure</p>
              <p className="font-medium">{formatTimeAMPM(booking.departure)}</p>
            </div>

            <div>
              <p className="text-gray-500">Gate</p>
              <p className="font-medium text-red-600">
                {booking.gate || "G1"}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center bg-red-50 rounded-xl p-4">
            <span className="px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
              Confirmed
            </span>
            <p className="text-lg font-bold text-red-600">
              ₹{booking.price}
            </p>
          </div>


          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={() => window.print()}
              className="px-5 py-2 rounded-lg border border-red-500 text-red-600 hover:bg-red-50"
            >
              Print Ticket
            </button>

            <button className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">
              Download PDF
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewTicket;
