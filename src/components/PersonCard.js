"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PersonCard({ person }) {
  const [personData, setPersonData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://www.hebcal.com/yahrzeit?cfg=json&n1=${person.name}&t1=Birthday&d1=${person.day}&m1=${person.month}&y1=${person.year}&hebdate=on&hdp=1&years=6`
        );
        console.log(data);
        setPersonData(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);
  let events = [];
  const createEventFromPersonDate = (personData) => {
    personData.items.map((person) => {
      events.push({
        name: person.name,
        year: person.date.slice(0, 4),
        month: person.date.slice(5, 7),
        day: person.date.slice(8, 10),
      });
    });
    console.log(events);
  };
  if (personData) {
    createEventFromPersonDate(personData);
  }
  return (
    <>
      <div>
        {personData && console.log(personData.items)}
        <div>
          <p>{person.name}</p>
        </div>
        <div>
          <div class="flex flex-row flex-row gap-3">
            {personData &&
              personData.items.map((item) => (
                <div class="px-1 py-1 w-1/2 rounded-lg bg-[#e5e7eb] shadow-lg">
                  <p>{item.date}</p>
                  <p>{item.date.slice(0, 4)}</p>
                  <p>{item.date.slice(5, 7)}</p>
                  <p>{item.date.slice(8, 10)}</p>
                  <p>{`${item.heDateParts.d} ${item.heDateParts.m} ${item.heDateParts.y}`}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
