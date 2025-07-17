"use client"; // Required for client-side React hooks in Next.js App Router

import { createContext, useContext, useEffect, useState } from "react";

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [value, setValue] = useState(1);

  // Update from localStorage event (other tabs/windows)
  useEffect(() => {
    const storedValue = localStorage.getItem("DP");
    if (storedValue) {
      setValue(parseInt(storedValue));
    }
    const onStorageChange = (e) => {
      if (e.key === "DP") {
        setValue(e.newValue);
      }
    };
    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  }, []);

  // Manual update handler
  const updateImageValue = (newVal) => {
    localStorage.setItem("DP", newVal);
    setValue(newVal);
  };

  return (
    <ImageContext.Provider value={{ value, updateImageValue }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => useContext(ImageContext);
