// main/components/context/AppContext.tsx
"use client";
import React, { createContext, useContext } from "react";

const AppContext = createContext({ baseURL: "" });

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const baseURL = "https://gicubuntuapi.wintercodedesign.com";
  return (
    <AppContext.Provider value={{ baseURL }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const url = useContext(AppContext);
  if (!url) throw new Error("useAppContext must be used inside ApiUrlProvider");
  return url;
};
