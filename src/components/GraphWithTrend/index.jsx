import { useMemo } from 'react';
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import createTrend from 'trendline';
import CustomTooltip from '../customTooltip';

const TrendGraph = ({ data, showTooltip = true, showYaxis = true }) => {
  let cumulativeMonth = 0;

  const flatData = useMemo(
    () =>
      data.reduce((acc, yearData) => {
        yearData.monthtlyData.forEach((monthData) => {
          acc.push({
            year: yearData.name,
            month: monthData.mth,
            monthAmt: monthData.monthAmt,
            timeslot: cumulativeMonth++,
          });
        });
        return acc;
      }, []),
    [data]
  );

  const weights = useMemo(
    () => flatData.map((data) => data.monthAmt),
    [flatData]
  );
  const yMax = useMemo(() => Math.max(...weights), [weights]);
  const yMin = useMemo(() => Math.min(...weights), [weights]);

  const timestamps = useMemo(
    () => flatData.map((data) => data.timeslot),
    [flatData]
  );
  const xMax = useMemo(() => Math.max(...timestamps), [timestamps]);
  const xMin = useMemo(() => Math.min(...timestamps), [timestamps]);

  const trendData = useMemo(() => {
    const trend = createTrend(flatData, 'timeslot', 'monthAmt');

    return [
      { amount: trend.calcY(xMin), timeslot: xMin },
      { amount: trend.calcY(xMax), timeslot: xMax },
    ];
  }, [flatData, xMin, xMax]);

  const tdLine = trendData;

  // console.table('trendData', tdLine);

  return (
    <div className="bg-white ">
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          width={340}
          height={300}
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
            domain={['dataMin', 'dataMax']}
            // manually setting the ticks and manipulating the tick formatter
            // number of months to calculate years
            // TODO: make this dynamic i.e. use array method or some function to generate this array
            ticks={[0, 12, 24, 36]}
            tickFormatter={(value) => {
              const baseYear = 2015;
              return Math.floor(value / 12 + baseYear);
            }}
          />
          <YAxis
            hide={showYaxis}
            axisLine={false}
            domain={[0, yMax + 500]}
            type="number"
            dataKey={'amount'}
          />

          {showTooltip && <Tooltip content={<CustomTooltip />} />}

          {/* normal graph line */}
          <Line
            type="monotone"
            data={flatData}
            dataKey="monthAmt"
            stackId="1"
            stroke="#2e5ce5"
            fill="transparent"
            strokeWidth="3.5"
            dot={false}
          />

          {/* trend line */}
          <Area
            type="monotone"
            data={tdLine}
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

export default TrendGraph;
