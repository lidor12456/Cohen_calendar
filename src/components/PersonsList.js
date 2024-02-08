"use client";
import PersonCard from "./PersonCard";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";

export default function PersonsList() {
  const [persons, setPersons] = useState();
  const status = useSession();
  const userMail = status.data?.user?.email || "unknown";

  useEffect(() => {
    async function fetchPersons() {
      const baseUrl = process.env.PRODUCTION_API_URL;
      console.log(baseUrl);
      const response = await fetch(`${baseUrl}/api/persons/${userMail}`);
      const personsArr = await response.json();
      setPersons(personsArr);
    }
    fetchPersons();
  }, [userMail, baseUrl]);

  return (
    <div className="  py-5 px-5 border-dotted rounded-md border-2 border-black-500">
      {persons &&
        // console.log(persons)
        persons?.map((item) => {
          return (
            <PersonCard person={item} key={Math.floor(Math.random() * 100)} />
          );
        })}
    </div>
  );
}
