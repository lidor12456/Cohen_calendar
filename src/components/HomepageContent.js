// components/HomePageContent.js
"use client";
import { signIn } from "next-auth/react";
import { HDate, months, gematriya, HebrewCalendar } from "@hebcal/core";

export default function HomePageContent() {
  // const hd1 = new HDate(15, months.CHESHVAN, 5769);
  // const hd2 = hd1.add(1, "weeks"); // 7 Kislev 5769
  // const hd3 = hd1.add(-3, "M"); // 30 Av 5768

  // console.log(hd1);
  // console.log(hd2);
  // console.log(hd3);

  // let gregorianDate = new Date(1993, 5, 4); // Month is zero-based, so 3 represents 4
  // let hebrewDate = new HDate(gregorianDate);
  // console.log(
  //   "The Hebrew date corresponding to 4/6/93 is:",
  //   hebrewDate.toString()
  // );
  // console.log(hebrewDate.greg());

  // let gregorianDate = new Date(1993, 5, 4);
  // let hebrewDate = new HDate(gregorianDate);
  // let geogDatesByHebDate = ?? to do!! =>
  // take the hebDate and change the year to current year.
  // check this in documentation : HDate.fromGematriyaString Or HebrewCalendar :

  const dt = new Date(1993, 5, 4);
  const hd = HebrewCalendar.getBirthdayOrAnniversary(5782, dt);
  console.log(hd.greg().toLocaleDateString("en-US"));
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-indigo-300 w-full py-16 text-white text-center">
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
