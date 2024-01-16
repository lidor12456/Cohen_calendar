"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postData } from "../utils";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default function AddNewPersonForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const onSubmitt = (values) => {
    // Handle form submission logic here
    console.log("Form submitted:", values);
    postData("http://localhost:3000/api/persons", values);
  };
  async function onSubmit(values) {
    console.log("Form submitted:", values);
    await postData("http://localhost:3000/api/persons", values);
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

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 font-semibold mb-2"
          >
            Email:
          </label>
          <Field
            type="text"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
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
