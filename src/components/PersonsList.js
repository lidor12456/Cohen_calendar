"use client";
import PersonCard from "./PersonCard";
import { useState, useEffect } from "react";

export default function PersonsList() {
  const [persons, setPersons] = useState();

  useEffect(() => {
    async function fetchPersons() {
      const response = await fetch("http://localhost:3000/api/persons");
      const personsArr = await response.json();
      setPersons(personsArr);
    }
    fetchPersons();
  }, []);

  return (
    <div className=" w-screen h-screen">
      {persons &&
        persons.map((item) => {
          return <PersonCard person={item} key={Number(item.id)} />;
        })}
    </div>
  );
}
