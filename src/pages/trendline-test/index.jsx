import React from 'react';

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
  Line,
  Tooltip as RechartsTooltip,
} from 'recharts';
import createTrend from 'trendline';

import { faker } from '@faker-js/faker';

const Index = () => {
  const weightData = [
    { wamount: 2, timeslot: 1 },
    { wamount: 1000, timeslot: 2 },
    { wamount: 500, timeslot: 3 },
    { wamount: 400, timeslot: 4 },
    { wamount: 800, timeslot: 5 },
    { wamount: 500, timeslot: 6 },
    { wamount: 30, timeslot: 7 },
    { wamount: 200, timeslot: 8 },
  ];

  let weights = weightData.map((data) => data.wamount);
  let yMax = Math.max(...weights);
  let yMin = Math.min(...weights);
  let timestamps = weightData.map((data) => data.timeslot);
  let xMax = Math.max(...timestamps);
  let xMin = Math.min(...timestamps);

  let trendData = () => {
    const trend = createTrend(weightData, 'timeslot', 'wamount');

    return [
      { amount: trend.calcY(xMin), timeslot: xMin },
      { amount: trend.calcY(xMax), timeslot: xMax },
    ];
  };

  console.table(weightData);
  console.table(trendData());

  // using more data
  const monthsName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const dummyData = Array.from({ length: 4 }, (_, i) => ({
    year: 2000 + i,
    uv: faker.number.int({ min: 0, max: 1000 }),
    pv: faker.number.int({ min: 0, max: 1000 }),
    amt: faker.number.int({ min: 0, max: 1000 }),
    monthtlyData: monthsName.map((month, i) => ({
      mth: month,
      monthAmt: faker.number.int({ min: 0, max: 1000 }),
      monthNumber: i,
    })),
  }));

  // console.log(dummyData);

  // get flattened data
  let flattenedDummyDate = dummyData.reduce((acc, yearData) => {
    yearData.monthtlyData.forEach((monthData) => {
      acc.push({
        year: yearData.year,
        month: monthData.mth,
        monthAmt: monthData.monthAmt,
        monthNumber: monthData.monthNumber,
      });
    });
    return acc;
  }, []);

  // console.table(flattenedDummyDate);

  // reassign weights, yMax, yMin, timestamps, xMax, xMin, trendData using flattenedDummyDate

  // weights = flattenedDummyDate.map((data) => data.monthAmt);
  // yMax = Math.max(...weights);
  // yMin = Math.min(...weights);
  // timestamps = flattenedDummyDate.map((data) => data.monthNumber);
  // xMax = Math.max(...timestamps);
  // xMin = Math.min(...timestamps);

  // trendData = () => {
  //   const trend = createTrend(flattenedDummyDate, 'monthNumber', 'monthAmt');

  //   return [
  //     { amount: trend.calcY(xMin), timeslot: xMin },
  //     { amount: trend.calcY(xMax), timeslot: xMax },
  //   ]
  // }

  // console.log(trendData());
  return (
    <div>
      Trendline Sale
      <LineChart
        width={500}
        height={300}
        margin={{ top: 5, right: 30, bottom: 5, left: -20 }}
      >
        <XAxis
          name="Time"
          // type="number"
          dataKey="timeslot"
          domain={['dataMin', 'dataMax']}
        />
        <YAxis
          name="Weight"
          type="number"
          dataKey="amount"
          domain={[yMin, yMax]}
        />
        <Line
          type="monotoneX"
          dataKey="wamount"
          stroke="blue"
          data={weightData}
        />
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <RechartsTooltip />

        <Line
          data={trendData()}
          dataKey="amount"
          stroke="red"
          fill="red"
          strokeDasharray="3"
        />
      </LineChart>
    </div>
  );
};

export default Index;
