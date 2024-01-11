"use client";
import { useState, useEffect } from "react";
import PersonCard from "@/components/PersonCard";
import PersonsList from "@/components/PersonsList";

export default function Home() {
  // const [persons, setPersons] = useState();

  // useEffect(() => {
  //   async function fetchPersons() {
  //     const response = await fetch("http://localhost:3000/api/persons");
  //     const persons = await response.json();
  //     setPersons(persons);
  //     console.log(persons);
  //   }
  //   fetchPersons();
  // }, []);

  return (
    // ! up and down display - to printing calendar by the browser :
    <>
      <div className="">
        {/* <div className=" w-screen h-screen">
          {persons &&
            persons.map((person) => (
              <PersonCard
                person={person}
                key={Number(person.id)}
              />
            ))}
        </div> */}
        <PersonsList />
      </div>
    </>

    // ! side by side display by flex box :
    // <>
    //   <div className="flex flex-row h-screen w-screen">
    //     <div className="w-1/3">
    //       {PERSONS.map((person) => (
    //         <PersonCard person={person} key={Number(person.id)} />
    //       ))}
    //     </div>
    //     <div className="w-2/3 bg-white text-black p-2 rounded">
    //       <Calendar
    //         localizer={localizer}
    //         events={events}
    //         startAccessor="start"
    //         endAccessor="end"
    //         defaultDate={new Date()}
    //         views={["month"]}
    //         components={{ event: EventComponent }}
    //       />
    //     </div>
    //   </div>
    // </>
  );
}
