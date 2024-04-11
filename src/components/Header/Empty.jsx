"use client";
import { useEffect, useState } from "react";
import React from "react";

const Empty = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
      console.log(size);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size]);
  if (size < 650) return <></>;
  return <div className="empty"></div>;
};

Empty.propTypes = {};

export default Empty;
