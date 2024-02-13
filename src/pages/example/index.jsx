import React from "react";
import dynamic from "next/dynamic";

const Test = dynamic(() => import("../test"), { ssr: false });
function index() {
  return (
    <>
      <div className="max-w-md">
        <Test />
      </div>
    </>
  );
}

export default index;
