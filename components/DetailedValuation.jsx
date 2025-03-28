"use client";

import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

const DetailedValuation = () => {
  const [appData, setAppData] = useState(null);

  useEffect(() => {
    const storedData = getCookie("appData");

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setAppData(parsedData);
    }
  }, []);

  if (!appData) return;

  const { valuation } = appData.detailedQuestionnaire;

  return `$${valuation}M`;
};

export default DetailedValuation;
