import React, { useEffect, useState } from "react";
import axios from "axios";

function PersonCard({ person, events, setEvents }) {
  const [personData, setPersonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://www.hebcal.com/yahrzeit?cfg=json&n1=${person.name}&t1=Birthday&d1=${person.day}&m1=${person.month}&y1=${person.year}&hebdate=on&hdp=1&years=6`
        );

        setPersonData(data);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (personData) {
      const eventsFromPerson = personData.items.map((item, i) => ({
        name: item.name,
        year: item.date.slice(0, 4),
        month: item.date.slice(5, 7),
        day: item.date.slice(8, 10),
      }));

      // Update the events state by merging new events
      setEvents((prevEvents) => [...prevEvents, ...eventsFromPerson]);
    }
  }, [personData, setEvents]);

  return (
    <div>
      {personData && (
        <div>
          <p>{person.name}</p>
        </div>
      )}
      <div className="flex flex-row gap-3">
        {personData &&
          personData.items.map((item) => (
            <div
              key={item.date}
              className="px-1 py-1 w-1/2 rounded-lg bg-[#e5e7eb] shadow-lg"
            >
              {console.log(events)}
              <p>{item.date}</p>
              <p>{`${item.heDateParts.d} ${item.heDateParts.m} ${item.heDateParts.y}`}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default React.memo(PersonCard);
