import { useEffect, useState } from "preact/hooks";

function formatDate(date: Date): string {
  return date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');
}

export const useTime = (refreshCycle = 100): string => {
  const [now, setNow] = useState(formatDate(new Date()));
  useEffect(() => {
    const intervalId = setInterval(() => setNow(formatDate(new Date())), refreshCycle);
    return () => clearInterval(intervalId);
  }, [refreshCycle, setInterval, clearInterval, setNow]);

  return now;
};
