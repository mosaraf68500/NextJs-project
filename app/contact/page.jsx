import React from "react";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";  // <-- fixed import

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide mb-4">
            Contact
          </h1>
          <div className="flex justify-center items-center space-x-2 text-lg">
            <Link
              href="/"  // <-- use href instead of to
              className="hover:underline hover:text-[#0AB99D] transition"
            >
              Home
            </Link>
            <span>||</span>
            <Link href="" className="text-[#0AB99D] font-semibold">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white shadow-lg p-10 rounded-2xl">
            {/* Left Side - Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#0E2A46]">
                Get in Touch
              </h2>
              <p className="text-gray-500 mt-3">
                We’d love to hear from you. Reach out to us via the following
                details or fill out the form.
              </p>

              {/* Contact Cards */}
              <div className="mt-8 space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4 bg-gray-50 p-5 rounded-xl shadow-sm border border-gray-100">
                  <FaMapMarkerAlt className="text-[#0AB99D] text-2xl mt-1" />
                  <div>
                    <h4 className="text-sm text-gray-500">Our Address</h4>
                    <p className="font-medium text-gray-800">
                      Barishal, Bangladesh
                      <br /> University of Barishal, Barishal
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4 bg-gray-50 p-5 rounded-xl shadow-sm border border-gray-100">
                  <FaClock className="text-[#0AB99D] text-2xl mt-1" />
                  <div>
                    <h4 className="text-sm text-gray-500">
                      Hours Of Operation
                    </h4>
                    <p className="font-medium text-gray-800">
                      Monday - Friday: 9:00am to 5:00pm
                    </p>
                    <span className="text-xs text-gray-400">
                      [2nd Saturday Closed]
                    </span>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start space-x-4 bg-gray-50 p-5 rounded-xl shadow-sm border border-gray-100">
                  <FaPhoneAlt className="text-[#0AB99D] text-2xl mt-1" />
                  <div>
                    <h4 className="text-sm text-gray-500">Contact</h4>
                    <p className="font-medium text-gray-800">
                      Phone: +8801783176838
                    </p>
                    <p className="font-medium text-gray-800">
                      Email: mosaraf.cse8.bu@.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#0E2A46]">
                  Name*
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0AB99D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0E2A46]">
                  Email Address*
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0AB99D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0E2A46]">
                  Phone*
                </label>
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0AB99D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0E2A46]">
                  Subject*
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0AB99D] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0E2A46]">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0AB99D] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="bg-[#0AB99D] text-white px-8 py-3 rounded-lg font-medium shadow-md hover:bg-[#09917C] transition"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      <section>
        {/* Newsletter Section */}
        <div className="bg-[#0AB99D] grid grid-cols-1 md:grid-cols-2 justify-center items-center py-12 text-center text-white">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold mb-3">
              Join Our Newsletter
            </h2>
            <p className="mb-6 text-white/80">
              Subscribe to our newsletter to get the latest updates & news.
            </p>
          </div>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-4 bg-white rounded-l-lg w-72 text-gray-900 focus:outline-none"
            />
            <button className="text-white bg-black px-6 py-2 rounded-r-lg hover:bg-gray-800 transition">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
