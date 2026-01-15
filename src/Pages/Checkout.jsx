import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Checkout = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const { bookings } = useSelector(state => state.flights);
    const bookingId = state?.bookingId;

    const flight = bookings.find(b => b.bookingId === bookingId);

    const [departure, setDeparture] = useState("");
    const [date, setDate] = useState("");

    if (!flight)
        return <p className="text-center mt-20 text-xl">No flight selected!!!</p>;

    const handlePayment = () => {
        if (!departure || !date) {
            alert("Please select departure time and date");
            return;
        }

        navigate("/payment", {
            state: {
                booking: {
                    ...flight,
                    departure,
                    date,
                },
            },
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-rose-200 to-orange-100 p-4">
            <div className="max-w-5xl w-full rounded-2xl py-12 bg-gradient-to-r from-red-500 to-pink-500 flex justify-center">
                <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-6">
                    <h1 className="text-2xl font-bold text-red-500 mb-4">Checkout ✈️</h1>

                    <div className="space-y-4 mt-4">
                        <div>
                            <label className="block font-medium mb-1">Departure Time</label>
                            <input
                                type="time"
                                value={departure}
                                onChange={(e) => setDeparture(e.target.value)}
                                className="w-full border rounded-lg p-3"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Travel Date</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full border rounded-lg p-3"
                            />
                        </div>
                    </div>

                    <button
                        onClick={handlePayment}
                        className="mt-6 w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
                    >
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
