import Spinner from "@/components/animata/progress ";
import React from "react";

export default function loading() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Spinner
          childSize="h-6 w-6"
          className="bg-gradient-to-bl from-black to-primary"
          outerSize="h-8 w-8"
        />
      </div>
    </>
  );
}
