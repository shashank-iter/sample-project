import { faker } from '@faker-js/faker';

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    name: '2015',
    uv: 0,
    pv: 2400,
    amt: faker.number.int({ min: 0, max: 2000 }),
  },
  {
    name: '2016',
    uv: 1000,
    pv: 1398,
    amt: faker.number.int({ min: 0, max: 2000 }),
  },
  {
    name: '2017',
    uv: 2000,
    pv: 9800,
    amt: faker.number.int({ min: 0, max: 2000 }),
  },
  {
    name: '2018',
    uv: 3000,
    pv: 3908,
    amt: faker.number.int({ min: 0, max: 2000 }),
  },
  {
    name: '2019',
    uv: 4000,
    pv: 4800,
    amt: faker.number.int({ min: 0, max: 2000 }),
  },
  {
    name: '2020',
    uv: 5000,
    pv: 3800,
    amt: faker.number.int({ min: 0, max: 2000 }),
  },
  {
    name: '2021',
    uv: 6000,
    pv: 4300,
    amt: faker.number.int({ min: 0, max: 2000 }),
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
function Test() {
  return (
    <div className="bg-white ">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width={340}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          className="w-full"
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2e5ce5" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#2e5ce5" stopOpacity={0} />
            </linearGradient>
            {/* make a horizontally fading gradient */}
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" padding="gap" />
          <YAxis hide={true} />
          <Tooltip />
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
            dataKey="amt"
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
