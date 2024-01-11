"use client";

import {
  COUNT_DIGIT,
  ONE_MINUTE,
  ONE_SECOND,
  THOUSAND_MILLISECONDS,
} from "@/app/constants";
import useSignupStateStore from "@/store/useSignupStateStore";
import { useEffect, useState } from "react";

const CertificationCount = () => {
  const signupState = useSignupStateStore();

  const [time, setTime] = useState(5);
  const [fontColor, setFontColor] = useState("");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (signupState.isCertification) {
      interval = setInterval(() => {
        setTime((prev) => prev - ONE_SECOND);
      }, THOUSAND_MILLISECONDS);
    }

    if (time === 0) {
      setFontColor("red");
      setTime(5);
      signupState.setIsCertification(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [time, signupState]);

  const formatTime = (timer: number): string => {
    const minutes = Math.floor(timer / ONE_MINUTE);
    const seconds = timer % ONE_MINUTE;
    return `${minutes.toString().padStart(COUNT_DIGIT, "0")} : ${seconds
      .toString()
      .padStart(COUNT_DIGIT, "0")}`;
  };

  return <div className={`text-${fontColor}`}>{formatTime(time)}</div>;
};

export default CertificationCount;