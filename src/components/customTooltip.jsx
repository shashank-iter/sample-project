import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { Tooltip } from "react-tooltip";

const CustomTooltip = (props) => {
  const { active, payload } = props;
  const convertNumberToKForm = (number) => {
    const k = 1000;
    if (number > k) {
      const formattedNumber = (number / k).toFixed(1);
      return formattedNumber.includes(".0")
        ? formattedNumber.slice(0, -2) + "k"
        : formattedNumber + "k";
    } else {
      return number.toString();
    }
  };

  console.log(payload);
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#bfdbfe",
          color: "#fff",
          padding: "5px 10px", 
          borderRadius: "3px",
        }}
      >
        <p className="w-full text-center text-black font-semibold text-xs">
          {payload[0].payload.name}
        </p>
        <p className="text-xl text-center flex flex-row place-items-center gap-x-2 font-semibold text-blue-500">
          <p>{convertNumberToKForm(payload[0].value) + "/year"}</p>
          <QuestionMarkCircleIcon
          className="w-5 h-5 hover:text-black text-blue-500 pt-1"
          data-tooltip-id="my-growth"
          // data-tooltip-content="The increase in search volume since the previous full month."
        />
        <Tooltip id="my-growth" place="top">
          <div className="flex flex-col">
            <span className="">The increase in search volume</span>
            <span className="">since the previous full month.</span>
          </div>
        </Tooltip>
        </p>
        
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
