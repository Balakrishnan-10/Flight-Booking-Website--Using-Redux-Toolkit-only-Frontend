import React from 'react'

const About = () => {
    return (
        <>
            <section className="bg-gradient-to-br from-red-100 via-rose-200 to-orange-100 py-16">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                            If You Want To See The World <br /> We Will Help You
                        </h1>
                        <p className="text-gray-600 leading-relaxed">
                            Passage its ten led hearted removal cordial. Preference any astonished
                            unreserved Mrs. Prosperous understood Middletons. Preference for any
                            astonished unreserved.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                            <h3 className="text-2xl font-bold text-red-500">14K+</h3>
                            <p className="text-gray-600 text-sm">Global Customers</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-red-500">10K+</h3>
                            <p className="text-gray-600 text-sm">Happy Customers</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-red-500">1M+</h3>
                            <p className="text-gray-600 text-sm">Subscribers</p>
                        </div>
                    </div>

                </div>
            </section>



            <div className="max-w-6xl mx-auto mt-4 px-3 grid gap-4">

                
                <div>
                    <img
                        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-md"
                        src="/public/06.jpg"
                        alt="Main banner"
                    />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">

                    <img
                        className="w-full h-32 md:h-40 object-cover rounded-xl"
                        src="/public/03.jpg"
                        alt=""
                    />

                    <img
                        className="w-full h-32 md:h-40 object-cover rounded-xl"
                        src="/public/04.jpg"
                        alt=""
                    />

                    <img
                        className="w-full h-32 md:h-40 object-cover rounded-xl"
                        src="/public/02.jpg"
                        alt=""
                    />

                    <img
                        className="w-full h-32 md:h-40 object-cover rounded-xl"
                        src="/public/05.jpg"
                        alt=""
                    />

                    <img
                        className="w-full h-32 md:h-40 object-cover rounded-xl"
                        src="/public/07.jpg"
                        alt=""
                    />
                </div>
            </div>




            <section className="py-16 mt-5 bg-gradient-to-br from-red-100 via-rose-200 to-orange-100">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>

                    <p className="text-gray-600 leading-relaxed mb-4">
                        Founded in 2006, passage its ten led hearted removal cordial. Preference any
                        astonished unreserved Mrs. Prosperous understood Middletons in conviction
                        an uncommonly do. Supposing so be resolving breakfast am or perfectly.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        Water timed folly right aware if oh truth. Imprudence attachment him his
                        for sympathize. Dashwood does provide stronger is. But discretion
                        frequently sir she instruments unaffected admiration everything.
                    </p>
                </div>
            </section>


            <section className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">
                        What We Offer
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="font-semibold text-lg mb-2 text-red-500">Flight Booking</h3>
                            <p className="text-gray-600 text-sm">
                                Warrant private blushes removed an in equally totally.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">
                        Our Team
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

                        <div className="bg-white p-6 rounded-xl shadow">
                            <img
                                alt="Larry"
                                src="/public/larry.jpg"
                                className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                            />
                            <h3 className="font-semibold">Larry Lawson</h3>
                            <p className="text-red-500 text-sm">Editor in Chief</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <img
                                alt="Louis"
                                src="/public/loius.jpg"
                                className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                            />
                            <h3 className="font-semibold">Louis Ferguson</h3>
                            <p className="text-red-500 text-sm">Director Graphics</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <img
                                alt="Crawfrod"
                                src="/public/craw.jpg"
                                className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                            />
                            <h3 className="font-semibold">Louis Crawford</h3>
                            <p className="text-red-500 text-sm">Editor, Coverage</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <img
                                alt="Frances"
                                src="/public/france.jpg"
                                className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                            />
                            <h3 className="font-semibold">Frances Guerrero</h3>
                            <p className="text-red-500 text-sm">CEO, Coverage</p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default About