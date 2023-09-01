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
    imageUrl: "https://www.w3schools.com/images/lamp.jpg", // URL to your image
  },
];

const EventComponent = ({ event }) => (
  <div>
    <div>{event.title}</div>
    <img src={event.imageUrl} alt={event.title} style={{ maxWidth: "100%" }} />
  </div>
);

export default function Home() {
  return (
    <>
      <div class="flex flex-row h-screen w-screen">
        <div class="w-1/3">
          {PERSONS.map((person) => (
            <PersonCard person={person} key={Number(person.id)} />
          ))}
        </div>
        <div class="w-2/3">
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
  );
}
