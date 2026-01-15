import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Home = () => {
    const { isAuthenticated } = useSelector(state => state.auth)
    return (
        < >
        
            <div className="relative mx-3 sm:mx-6 md:mx-auto my-6 sm:my-8 md:my-10 max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl min-h-[80vh] rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl shadow-red-500/40 overflow-hidden">

                <img
                    src="/1.cms"
                    alt="Flight"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                    <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6">
                        Ready to Take Off ✈️
                    </h2>

                    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-4xl">
                        <div className="flex gap-4 mb-4">
                            <label className="flex items-center gap-2 text-sm font-medium">
                                <input type="radio" name="trip" defaultChecked />
                                One Way
                            </label>
                            <label className="flex items-center gap-2 text-sm font-medium">
                                <input type="radio" name="trip" />
                                Round Trip
                            </label>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            <input type="text" placeholder="From" className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400" />
                            <input type="text" placeholder="To" className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400" />
                            <input type="date" className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400" />
                            <select className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400">
                                <option>Economy</option>
                                <option>Premium Economy</option>
                                <option>Business</option>
                                <option>First Class</option>
                            </select>
                            <select className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400">
                                <option>1 Traveller</option>
                                <option>2 Travellers</option>
                                <option>3 Travellers</option>
                                <option>4+ Travellers</option>
                            </select>
                        </div>

                        <button className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition">
                            Search Flights
                        </button>
                    </div>
                </div>
            </div>

            {isAuthenticated && <section className="max-w-6xl  mx-auto px-12  py-12 rounded bg-gradient-to-br from-red-100 via-rose-200 to-orange-100">

                <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">
                    Popular Destinations
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">


                    <div className="group rounded-xl overflow-hidden shadow-lg bg-white">


                        <div className="overflow-hidden">
                            <img
                                src="/thai.jpg"
                                alt="Thailand"
                                className="
            w-full h-56 object-cover
            transform transition duration-500
            group-hover:scale-110 group-hover:-translate-y-2
          "
                            />
                        </div>


                        <div className="p-5">
                            <h3 className="text-red-500 text-xl font-semibold">
                                Thailand
                            </h3>

                            <div className="flex items-center gap-1 text-yellow-400 my-2">
                                ★★★★☆ <span className="text-gray-600 text-sm ml-1">(4.5)</span>
                            </div>

                            <p className="text-gray-600 text-sm">
                                Experience the romance of Paris, iconic landmarks, and world-class
                                cuisine in the heart of Europe.
                            </p>
                        </div>
                    </div>


                    <div className="group rounded-xl overflow-hidden shadow-lg bg-white">
                        <div className="overflow-hidden">
                            <img
                                src="/hong.jpg"
                                alt="Honghand"
                                className="
            w-full h-56 object-cover
            transform transition duration-500
            group-hover:scale-110 group-hover:-translate-y-2
          "
                            />
                        </div>
                        <div className="p-5">
                            <h3 className="text-red-500 text-xl font-semibold">Hong Hang</h3>
                            <div className="flex items-center gap-1 text-yellow-400 my-2">
                                ★★★★★ <span className="text-gray-600 text-sm ml-1">(5.0)</span>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Discover luxury shopping, modern architecture, and vibrant nightlife
                                in Dubai.
                            </p>
                        </div>
                    </div>

                    <div className="group rounded-xl overflow-hidden shadow-lg bg-white">
                        <div className="overflow-hidden">
                            <img
                                src="/swiz.jpg"
                                alt="Swiz"
                                className="
            w-full h-56 object-cover
            transform transition duration-500
            group-hover:scale-110 group-hover:-translate-y-2
          "
                            />
                        </div>
                        <div className="p-5">
                            <h3 className="text-red-500 text-xl font-semibold">Switzerland</h3>
                            <div className="flex items-center gap-1 text-yellow-400 my-2">
                                ★★★★☆ <span className="text-gray-600 text-sm ml-1">(4.8)</span>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Relax on pristine beaches with crystal-clear waters and luxury
                                resorts.
                            </p>
                        </div>
                    </div>

                </div>
            </section>}


            <section className="max-w-6xl mx-auto px-4 py-14">
                <div
                    className="
      bg-gradient-to-r from-red-500 to-pink-500
      rounded-2xl
      p-6 sm:p-10
      flex flex-col md:flex-row
      items-start md:items-center
      justify-between
      gap-6
      shadow-xl
    "
                >

                    <div className="text-white max-w-2xl">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                            It's time to discover
                        </h2>

                        <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                            He moonlights difficult engrossed it, sportsmen. Interested has all
                            Devonshire difficulty gay assistance joy.
                        </p>
                    </div>


                    <div className="w-full md:w-auto">
                        <Link to={isAuthenticated ? "/flights" : "/login"}>
                            <button
                                className="
            w-full md:w-auto
            bg-white text-red-500
            font-semibold
            px-8 py-3
            rounded-xl
            hover:bg-gray-100
            transition
            shadow-md
        "
                            >
                                {isAuthenticated ? "Book Flight" : "Login to Book Flight"}
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Home