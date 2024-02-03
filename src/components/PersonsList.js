"use client";
import PersonCard from "./PersonCard";
import { useState, useEffect } from "react";

export default function PersonsList() {
  const [persons, setPersons] = useState();

  useEffect(() => {
    async function fetchPersons() {
      const baseUrl = process.env.PRODUCTION_API_URL || "http://localhost:3000";
      const response = await fetch(`${baseUrl}/api/persons`);
      const personsArr = await response.json();
      setPersons(personsArr);
    }
    fetchPersons();
  }, []);

  return (
    <div className="  py-5 px-5 border-dotted rounded-md border-2 border-black-500">
      {persons &&
        persons.map((item) => {
          return (
            <PersonCard person={item} key={Math.floor(Math.random() * 100)} />
          );
        })}
    </div>
  );
}
