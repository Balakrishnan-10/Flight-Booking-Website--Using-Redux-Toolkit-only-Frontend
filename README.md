# ✈️ Flight Booking Website

A modern **Flight Booking Web Application** built using **React.js, Redux Toolkit, and Tailwind CSS**.  
This project simulates a real-world flight booking experience including user authentication, flight search, seat booking, checkout, and ticket viewing — all handled on the frontend using **Redux state management and LocalStorage**.

---

## 🌐 Live Demo (Vercel)

🚀 **Hosted URL:**  
👉 

## 📌 Project Overview

The Flight Booking Website allows users to:
- Register and log in
- Browse available flights
- Book flights
- Complete checkout
- View booked tickets
- Persist user and booking data using browser LocalStorage

---

## 🚀 Live Features

### 👤 User Authentication
- User Signup & Signin
- Multiple users supported
- Auth state managed using Redux
- Session persistence using LocalStorage

### ✈️ Flight Management
- View all available flights
- Each flight includes:
  - Airline Name
  - Source & Destination
  - Departure & Arrival Time
  - Price
  - Flight Number

### 🧾 Booking System
- Book selected flights
- Passenger details captured
- Booking stored per user
- Booking ID generated automatically

### 💳 Checkout & Payment (Mock)
- Checkout page with booking summary
- Mock payment flow
- Payment confirmation page

### 🎟️ Ticket Management
- View all booked tickets
- View individual ticket details

---

## 🛠️ Tech Stack

| Technology | Purpose |
|----------|--------|
| React.js | UI development |
| Redux Toolkit | State management |
| React Router DOM | Page routing |
| Tailwind CSS | Styling & responsiveness |
| LocalStorage | Data persistence |
| Vite | Fast development build tool |

---

---

## 🔄 Redux State Management

### Auth Slice
Handles:
- User registration
- Login & logout
- Current user session
- LocalStorage sync

**State Example:**
```js
{
  users: [],
  currentUser: {},
  isAuthenticated: true
}
```

### Flight Slice 
Handles:
- Flight list
- Bookings
- Ticket storage

**State Example:**
```js
{
  flights: [],
  bookings: []
}
```
## 📸 Screenshots

Below are screenshots of the Flight Booking Website showing the complete user flow.

---

### 📝 Sign Up Page
This page allows new users to create an account by providing required details.

![Sign Up Page Screenshot](/ScreenShots//signup.png)

---

### 🔐 Sign In Page
This page allows existing users to log in and access the flight booking features.

![Sign In Page Screenshot](/ScreenShots//signin.png)

---

### 🏠 Home Page
Displays the landing page with navigation and featured flights.

![Home Page Screenshot](/ScreenShots/home.png)

---

### ✈️ All Flights Page
Shows all available flights with airline details, timing, and pricing.

![All Flights Screenshot](/ScreenShots/allflights.png)

---

### 🧾 Checkout Page
Displays selected flight details and booking summary before payment.

![Checkout Page Screenshot](/ScreenShots//checkout.png)

---

### 💳 Payment Page
Mock payment interface used to confirm the booking.

![Payment Page Screenshot](/ScreenShots/payment.png)

---

### 🎟️ My Bookings Page
Lists all bookings made by the logged-in user.

![My Bookings Screenshot](/ScreenShots/mybookings.png)

---

### 📄 Ticket View Page
Displays complete ticket information including booking ID and flight details.

![View Ticket Screenshot](/ScreenShots/viewticket.png)

---

### 🎟️ All Tickets Page
This page displays all flight tickets booked by the logged-in user.  
Each ticket includes flight details, passenger information, and booking ID.

![All Tickets Page Screenshot](/ScreenShots/alltickets.png)






