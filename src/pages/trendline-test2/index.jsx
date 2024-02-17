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
  ComposedChart,
} from 'recharts';
import createTrend from 'trendline';

import { faker } from '@faker-js/faker';

const Index = () => {
  const weightData = [
    { amount: 2, timeslot: 1 },
    { amount: 1000, timeslot: 2 },
    { amount: 500, timeslot: 3 },
    { amount: 400, timeslot: 4 },
    { amount: 800, timeslot: 5 },
    { amount: 500, timeslot: 6 },
    { amount: 30, timeslot: 7 },
    { amount: 200, timeslot: 8 },
  ];

  let weights = weightData.map((data) => data.amount);
  let yMax = Math.max(...weights);
  let yMin = Math.min(...weights);
  let timestamps = weightData.map((data) => data.timeslot);
  let xMax = Math.max(...timestamps);
  let xMin = Math.min(...timestamps);

  let trendData = () => {
    const trend = createTrend(weightData, 'timeslot', 'amount');

    return [
      { amount: trend.calcY(xMin), timeslot: xMin },
      { amount: trend.calcY(xMax), timeslot: xMax },
    ];
  };

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

  const dummyData = Array.from({ length: 5 }, (_, i) => ({
    year: 2001 + i,
    uv: faker.number.int({ min: 0, max: 1000 }),
    pv: faker.number.int({ min: 0, max: 1000 }),
    amt: faker.number.int({ min: 0, max: 1000 }),
    monthtlyData: monthsName.map((month, i) => ({
      mth: month,
      monthAmt: faker.number.int({ min: 1870, max: 3400 }),
      monthNumber: i,
    })),
  }));

  // console.log(dummyData);

  // get flattened data
  let cumulativeMonth = 0;
  let flattenedDummyDate = dummyData.reduce((acc, yearData) => {
    yearData.monthtlyData.forEach((monthData) => {
      acc.push({
        year: yearData.year,
        month: monthData.mth,
        monthAmt: monthData.monthAmt,
        timeslot: cumulativeMonth++,
      });
    });
    return acc;
  }, []);

  // console.table(flattenedDummyDate);

  // reassign weights, yMax, yMin, timestamps, xMax, xMin, trendData using flattenedDummyDate

  weights = flattenedDummyDate.map((data) => data.monthAmt);
  yMax = Math.max(...weights);
  yMin = Math.min(...weights);
  timestamps = flattenedDummyDate.map((data) => data.timeslot);
  xMax = Math.max(...timestamps);
  xMin = Math.min(...timestamps);

  trendData = () => {
    const trend = createTrend(flattenedDummyDate, 'timeslot', 'monthAmt');

    return [
      { amount: trend.calcY(xMin), timeslot: xMin },
      { amount: trend.calcY(xMax), timeslot: xMax },
    ];
  };

  // console.log(trendData());

  const tdLine = trendData();
  return (
    <div>
      Trendline Sale
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          width={340}
          height={300}
          // data={flattenedDummyDate}
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

          {/* <XAxis
            dataKey="year"
            type="category"
            // padding={{ left: 20, right: 20 }}
            interval={11}
            domain={['dataMin', 'dataMax']}
            // margin={{ top: 5, right: 30, bottom: 5, left: -20 }}
            xAxisId={0}
          /> */}
          <XAxis
            dataKey="timeslot"
            type="number"
            // includeHidden
            // padding={{ left: 20, right: 20 }}
            // interval={11}
            domain={['dataMin', 'dataMax']}
            // margin={{ top: 5, right: 30, bottom: 5, left: -20 }}
            // xAxisId={1}
            ticks={[0, 12, 24, 36, 48, 60]}
            tickFormatter={(value) => {
              return Math.floor(value / 12 + 2001);
            }}
          />

          <YAxis
            // hide={false}
            axisLine={false}
            domain={[yMin, yMax]}
            type="number"
            dataKey="amount"
          />
          <RechartsTooltip />
          {/* reference line for timeslot */}
          {/* <Area
            type="monotone"
            data={flattenedDummyDate}
            dataKey="timeslot"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          /> */}

          {/* normal graph line */}
          <Line
            type="monotone"
            data={flattenedDummyDate}
            dataKey="monthAmt"
            stackId="1"
            stroke="#2e5ce5"
            fill="transparent"
            strokeWidth="3.5"
          />

          {/* trend line */}
          <Area
            type="monotone"
            data={trendData()}
            dataKey="amount"
            stackId="1"
            stroke="transparent"
            fill="url(#colorUv)"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Index;
