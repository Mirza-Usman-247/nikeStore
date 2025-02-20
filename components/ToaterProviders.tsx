"use client";
import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#ffffff",
          color: "#111111",
        },
      }}
    />
  );
};

export default ToasterProvider;