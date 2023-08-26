import { useEffect } from "react";
import { Header } from "./components/Header";
import { initDays } from "./api/api";
import { DaysList } from "./components/DaysList";

export const Challange = () => {
  useEffect(() => {
    initDays();
  }, []);

  return (
    <main className="dark text-foreground bg-background">
      <Header />

      <div className="flex justify-center">
        <div className="min-w-[1024px] max-w-[1024px] min-h-screen dark bg-background py-10">
          <h2 className="mb-4 font-bold text-4xl">Август 2023</h2>
          <DaysList />
        </div>
      </div>
    </main>
  );
};
