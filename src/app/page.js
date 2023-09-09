"use client";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

import PersonCard from "@/components/PersonCard";
import { PERSONS } from "@/constants/PERSONS";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Event 1",
    start: new Date(2023, 7, 31, 10, 0),
    end: new Date(2023, 7, 31, 12, 0),
    imageUrl: "https://www.w3schools.com/images/lamp.jpg",
  },
  {
    title: "Lidor",
    start: new Date(PERSONS[0].year, PERSONS[0].month, PERSONS[0].day, 10, 0),
    end: new Date(PERSONS[0].year, PERSONS[0].month, PERSONS[0].day, 12, 0),
  },
];

const EventComponent = ({ event }) => (
  <div className="bg-white text-black p-2 rounded">
    <div>{event.title}</div>
    <img
      className="w-fit h-fit object-cover"
      src={event.imageUrl}
      alt={event.title}
    />
  </div>
);

export default function Home() {
  return (
    // ! up and down display - to printing calendar by the browser :
    <>
      <div className="">
        <div className=" w-screen h-screen">
          {PERSONS.map((person) => (
            <PersonCard person={person} key={Number(person.id)} />
          ))}
        </div>
        <div className="w-screen h-screen bg-white text-black p-2 rounded">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={new Date()}
            views={["month"]}
            components={{ event: EventComponent }}
          />
        </div>
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
