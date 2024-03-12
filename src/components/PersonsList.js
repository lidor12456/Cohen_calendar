"use client";
import PersonCard from "./PersonCard";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function PersonsList() {
  const [persons, setPersons] = useState();
  const status = useSession();
  const userMail = status.data?.user?.email || "unknown";

  useEffect(() => {
    async function fetchPersons() {
      const response = await fetch(`/api/persons/${userMail}`);
      const personsArr = await response.json();
      setPersons(personsArr);
    }
    fetchPersons();
  }, [userMail]);

  return (
    <div className="  py-5 px-5 border-dotted rounded-md border-2 border-black-500">
      {persons &&
        persons.map((item) => {
          // console.log(persons);
          return <PersonCard person={item} key={item._id} />;
        })}
    </div>
  );
}
