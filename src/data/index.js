import { faker } from '@faker-js/faker';

const data1 = [
  {
    name: 2015,
    uv: 0,
    pv: 2400,
    amt: 1000,
    monthtlyData: [
      {
        mth: 'Jan',
        monthAmt: 1000,
      },
      {
        mth: 'Feb',
        monthAmt: 1150,
      },
      {
        mth: 'Mar',
        monthAmt: 1200,
      },
      {
        mth: 'Apr',
        monthAmt: 1050,
      },
      {
        mth: 'May',
        monthAmt: 2000,
      },
      {
        mth: 'Jun',
        monthAmt: 2500,
      },
      {
        mth: 'Jul',
        monthAmt: 2300,
      },
      {
        mth: 'Aug',
        monthAmt: 2400,
      },
      {
        mth: 'Sep',
        monthAmt: 1500,
      },
      {
        mth: 'Oct',
        monthAmt: 1800,
      },
      {
        mth: 'Nov',
        monthAmt: 2100,
      },
      {
        mth: 'Dec',
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
        mth: 'Jan',
        monthAmt: 2800,
      },
      {
        mth: 'Feb',
        monthAmt: 2600,
      },
      {
        mth: 'Mar',
        monthAmt: 3200,
      },
      {
        mth: 'Apr',
        monthAmt: 3500,
      },
      {
        mth: 'May',
        monthAmt: 4000,
      },
      {
        mth: 'Jun',
        monthAmt: 3700,
      },
      {
        mth: 'Jul',
        monthAmt: 3400,
      },
      {
        mth: 'Aug',
        monthAmt: 3100,
      },
      {
        mth: 'Sep',
        monthAmt: 3800,
      },
      {
        mth: 'Oct',
        monthAmt: 4100,
      },
      {
        mth: 'Nov',
        monthAmt: 4620,
      },
      {
        mth: 'Dec',
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
        mth: 'Jan',
        monthAmt: 4700,
      },
      {
        mth: 'Feb',
        monthAmt: 4900,
      },
      {
        mth: 'Mar',
        monthAmt: 5000,
      },
      {
        mth: 'Apr',
        monthAmt: 5200,
      },
      {
        mth: 'May',
        monthAmt: 5300,
      },
      {
        mth: 'Jun',
        monthAmt: 5600,
      },
      {
        mth: 'Jul',
        monthAmt: 5800,
      },
      {
        mth: 'Aug',
        monthAmt: 6000,
      },
      {
        mth: 'Sep',
        monthAmt: 6500,
      },
      {
        mth: 'Oct',
        monthAmt: 6100,
      },
      {
        mth: 'Nov',
        monthAmt: 5800,
      },
      {
        mth: 'Dec',
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
        mth: 'Jan',
        monthAmt: 5500,
      },
      {
        mth: 'Feb',
        monthAmt: 5900,
      },
      {
        mth: 'Mar',
        monthAmt: 6000,
      },
      {
        mth: 'Apr',
        monthAmt: 6500,
      },
      {
        mth: 'May',
        monthAmt: 4000,
      },
      {
        mth: 'Jun',
        monthAmt: 2000,
      },
      {
        mth: 'Jul',
        monthAmt: 1100,
      },
      {
        mth: 'Aug',
        monthAmt: 4000,
      },
      {
        mth: 'Sep',
        monthAmt: 3300,
      },
      {
        mth: 'Oct',
        monthAmt: 5500,
      },
      {
        mth: 'Nov',
        monthAmt: 4800,
      },
      {
        mth: 'Dec',
        monthAmt: 6000,
      },
    ],
  },
];

const data2 = [
  {
    name: 2015,
    uv: 0,
    pv: 2400,
    amt: 1000,
    monthtlyData: [
      {
        mth: 'Jan',
        monthAmt: 8000,
      },
      {
        mth: 'Feb',
        monthAmt: 8550,
      },
      {
        mth: 'Mar',
        monthAmt: 8100,
      },
      {
        mth: 'Apr',
        monthAmt: 7950,
      },
      {
        mth: 'May',
        monthAmt: 7600,
      },
      {
        mth: 'Jun',
        monthAmt: 7400,
      },
      {
        mth: 'Jul',
        monthAmt: 7000,
      },
      {
        mth: 'Aug',
        monthAmt: 7900,
      },
      {
        mth: 'Sep',
        monthAmt: 6000,
      },
      {
        mth: 'Oct',
        monthAmt: 7500,
      },
      {
        mth: 'Nov',
        monthAmt: 7100,
      },
      {
        mth: 'Dec',
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
        mth: 'Jan',
        monthAmt: 6900,
      },
      {
        mth: 'Feb',
        monthAmt: 6780,
      },
      {
        mth: 'Mar',
        monthAmt: 6330,
      },
      {
        mth: 'Apr',
        monthAmt: 6600,
      },
      {
        mth: 'May',
        monthAmt: 6100,
      },
      {
        mth: 'Jun',
        monthAmt: 6300,
      },
      {
        mth: 'Jul',
        monthAmt: 6100,
      },
      {
        mth: 'Aug',
        monthAmt: 5000,
      },
      {
        mth: 'Sep',
        monthAmt: 5500,
      },
      {
        mth: 'Oct',
        monthAmt: 5900,
      },
      {
        mth: 'Nov',
        monthAmt: 5550,
      },
      {
        mth: 'Dec',
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
        mth: 'Jan',
        monthAmt: 4900,
      },
      {
        mth: 'Feb',
        monthAmt: 4800,
      },
      {
        mth: 'Mar',
        monthAmt: 5100,
      },
      {
        mth: 'Apr',
        monthAmt: 4500,
      },
      {
        mth: 'May',
        monthAmt: 4200,
      },
      {
        mth: 'Jun',
        monthAmt: 3700,
      },
      {
        mth: 'Jul',
        monthAmt: 3500,
      },
      {
        mth: 'Aug',
        monthAmt: 3400,
      },
      {
        mth: 'Sep',
        monthAmt: 3100,
      },
      {
        mth: 'Oct',
        monthAmt: 3200,
      },
      {
        mth: 'Nov',
        monthAmt: 2800,
      },
      {
        mth: 'Dec',
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
        mth: 'Jan',
        monthAmt: 5500,
      },
      {
        mth: 'Feb',
        monthAmt: 5900,
      },
      {
        mth: 'Mar',
        monthAmt: 6000,
      },
      {
        mth: 'Apr',
        monthAmt: 6500,
      },
      {
        mth: 'May',
        monthAmt: 4000,
      },
      {
        mth: 'Jun',
        monthAmt: 2000,
      },
      {
        mth: 'Jul',
        monthAmt: 1100,
      },
      {
        mth: 'Aug',
        monthAmt: 4000,
      },
      {
        mth: 'Sep',
        monthAmt: 3300,
      },
      {
        mth: 'Oct',
        monthAmt: 3000,
      },
      {
        mth: 'Nov',
        monthAmt: 2000,
      },
      {
        mth: 'Dec',
        monthAmt: 1100,
      },
    ],
  },
];

const data3 = [
  {
    name: 2015,
    uv: 0,
    pv: 2400,
    amt: 1000,
    monthtlyData: [
      {
        mth: 'Jan',
        monthAmt: 4000,
      },
      {
        mth: 'Feb',
        monthAmt: 4000,
      },
      {
        mth: 'Mar',
        monthAmt: 4000,
      },
      {
        mth: 'Apr',
        monthAmt: 4000,
      },
      {
        mth: 'May',
        monthAmt: 4000,
      },
      {
        mth: 'Jun',
        monthAmt: 4000,
      },
      {
        mth: 'Jul',
        monthAmt: 4000,
      },
      {
        mth: 'Aug',
        monthAmt: 4000,
      },
      {
        mth: 'Sep',
        monthAmt: 4000,
      },
      {
        mth: 'Oct',
        monthAmt: 4000,
      },
      {
        mth: 'Nov',
        monthAmt: 4000,
      },
      {
        mth: 'Dec',
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
        mth: 'Jan',
        monthAmt: 4000,
      },
      {
        mth: 'Feb',
        monthAmt: 4000,
      },
      {
        mth: 'Mar',
        monthAmt: 4000,
      },
      {
        mth: 'Apr',
        monthAmt: 4000,
      },
      {
        mth: 'May',
        monthAmt: 4000,
      },
      {
        mth: 'Jun',
        monthAmt: 4000,
      },
      {
        mth: 'Jul',
        monthAmt: 4000,
      },
      {
        mth: 'Aug',
        monthAmt: 4000,
      },
      {
        mth: 'Sep',
        monthAmt: 4000,
      },
      {
        mth: 'Oct',
        monthAmt: 4000,
      },
      {
        mth: 'Nov',
        monthAmt: 4000,
      },
      {
        mth: 'Dec',
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
        mth: 'Jan',
        monthAmt: 4000,
      },
      {
        mth: 'Feb',
        monthAmt: 4000,
      },
      {
        mth: 'Mar',
        monthAmt: 4000,
      },
      {
        mth: 'Apr',
        monthAmt: 4000,
      },
      {
        mth: 'May',
        monthAmt: 4000,
      },
      {
        mth: 'Jun',
        monthAmt: 4000,
      },
      {
        mth: 'Jul',
        monthAmt: 4000,
      },
      {
        mth: 'Aug',
        monthAmt: 4000,
      },
      {
        mth: 'Sep',
        monthAmt: 4000,
      },
      {
        mth: 'Oct',
        monthAmt: 4000,
      },
      {
        mth: 'Nov',
        monthAmt: 4000,
      },
      {
        mth: 'Dec',
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
        mth: 'Jan',
        monthAmt: 4000,
      },
      {
        mth: 'Feb',
        monthAmt: 4000,
      },
      {
        mth: 'Mar',
        monthAmt: 4000,
      },
      {
        mth: 'Apr',
        monthAmt: 4000,
      },
      {
        mth: 'May',
        monthAmt: 4000,
      },
      {
        mth: 'Jun',
        monthAmt: 4000,
      },
      {
        mth: 'Jul',
        monthAmt: 4000,
      },
      {
        mth: 'Aug',
        monthAmt: 4000,
      },
      {
        mth: 'Sep',
        monthAmt: 4000,
      },
      {
        mth: 'Oct',
        monthAmt: 4000,
      },
      {
        mth: 'Nov',
        monthAmt: 4000,
      },
      {
        mth: 'Dec',
        monthAmt: 4000,
      },
    ],
  },
];

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

const dataRandom = Array.from({ length: 5 }, (_, i) => ({
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



const cardData1 = {
  title: "Data Lake House",
  description: "Data solution concept combines the best of data warehousing and big data technologies.",
  volume: "99K",
  growth: "+99X",
  tags: ["Exploding", "Data Warehouse", "Big Data", "Big Data Analytics"],
  graphData: data1,
}

const cardData2 = {
  title: 'MLOps',
  description:
    'Machine learning operations. A set of best practices in the machine learning development cycle.',
  volume: '54K',
  growth: '+99X',
  tags: ['Exploding', 'Data Warehouse', 'Big Data', 'Big Data Analytics'],
  graphData: data2,
};

const cardData3 = {
  title: 'Loop Earplugs',
  description:
    'Earplugs that are designed to be more comfortable and effective than traditional earplugs, often using a loop or other design to fit more securely in the ear.',
  volume: '72K',
  growth: '+99X',
  tags: ['Exploding', 'Data Warehouse', 'Big Data', 'Big Data Analytics'],
  graphData: data3,
};

// named export of data1 and data2

export { data1, data2, data3, dataRandom, cardData1, cardData2, cardData3 };
