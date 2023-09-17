import Toast from "@/components/Toast";
import React, { useEffect, useState } from "react";

export default function index() {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastVarient, setToastVarient] = useState("success");
  const [toastHeading, setToastHeading] = useState("Notification Header");
  return (
    <main className="flex min-h-screen w-full justify-center items-center">
      {isToastVisible && (
        <Toast
          varient={toastVarient}
          heading={toastHeading}
          isToastVisible={isToastVisible}
          setIsToastVisible={setIsToastVisible}
        />
      )}
      <div className="flex flex-col gap-4">
        <button
          className="flex justify-center items-center bg-green-300/20 text-green-600 ring-green-600/30 hover:bg-green-300 hover:text-black rounded-full py-2 px-6 ring-2 transition-all duration-300 active:scale-95 disabled:saturate-0 disabled:cursor-not-allowed"
          disabled={isToastVisible}
          onClick={() => {
            if (!isToastVisible) {
              setIsToastVisible(true) &
                setToastVarient("success") &
                setToastHeading("Success Heading");
            }
          }}
        >
          Show Success Toast
        </button>
        <button
          className="flex justify-center items-center bg-blue-300/20 text-blue-400 ring-blue-600/30 hover:bg-blue-300 hover:text-black rounded-full py-2 px-6 ring-2 transition-all duration-300 active:scale-95 disabled:saturate-0 disabled:cursor-not-allowed"
          disabled={isToastVisible}
          onClick={() => {
            if (!isToastVisible) {
              setIsToastVisible(true) &
                setToastVarient("info") &
                setToastHeading("Info Heading");
            }
          }}
        >
          Show Info Toast
        </button>
        <button
          className="flex justify-center items-center bg-yellow-300/20 text-yellow-600 ring-yellow-600/30 hover:bg-yellow-300 hover:text-black rounded-full py-2 px-6 ring-2 transition-all duration-300 active:scale-95 disabled:saturate-0 disabled:cursor-not-allowed"
          disabled={isToastVisible}
          onClick={() => {
            if (!isToastVisible) {
              setIsToastVisible(true) &
                setToastVarient("warning") &
                setToastHeading("Warning Heading");
            }
          }}
        >
          Show Warning Toast
        </button>
        <button
          className="flex justify-center items-center bg-red-300/20 text-red-400 ring-red-600/30 hover:bg-red-300 hover:text-black rounded-full py-2 px-6 ring-2 transition-all duration-300 active:scale-95 disabled:saturate-0 disabled:cursor-not-allowed"
          disabled={isToastVisible}
          onClick={() => {
            if (!isToastVisible) {
              setIsToastVisible(true) &
                setToastVarient("error") &
                setToastHeading("Error Heading");
            }
          }}
        >
          Show Error Toast
        </button>
      </div>
    </main>
  );
}
