import { faker } from '@faker-js/faker';
import CustomTooltip from '@/components/customTooltip';
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
    monthtlyData: [
      {
        mth: 'Jan',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Feb',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Mar',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Apr',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'May',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Jun',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Jul',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Aug',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Sep',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Oct',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Nov',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Dec',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
    ],
  },
  {
    name: '2016',
    uv: 1000,
    pv: 1398,
    amt: faker.number.int({ min: 0, max: 2000 }),
    monthtlyData: [
      {
        mth: 'Jan',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Feb',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Mar',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Apr',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'May',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Jun',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Jul',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Aug',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Sep',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Oct',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Nov',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Dec',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
    ],
  },
  {
    name: '2017',
    uv: 2000,
    pv: 9800,
    amt: faker.number.int({ min: 0, max: 2000 }),
    monthtlyData: [
      {
        mth: 'Jan',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Feb',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Mar',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Apr',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'May',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Jun',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Jul',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Aug',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Sep',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Oct',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Nov',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Dec',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
    ],
  },
  {
    name: '2018',
    uv: 3000,
    pv: 3908,
    amt: faker.number.int({ min: 0, max: 2000 }),
    monthtlyData: [
      {
        mth: 'Jan',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Feb',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Mar',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Apr',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'May',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Jun',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Jul',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Aug',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Sep',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Oct',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Nov',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Dec',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
    ],
  },
  {
    name: '2019',
    uv: 4000,
    pv: 4800,
    amt: faker.number.int({ min: 0, max: 2000 }),
    monthtlyData: [
      {
        mth: 'Jan',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Feb',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Mar',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Apr',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'May',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Jun',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Jul',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Aug',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Sep',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Oct',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Nov',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Dec',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
    ],
  },
  {
    name: '2020',
    uv: 5000,
    pv: 3800,
    amt: faker.number.int({ min: 0, max: 2000 }),
    monthtlyData: [
      {
        mth: 'Jan',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Feb',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Mar',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Apr',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'May',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Jun',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Jul',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Aug',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Sep',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Oct',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Nov',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Dec',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
    ],
  },
  {
    name: '2021',
    uv: 6000,
    pv: 4300,
    amt: faker.number.int({ min: 0, max: 2000 }),
    monthtlyData: [
      {
        mth: 'Jan',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Feb',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Mar',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Apr',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'May',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Jun',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Jul',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Aug',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Sep',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Oct',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Nov',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
      {
        mth: 'Dec',
        monthAmt: faker.number.int({ min: 0, max: 2000 }),
      },
    ],
  },
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

console.log(flatData);

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
            padding={{ left: 20, right: 20 }} interval={15}  />
          <YAxis hide={false} axisLine={false} />
          <Tooltip content={<CustomTooltip/>}/>
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
