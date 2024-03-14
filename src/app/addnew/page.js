"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postData } from "../utils";
import ProtectedRoute from "@/components/ProtectedRoute";
import DateField from "./components/DateField";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  day: Yup.number()
    .required("Day is required")
    .min(1, "Invalid day")
    .max(31, "Invalid day"),
  month: Yup.number()
    .required("Month is required")
    .min(1, "Invalid month")
    .max(12, "Invalid month"),
  year: Yup.number()
    .required("Year is required")
    .min(1900, "Invalid year")
    .max(new Date().getFullYear(), "Invalid year"),
});

const monthsArr = [
  // { enName: "", heName: "" },
  "tishrei",
  "heshvan",
];

export default function AddNewPersonForm() {
  const [date1Filled, setDate1Filled] = useState(false);
  const [date2Filled, setDate2Filled] = useState(false);

  const status = useSession();
  const initialValues = {
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
    dropdownValue: "",
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

            <div className="ml-[15rem] my-3 [direction:rtl] text-base">
              אני יודע תאריך עברי :
            </div>
            <DateField isDisabled={true} />
            <div className="ml-[15rem] my-3 [direction:rtl] text-base">
              אני יודע תאריך לעוזי :
            </div>
            <DateField />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Submit
            </button>
            <div>
              <label htmlFor="dropdownValue">Choose an option:</label>
              <Field as="select" id="dropdownValue" name="dropdownValue">
                {monthsArr.map((month) => {
                  return (
                    <option value={month} key={month}>
                      {month}
                    </option>
                  );
                })}
                {/* <option value="">Select...</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option> */}
              </Field>
              <ErrorMessage
                name="dropdownValue"
                component="div"
                className="text-red-500"
              />
            </div>
          </Form>
        </Formik>
      </ProtectedRoute>
    </>
  );
}
