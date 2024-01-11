import { useEffect, useState } from "react";
import axios from "axios";
import { fetchSixYearsOfPersonsDates } from "@/app/utils";

function PersonCard({ person }) {
  const [personData, setPersonData] = useState(null);

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
              <p>{item.date}</p>
              <p>{`${item.heDateParts.d} ${item.heDateParts.m} ${item.heDateParts.y}`}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PersonCard;
