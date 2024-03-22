"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const monthsArr = [
  // { number: 0, enName: "", heName: "" },
  { number: 1, enName: "Nissan", heName: "ניסן" },
  { number: 2, enName: "Iyyar", heName: "אייר" },
  { number: 3, enName: "Sivan", heName: "סיון" },
  { number: 4, enName: "Tamuz", heName: "תמוז" },
  { number: 5, enName: "Av", heName: "אב" },
  { number: 6, enName: "Elul", heName: "אלול" },
  { number: 7, enName: "Tishrei", heName: "תשרי" },
  { number: 8, enName: "Cheshvan", heName: "חשון" },
  { number: 9, enName: "Kislev", heName: "כסלו" },
  { number: 10, enName: "Tevet", heName: "טבת" },
  { number: 11, enName: "Sh'vat", heName: "שבט" },
  { number: 12, enName: "Adar Rishon", heName: " אדר א" },
  { number: 13, enName: "Adar Sheini", heName: "אדר ב" },
];

function HebrewDateFields() {
  return (
    <div className="mb-4 flex">
      <div className="mr-4 w-1/3">
        <label
          htmlFor="Hebday"
          className="block text-gray-600 font-semibold mb-2"
        >
          Day:
        </label>
        <Field
          type="number"
          id="Hebday"
          name="Hebday"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
        <ErrorMessage name="Hebday" component="div" className="text-red-500" />
      </div>

      <div className="mr-4 w-1/3">
        <label
          htmlFor="Hebmonth"
          className="block text-gray-600 font-semibold mb-2"
        >
          Month:
        </label>

        <Field
          as="select"
          id="Hebmonth"
          name="Hebmonth"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        >
          <option value=""></option>
          {monthsArr.map((month) => {
            return (
              <option value={month.enName} key={month.number}>
                {month.heName}
              </option>
            );
          })}
        </Field>
        {/* <ErrorMessage name="Hebmonth" component="div" className="text-red-500" /> */}
      </div>

      <div className="w-1/3">
        <label
          htmlFor="Hebyear"
          className="block text-gray-600 font-semibold mb-2"
        >
          Year:
        </label>
        <Field
          type="number"
          id="Hebyear"
          name="Hebyear"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
        <ErrorMessage name="Hebyear" component="div" className="text-red-500" />
      </div>
    </div>
  );
}

export default HebrewDateFields;
