'use client';
import { useEffect, useState } from "react";

export default function Client() {
  const [now, setNow] = useState<Date | undefined>();

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  return <p>{now?.toLocaleTimeString()}</p>;
}
