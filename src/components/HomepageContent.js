// components/HomePageContent.js
"use client";
import { signIn } from "next-auth/react";

export default function HomePageContent() {
  return (
    <div className=" bg-gray-200 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-indigo-300 w-full py-16 text-white text-center rounded-full">
        <div className="container mx-auto">
          <h2 className="text-4xl font-black mb-4">ברוך הבא</h2>
          <p className="text-lg mb-8">
            Your Ultimate Destination for Hebrew Calendar Needs
          </p>
          <p className="text-lg mb-8">
            Explore the richness of Jewish culture and tradition with our
            customizable and intuitive calendar platform.
          </p>
          <p className="text-xs">
            Jewish holidays and candle-lighting times are provided by Hebcal.com
            with a CC BY 4.0 International License.
          </p>
          <div className="mt-8">
            <button
              onClick={() => signIn("google")}
              className="bg-white text-blue-500 py-3 px-6 rounded-lg mr-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Sign In
            </button>
            <button className="bg-white text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray active:bg-gray-800">
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-200 w-full py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Explore Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">
                Customizable Calendars
              </h3>
              <p className="text-lg mb-4">
                Tailor your calendar to suit your unique preferences and needs.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg inline-block"
              >
                Learn More
              </a>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">Event Reminders</h3>
              <p className="text-lg mb-4">
                Never miss an important event with personalized reminders and
                notifications.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg inline-block"
              >
                Learn More
              </a>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">Integration</h3>
              <p className="text-lg mb-4">
                Seamlessly integrate our platform with your favorite
                productivity tools.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 w-full py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg mb-4">
                "This calendar platform has revolutionized how I plan and
                organize my events. Highly recommended!"
              </p>
              <p className="text-sm">- Rachel S.</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg mb-4">
                "As a rabbi, having a reliable and accurate Hebrew calendar is
                essential. This platform exceeds all expectations."
              </p>
              <p className="text-sm">- Rabbi David W.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className=" py-10 px-10 my-7 bg-indigo-200 text-white text-center rounded-full">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8 ">
          Join thousands of users who rely on our platform for their Hebrew
          calendar needs.
        </p>
        <div>
          <button
            onClick={() => signIn("google")}
            className="bg-white text-blue-500 py-3 px-8 rounded-lg mr-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
          <button className="bg-white text-gray-700 py-3 px-8 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
