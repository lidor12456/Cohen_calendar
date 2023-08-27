"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PersonCard({ person }) {
  const [personData, setPersonData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://www.hebcal.com/yahrzeit?cfg=json&n1=${person.name}&t1=Birthday&d1=${person.day}&m1=${person.month}&y1=${person.year}&hebdate=on&years=10`
        );
        console.log(data);
        setPersonData(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        {personData && console.log(personData.items)}
        <div>{/* <p>{person.name}</p> */}</div>
        <div>
          <div class="flex flex-row gap-3">
            {personData &&
              personData.items.map((item) => (
                <div class="px-3 py-2 pe-0 rounded-lg bg-indigo-500 shadow-lg">
                  {item.date}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
