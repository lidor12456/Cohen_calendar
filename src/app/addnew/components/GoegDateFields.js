"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";

function GoegDateFields() {
  return (
    <div className="mb-4 flex">
      <div className="mr-4 w-1/3">
        <label htmlFor="day" className="block text-gray-600 font-semibold mb-2">
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
        <ErrorMessage name="month" component="div" className="text-red-500" />
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
        <ErrorMessage name="year" component="div" className="text-red-500" />
      </div>
    </div>
  );
}

export default GoegDateFields;
