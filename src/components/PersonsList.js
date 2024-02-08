"use client";
import PersonCard from "./PersonCard";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";

export default function PersonsList() {
  const [persons, setPersons] = useState();
  const status = useSession();
  const userMail = status.data?.user?.email || "unknown";
  // const baseUrl = "http://localhost:3000";
  // const baseUrl =
  //   process.env.NEXT_PUBLIC_PRODUCTION_API_URL ||
  //   "https://cohen-calendar.onrender.com";

  useEffect(() => {
    async function fetchPersons() {
      // console.log(process.env.NEXT_PUBLIC_PRODUCTION_API_URL);
      // console.log(userMail);
      // console.log(`${baseUrl}/api/persons/${userMail}`);
      const response = await fetch(`/api/persons/${userMail}`);
      const personsArr = await response.json();
      setPersons(personsArr);
    }
    fetchPersons();
  }, [userMail]);

  return (
    <div className="  py-5 px-5 border-dotted rounded-md border-2 border-black-500">
      {persons &&
        persons?.map((item) => {
          console.log(persons);
          return (
            <PersonCard person={item} key={Math.floor(Math.random() * 100)} />
          );
        })}
    </div>
  );
}
