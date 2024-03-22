"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postData } from "../utils";
import ProtectedRoute from "@/components/ProtectedRoute";
import GeogDateFields from "./components/GoegDateFields";
import HebrewDateFields from "./components/HebrewDateFields";
// import { monthsArr } from "./components/HebrewDateFields";
// ! togle שמרנדר את הקומפננטות תאריכים

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  day: Yup.number()
    .required("Day is required")
    .min(1, "Invalid day")
    .max(31, "Invalid day"),
  Hebday: Yup.number()
    .required("נא להזין מספרים בלבד, לדוגמה : כב בחודש יש להקליד 22")
    .min(1, "ערך מינימילי 1")
    .max(30, "ערך מקסימלי 30"),
  month: Yup.number()
    .required("Month is required")
    .min(1, "Invalid month")
    .max(12, "Invalid month"),
  // Hebmonth: Yup.string().required("Please select a product").min(2, "min"),
  year: Yup.number()
    .required("Year is required")
    .min(1900, "Invalid year")
    .max(new Date().getFullYear(), "Invalid year"),
  Hebyear: Yup.number()
    .required("יש להמיר את השנה למספר, לדוגמה : שנת התשפג היא 5783")
    .min(0, "יש להזין תאריכים במספרים חיוביים בלבד")
    .max(9999, "ערך מקסימלי 9999"),
});

export default function AddNewPersonForm() {
  const [isHebrewDate, setIsHebrewDate] = useState(false);
  const status = useSession();
  const initialValues = {
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
    Hebday: "",
    Hebmonth: "",
    Hebyear: "",
  };

  async function onSubmit(values, { resetForm }) {
    const dataToSend = {
      ...values,
      createdBy: status?.data?.user?.email || "unknown",
    };
    console.log("Form submitted:", dataToSend);
    await postData(`/api/persons`, dataToSend);
    resetForm();
  }

  return (
    <>
      <ProtectedRoute>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="max-w-md mx-auto mt-8 bg-white p-8 rounded shadow-md">
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-gray-600 font-semibold mb-2"
              >
                First Name:
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-gray-600 font-semibold mb-2"
              >
                Last Name:
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* <div className="mb-4 flex">
              <div className="mr-4 w-1/3">
                <label
                  htmlFor="day"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Day:
                </label>
                <Field
                  // disabled
                  type="number"
                  id="day"
                  name="day"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="day"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mr-4 w-1/3">
                <label
                  htmlFor="month"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Month:
                </label>
                <Field
                  type="number"
                  id="month"
                  name="month"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="month"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="w-1/3">
                <label
                  htmlFor="year"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Year:
                </label>
                <Field
                  type="number"
                  id="year"
                  name="year"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="year"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="mb-4 flex">
              <div className="mr-4 w-1/3">
                <label
                  htmlFor="day"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Day:
                </label>
                <Field
                  // disabled
                  type="number"
                  id="day"
                  name="day"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="day"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mr-4 w-1/3">
                <label
                  htmlFor="month"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Month:
                </label>
                <Field
                  type="number"
                  id="month"
                  name="month"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="month"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="w-1/3">
                <label
                  htmlFor="year"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Year:
                </label>
                <Field
                  type="number"
                  id="year"
                  name="year"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="year"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div> */}

            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              onClick={() => {
                setIsHebrewDate((prev) => !prev);
              }}
            >
              {!isHebrewDate
                ? " בעצם אני יודע תאריך עברי"
                : " בעצם אני יודע תאריך לועזי"}
            </button>
            {!isHebrewDate ? (
              <>
                <div className="ml-[15rem] my-3 [direction:rtl] text-base">
                  אני יודע את התאריך הלעוזי :
                </div>
                <GeogDateFields />
              </>
            ) : (
              <></>
            )}

            {isHebrewDate ? (
              <>
                <div className="ml-[15rem] my-3 [direction:rtl] text-base">
                  אני יודע תאריך עברי :
                </div>
                <HebrewDateFields />
              </>
            ) : (
              <></>
            )}

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Submit
            </button>
            <div>
              <label htmlFor="dropdownValue">Choose an option:</label>
            </div>
          </Form>
        </Formik>
      </ProtectedRoute>
    </>
  );
}
