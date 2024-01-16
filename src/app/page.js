"use client";
import { useState, useEffect } from "react";
import PersonsList from "@/components/PersonsList";

export default function Home() {
  return (
    <>
      <div className="">
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
