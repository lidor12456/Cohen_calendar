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
      <div class="flex flex-row">
        {personData && console.log(personData.items[0].date)}
        <div>
          <h3>Name</h3>
          <p>{person.name}</p>
        </div>
        <div>
          <h3>Dates</h3>
          {personData && personData.items.map((item) => <p>{item.date}</p>)}
        </div>
      </div>
    </>
  );
}
