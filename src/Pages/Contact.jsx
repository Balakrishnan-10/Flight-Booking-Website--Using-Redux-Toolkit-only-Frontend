import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-rose-200 to-orange-100 p-6">
      <div className="max-w-6xl mx-auto">

    
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-red-600">📞 Contact Us</h1>
          <p className="mt-2 text-gray-600">
            We’re here to help you fly better ✈️
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-red-500">
              Get in Touch
            </h2>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-100 rounded-full text-red-600 text-xl">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">+91 6369216016</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-100 rounded-full text-red-600 text-xl">
                <FaEnvelope />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">krishnabala1495@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-100 rounded-full text-red-600 text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="font-medium">Office</p>
                <p className="text-gray-600">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-red-500 mb-6">
              Send a Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-rose-500 text-white py-3 rounded-lg hover:opacity-90 transition"
              >
                Send Message ✈️
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
