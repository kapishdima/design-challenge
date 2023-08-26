export const DAYS_COUNT = 30;
const DAYS_KEY = "days";

const days = Array(DAYS_COUNT)
  .fill(0)
  .map((_, index) => {
    const day = index + 1;
    return {
      day,
      completed: false,
      completedTask: "",
      time: 0,
    };
  });

export const initDays = () => {
  const storedDays = getDays();

  if (storedDays) {
    return;
  }
  window.localStorage.setItem(DAYS_KEY, JSON.stringify(days));
};

export const getDays = () => {
  const storedDays = window.localStorage.getItem(DAYS_KEY);
  if (!storedDays) {
    return null;
  }
  return JSON.parse(storedDays);
};

export const setDayCompleted = (day, payload) => {
  const storedDays = getDays();
  const updatedDays = storedDays.map((sDay) => {
    if (sDay.day === day.day) {
      return {
        ...sDay,
        completed: true,
        time: payload.time,
        completedTask: payload.completedTask,
      };
    }

    return sDay;
  });

  window.localStorage.setItem(DAYS_KEY, JSON.stringify(updatedDays));
};

export const setDayUncompleted = (day) => {
  const storedDays = getDays();
  const updatedDays = storedDays.map((sDay) => {
    if (sDay.day === day.day) {
      return {
        ...sDay,
        completed: false,
        time: 0,
        completedTask: "",
      };
    }

    return sDay;
  });

  window.localStorage.setItem(DAYS_KEY, JSON.stringify(updatedDays));
};

export const isDayCompleted = (day) => {
  const storedDays = getDays();
  return storedDays.find((sDay) => sDay.day === day.day)?.completed;
};
