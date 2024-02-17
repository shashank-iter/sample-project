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
import createTrend from 'trendline';

const data = [
    {
      name: 2015,
      uv: 0,
      pv: 2400,
      amt: 1000,
      monthtlyData: [
        {
          mth: "Jan",
          monthAmt: 4000,
        },
        {
          mth: "Feb",
          monthAmt: 4000,
        },
        {
          mth: "Mar",
          monthAmt: 4000,
        },
        {
          mth: "Apr",
          monthAmt: 4000,
        },
        {
          mth: "May",
          monthAmt: 4000,
        },
        {
          mth: "Jun",
          monthAmt: 4000,
        },
        {
          mth: "Jul",
          monthAmt: 4000,
        },
        {
          mth: "Aug",
          monthAmt: 4000,
        },
        {
          mth: "Sep",
          monthAmt: 4000,
        },
        {
          mth: "Oct",
          monthAmt: 4000,
        },
        {
          mth: "Nov",
          monthAmt: 4000,
        },
        {
          mth: "Dec",
          monthAmt: 4000,
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
          monthAmt: 4000,
        },
        {
          mth: "Feb",
          monthAmt: 4000,
        },
        {
          mth: "Mar",
          monthAmt: 4000,
        },
        {
          mth: "Apr",
          monthAmt: 4000,
        },
        {
          mth: "May",
          monthAmt: 4000,
        },
        {
          mth: "Jun",
          monthAmt: 4000,
        },
        {
          mth: "Jul",
          monthAmt: 4000,
        },
        {
          mth: "Aug",
          monthAmt: 4000,
        },
        {
          mth: "Sep",
          monthAmt: 4000,
        },
        {
          mth: "Oct",
          monthAmt: 4000,
        },
        {
          mth: "Nov",
          monthAmt: 4000,
        },
        {
          mth: "Dec",
          monthAmt: 4000,
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
          monthAmt: 4000,
        },
        {
          mth: "Feb",
          monthAmt: 4000,
        },
        {
          mth: "Mar",
          monthAmt: 4000,
        },
        {
          mth: "Apr",
          monthAmt: 4000,
        },
        {
          mth: "May",
          monthAmt: 4000,
        },
        {
          mth: "Jun",
          monthAmt: 4000,
        },
        {
          mth: "Jul",
          monthAmt: 4000,
        },
        {
          mth: "Aug",
          monthAmt: 4000,
        },
        {
          mth: "Sep",
          monthAmt: 4000,
        },
        {
          mth: "Oct",
          monthAmt: 4000,
        },
        {
          mth: "Nov",
          monthAmt: 4000,
        },
        {
          mth: "Dec",
          monthAmt: 4000,
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
          monthAmt: 4000,
        },
        {
          mth: "Feb",
          monthAmt: 4000,
        },
        {
          mth: "Mar",
          monthAmt: 4000,
        },
        {
          mth: "Apr",
          monthAmt: 4000,
        },
        {
          mth: "May",
          monthAmt: 4000,
        },
        {
          mth: "Jun",
          monthAmt: 4000,
        },
        {
          mth: "Jul",
          monthAmt: 4000,
        },
        {
          mth: "Aug",
          monthAmt: 4000,
        },
        {
          mth: "Sep",
          monthAmt: 4000,
        },
        {
          mth: "Oct",
          monthAmt: 4000,
        },
        {
          mth: "Nov",
          monthAmt: 4000,
        },
        {
          mth: "Dec",
          monthAmt: 4000,
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

let cumulativeMonth = 0;
let flatData = data.reduce((acc, yearData) => {
  yearData.monthtlyData.forEach((monthData) => {
    acc.push({
      year: yearData.name,
      month: monthData.mth,
      monthAmt: monthData.monthAmt,
      timeslot: cumulativeMonth++,
    });
  });
  return acc;
}, []);

// console.log(flatData, "flatData");
// const regressionLine = regression.linear(flatData.map((d, i) => [i, d.monthAmt]));
// console.log(regressionLine, "regressionLine");

// flatData = flatData.map((d, i) => {
//   return {
//     ...d,
//     uv: regressionLine.predict(i)[1],
//   };
// });
// console.log(flatData, "flatData");

// for trendline start
let weights = flatData.map((data) => data.monthAmt);
let yMax = Math.max(...weights);
let yMin = Math.min(...weights);
let timestamps = flatData.map((data) => data.timeslot);
let xMax = Math.max(...timestamps);
let xMin = Math.min(...timestamps);

let trendData = () => {
  const trend = createTrend(flatData, 'timeslot', 'monthAmt');

  return [
    { amount: trend.calcY(xMin), timeslot: xMin },
    { amount: trend.calcY(xMax), timeslot: xMax },
  ];
};

const tdLine = trendData();

console.table('trendData', tdLine);
// for trendline end

function Test() {
  
  return (
    <div className="bg-white ">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width={340}
          height={300}
          // data={flatData}
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
            dataKey="timeslot"
            type="number"
            padding={{ left: 20, right: 20 }}
            // interval={11}
            domain={['dataMin', 'dataMax']}
            ticks={[0, 12, 24, 36]}
            tickFormatter={(value) => {
              return Math.floor(value / 12 + 2015);
            }}
          />
          <YAxis
            hide={true}
            axisLine={false}
            domain={[0, yMax + 1000]}
            type="number"
            dataKey={'amount'}
          />
          <Tooltip content={<CustomTooltip />} />

          {/* normal graph line */}
          <Area
            type="monotone"
            data={flatData}
            dataKey="monthAmt"
            stackId="1"
            stroke="#2e5ce5"
            fill="transparent"
            strokeWidth="3.5"
          />

          {/* trend graph */}
          <Area
            type="monotone"
            data={tdLine}
            dataKey="amount"
            stackId="1"
            stroke="transparent"
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Test;
