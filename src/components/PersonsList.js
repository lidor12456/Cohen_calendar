import PersonCard from "./PersonCard";
import { useState, useEffect } from "react";

export default function PersonsList() {
  const [persons, setPersons] = useState();

  useEffect(() => {
    async function fetchPersons() {
      const response = await fetch("http://localhost:3000/api/persons");
      const persons = await response.json();
      setPersons(persons);
    }
    fetchPersons();
  }, []);

  return (
    <div className=" w-screen h-screen">
      {persons &&
        persons.map((person) => (
          <PersonCard person={person} key={Number(person.id)} />
        ))}
    </div>
  );
}
