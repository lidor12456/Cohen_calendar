"use client";
import { useEffect, useState } from "react";
import {
  fetchSixYearsOfPersonsDates,
  findDatesByOneGeogDate,
} from "@/app/utils";

function PersonCard({ person }) {
  const [personData, setPersonData] = useState([]);
  const [personData2, setPersonData2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSixYearsOfPersonsDates(person);
        setPersonData(data);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    try {
      const data2 = findDatesByOneGeogDate(
        new Date(person.year, person.month - 1, person.day)
      );
      setPersonData2(data2);
      console.log(data2);
      console.log(person);
    } catch (e) {
      console.log(e.message);
    }

    // fetchData();
  }, []);

  return (
    <div>
      {personData && (
        <div>
          <p>{person.firstName}</p>
          <span>
            <p>{person.lastName}</p>
          </span>
        </div>
      )}
      <div className="flex flex-row gap-3">
        {personData &&
          personData.items?.map((item) => (
            <div
              key={item.date}
              className="px-1 py-1 w-1/2 border-solid rounded-md border-2 border-black-500 bg-[#174bb533] shadow-lg"
            >
              <p>{`${item.heDateParts.d} ${item.heDateParts.m} ${item.heDateParts.y}`}</p>
              <p>{item.date}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PersonCard;
