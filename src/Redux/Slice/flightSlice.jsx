import { createSlice } from "@reduxjs/toolkit";

const flightClasses = [
  "Economy",
  "Premium Economy",
  "Business",
  "First Class",
];

const randomClass = () =>
  flightClasses[Math.floor(Math.random() * flightClasses.length)];

const initialFlights = [
  { id: 1, airline: "IndiGo", logo: "/Logos/indogo.jpg", from: "Chennai", to: "Delhi", price: 4500 },
  { id: 2, airline: "Air India", logo: "/Logos/airin.webp", from: "Mumbai", to: "Bangalore", price: 5200 },
  { id: 3, airline: "Vistara", logo: "/Logos/vistara.webp", from: "Delhi", to: "Hyderabad", price: 6100 },
  { id: 4, airline: "SpiceJet", logo: "/Logos/Spicejet.jpg", from: "Chennai", to: "Kolkata", price: 4800 },
  { id: 5, airline: "Akasa Air", logo: "/Logos/akasa1.webp", from: "Pune", to: "Delhi", price: 4300 },
  { id: 6, airline: "IndiGo", logo: "/Logos/indogo2.jpg", from: "Trichy", to: "Mumbai", price: 5600 },
  { id: 7, airline: "Vistara", logo: "/Logos/vistara1.jpg", from: "Bangalore", to: "Goa", price: 3900 },
  { id: 8, airline: "Air India", logo: "/Logos/airIndia.avif", from: "Delhi", to: "Jaipur", price: 3100 },
  { id: 9, airline: "SpiceJet", logo: "/Logos/Spicejet2.jpg", from: "Madurai", to: "Chennai", price: 2800 },
  { id: 10, airline: "Akasa Air", logo: "/Logos/akasa2.webp", from: "Hyderabad", to: "Mumbai", price: 5400 },
]

const flightSlice = createSlice({
  name: "flights",
  initialState: {
    flights: [],
    bookings: JSON.parse(localStorage.getItem("bookings")) || [],
  },
  reducers: {
    loadFlights: (state) => {
      state.flights = initialFlights.map(f => ({
        ...f,
        classType: randomClass(),
      }));
    },
    bookFlight: (state, action) => {
      const index = state.bookings.findIndex(
        b => b.bookingId === action.payload.bookingId
      );

      if (index !== -1) {
        state.bookings[index] = action.payload; 
      } else {
        state.bookings.push(action.payload); 
      }

      localStorage.setItem("bookings", JSON.stringify(state.bookings));
    },
    cancelBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        b => b.bookingId !== action.payload
      );
      localStorage.setItem("bookings", JSON.stringify(state.bookings));
    },
  },
});

export const { loadFlights, bookFlight, cancelBooking } = flightSlice.actions;
export default flightSlice.reducer;
