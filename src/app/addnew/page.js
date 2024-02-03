"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postData } from "../utils";

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

export default function AddNewPersonForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
  };

  async function onSubmit(values) {
    console.log("Form submitted:", values);
    const baseUrl = process.env.PRODUCTION_API_URL || "http://localhost:3000";
    await postData(`${baseUrl}/api/persons`, values);
  }

  return (
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

        <div className="mb-4 flex">
          <div className="mr-4 w-1/3">
            <label
              htmlFor="day"
              className="block text-gray-600 font-semibold mb-2"
            >
              Day:
            </label>
            <Field
              type="number"
              id="day"
              name="day"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name="day" component="div" className="text-red-500" />
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

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
}
