import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bookFlight } from "../Redux/Slice/flightSlice";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const booking = location.state?.booking;

  const [cardHolder, setCardHolder] = useState("");
  const [isPaying, setIsPaying] = useState(false); 

  if (!booking)
    return <p className="text-center mt-20 text-xl">No payment data found</p>;

  const handlePay = () => {
    if (isPaying) return;

    if (!cardHolder) {
      alert("Please enter card holder name");
      return;
    }

    setIsPaying(true); 

    const finalBooking = {
      ...booking,
      cardHolder
    };

    dispatch(bookFlight(finalBooking));

    navigate("/alltickets", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-rose-200 to-orange-100 p-4">
      <div className="max-w-3xl w-full bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl shadow-xl p-6">

        <h1 className="text-2xl font-bold text-white mb-4">
          Payment Details 💳
        </h1>

        <div className="space-y-2 mb-6 bg-white p-3 rounded-xl shadow-md">
          <p><strong>Airline:</strong> {booking.airline}</p>
          <p><strong>Route:</strong> {booking.from} → {booking.to}</p>
          <p><strong>Date:</strong> {booking.date}</p>
          <p><strong>Departure:</strong> {booking.departure}</p>
          <p className="text-lg font-bold">₹{booking.price}</p>
        </div>

        <input
          type="text"
          placeholder="Card Holder Name"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <button
          onClick={handlePay}
          disabled={isPaying}
          className={`w-full py-3 rounded-lg text-white 
            ${isPaying ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
        >
          {isPaying ? "Processing..." : `Pay ₹${booking.price}`}
        </button>
      </div>
    </div>
  );
};

export default Payment;
