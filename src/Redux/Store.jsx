import { configureStore } from "@reduxjs/toolkit"
import AuthReducer from "./Slice/AuthSlice.jsx"
import FlightReducer from "./Slice/flightSlice.jsx"

const store = configureStore({
    reducer : {
        auth : AuthReducer,
        flights: FlightReducer
    }
})

export default store;