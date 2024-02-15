import { faker } from '@faker-js/faker';
import regression from "regression";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import CustomTooltip from '@/components/customTooltip';
import { Log } from 'victory';
const data = [
  {
    name: 2015,
    uv: 0,
    pv: 2400,
    amt: 1000,
    monthtlyData: [
      {
        mth: "Jan",
        monthAmt: 8000,
      },
      {
        mth: "Feb",
        monthAmt: 8550,
      },
      {
        mth: "Mar",
        monthAmt: 8100,
      },
      {
        mth: "Apr",
        monthAmt: 7950,
      },
      {
        mth: "May",
        monthAmt: 7600,
      },
      {
        mth: "Jun",
        monthAmt: 7400,
      },
      {
        mth: "Jul",
        monthAmt: 7000,
      },
      {
        mth: "Aug",
        monthAmt: 7900,
      },
      {
        mth: "Sep",
        monthAmt: 6000,
      },
      {
        mth: "Oct",
        monthAmt: 7500,
      },
      {
        mth: "Nov",
        monthAmt: 7100,
      },
      {
        mth: "Dec",
        monthAmt: 7200,
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
        monthAmt: 6900,
      },
      {
        mth: "Feb",
        monthAmt: 6780,
      },
      {
        mth: "Mar",
        monthAmt: 6330,
      },
      {
        mth: "Apr",
        monthAmt: 6600,
      },
      {
        mth: "May",
        monthAmt: 6100,
      },
      {
        mth: "Jun",
        monthAmt: 6300,
      },
      {
        mth: "Jul",
        monthAmt: 6100,
      },
      {
        mth: "Aug",
        monthAmt: 5000,
      },
      {
        mth: "Sep",
        monthAmt: 5500,
      },
      {
        mth: "Oct",
        monthAmt: 5900,
      },
      {
        mth: "Nov",
        monthAmt: 5550,
      },
      {
        mth: "Dec",
        monthAmt: 5533,
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
        monthAmt: 4900,
      },
      {
        mth: "Feb",
        monthAmt: 4800,
      },
      {
        mth: "Mar",
        monthAmt: 5100,
      },
      {
        mth: "Apr",
        monthAmt: 4500,
      },
      {
        mth: "May",
        monthAmt: 4200,
      },
      {
        mth: "Jun",
        monthAmt: 3700,
      },
      {
        mth: "Jul",
        monthAmt: 3500,
      },
      {
        mth: "Aug",
        monthAmt: 3400,
      },
      {
        mth: "Sep",
        monthAmt: 3100,
      },
      {
        mth: "Oct",
        monthAmt: 3200,
      },
      {
        mth: "Nov",
        monthAmt: 2800,
      },
      {
        mth: "Dec",
        monthAmt: 2500,
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
        monthAmt: 3000,
      },
      {
        mth: "Nov",
        monthAmt: 2000,
      },
      {
        mth: "Dec",
        monthAmt: 1100,
      },
      
    ],
  },
];


const data2 = [
  { name: '2015', uv: 4000, pv: 2400, amt: 0 },
  { name: '2016', uv: 3000, pv: 1398, amt: 2210 },
  { name: '2017', uv: 2000, pv: 9800, amt: 2290 },
  { name: '2018', uv: 2780, pv: 3908, amt: 2000 },
  { name: '2019', uv: 1890, pv: 4800, amt: 2181 },
  { name: '2020', uv: 2390, pv: 3800, amt: 2500 },
  { name: '2021', uv: 3490, pv: 4300, amt: 2100 },
];

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
const regressionLine = regression.linear(flatData.map((d,i) => [i, d.monthAmt]));
console.log(regressionLine, "regressionLine");
flatData = flatData.map((d, i) => {
  return {
    ...d,
    uv: regressionLine.predict(i)[1],
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
          <XAxis dataKey="year"
            padding={{ left: 20, right: 20 }} interval={11}  />
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltip/>} />
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
