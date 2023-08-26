import { useEffect, useState } from "react";
import { getDays } from "../api/api";
import { Day } from "./Day";

export const DaysList = () => {
  const [days, setDays] = useState([]);

  const fetchDays = () => {
    const storedDays = getDays();
    setDays(storedDays);
  };

  useEffect(() => {
    fetchDays();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {days.map((day, index) => {
        return (
          <Day
            day={day}
            key={day.day}
            onSuccess={fetchDays}
            disabled={day.day !== 1 && !days[index - 1]?.completed}
          />
        );
      })}
    </div>
  );
};
