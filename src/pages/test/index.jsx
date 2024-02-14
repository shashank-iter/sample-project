import { faker } from "@faker-js/faker";
import regression from "regression";
import CustomTooltip from "@/components/customTooltip";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: 2015,
    uv: 0,
    pv: 2400,
    amt: 1000,
    monthtlyData: [
      {
        mth: "Jan",
        monthAmt: 1000,
      },
      {
        mth: "Feb",
        monthAmt: 1150,
      },
      {
        mth: "Mar",
        monthAmt: 1200,
      },
      {
        mth: "Apr",
        monthAmt: 1050,
      },
      {
        mth: "May",
        monthAmt: 2000,
      },
      {
        mth: "Jun",
        monthAmt: 2500,
      },
      {
        mth: "Jul",
        monthAmt: 2300,
      },
      {
        mth: "Aug",
        monthAmt: 2400,
      },
      {
        mth: "Sep",
        monthAmt: 1500,
      },
      {
        mth: "Oct",
        monthAmt: 1800,
      },
      {
        mth: "Nov",
        monthAmt: 2100,
      },
      {
        mth: "Dec",
        monthAmt: 2700,
      },
    ],
  },
  {
    name: 2016,
    uv: 1000,
    pv: 1398,
    amt: 3000,
    monthtlyData: [
      {
        mth: "Jan",
        monthAmt: 2800,
      },
      {
        mth: "Feb",
        monthAmt: 2600,
      },
      {
        mth: "Mar",
        monthAmt: 3200,
      },
      {
        mth: "Apr",
        monthAmt: 3500,
      },
      {
        mth: "May",
        monthAmt: 4000,
      },
      {
        mth: "Jun",
        monthAmt: 3700,
      },
      {
        mth: "Jul",
        monthAmt: 3400,
      },
      {
        mth: "Aug",
        monthAmt: 3100,
      },
      {
        mth: "Sep",
        monthAmt: 3800,
      },
      {
        mth: "Oct",
        monthAmt: 4100,
      },
      {
        mth: "Nov",
        monthAmt: 4620,
      },
      {
        mth: "Dec",
        monthAmt: 4483,
      },
    ],
  },
  {
    name: 2017,
    uv: 2000,
    pv: 9800,
    amt: 4566,
    monthtlyData: [
      {
        mth: "Jan",
        monthAmt: 4700,
      },
      {
        mth: "Feb",
        monthAmt: 4900,
      },
      {
        mth: "Mar",
        monthAmt: 5000,
      },
      {
        mth: "Apr",
        monthAmt: 5200,
      },
      {
        mth: "May",
        monthAmt: 5300,
      },
      {
        mth: "Jun",
        monthAmt: 5600,
      },
      {
        mth: "Jul",
        monthAmt: 5800,
      },
      {
        mth: "Aug",
        monthAmt: 6000,
      },
      {
        mth: "Sep",
        monthAmt: 6500,
      },
      {
        mth: "Oct",
        monthAmt: 6100,
      },
      {
        mth: "Nov",
        monthAmt: 5800,
      },
      {
        mth: "Dec",
        monthAmt: 5100,
      },
    ],
  },
  {
    name: 2018,
    uv: 2000,
    pv: 9800,
    amt: 4566,
    monthtlyData: [
      {
        mth: "Jan",
        monthAmt: 5500,
      },
      {
        mth: "Feb",
        monthAmt: 5900,
      },
      {
        mth: "Mar",
        monthAmt: 6000,
      },
      {
        mth: "Apr",
        monthAmt: 6500,
      },
      {
        mth: "May",
        monthAmt: 4000,
      },
      {
        mth: "Jun",
        monthAmt: 2000,
      },
      {
        mth: "Jul",
        monthAmt: 1100,
      },
      {
        mth: "Aug",
        monthAmt: 4000,
      },
      {
        mth: "Sep",
        monthAmt: 3300,
      },
      {
        mth: "Oct",
        monthAmt: 5500,
      },
      {
        mth: "Nov",
        monthAmt: 4800,
      },
      {
        mth: "Dec",
        monthAmt: 6000,
      },
      
    ],
  },
];



// console.log(regressionLine, "regressionLine");

let flatData = data.reduce((acc, yearData) => {
  yearData.monthtlyData.forEach((monthData) => {
    acc.push({
 
      year: yearData.name,
      month: monthData.mth,
      monthAmt: monthData.monthAmt,
     
    });
  });
  return acc;
}, []);

// console.log(flatData, "flatData");
const regressionLine = regression.linear(flatData.map((d) => [d.year, d.monthAmt]));
console.log(regressionLine, "regressionLine");
flatData = flatData.map((d) => {
  return {
    ...d,
    uv: regressionLine.predict(d.year)[1],
  };
});
console.log(flatData, "flatData");

function Test() {
  return (
    <div className="bg-white ">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width={340}
          height={300}
          data={flatData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          className="w-full"
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
              <stop offset="5%" stopColor="#2e5ce5" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#2e5ce5" stopOpacity={0} />
            </linearGradient>
            {/* make a horizontally fading gradient */}
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="year"
            padding={{ left: 20, right: 20 }}
            interval={11}
          />
          <YAxis hide={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="transparent"
            fill="url(#colorUv)"
          />
          {/* <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          /> */}
          <Area
            type="monotone"
            dataKey="monthAmt"
            stackId="1"
            stroke="#2e5ce5"
            fill="transparent"
            strokeWidth="3.5"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Test;
