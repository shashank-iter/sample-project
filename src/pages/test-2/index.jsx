import React from 'react'
// import './App.css';
// import '../node_modules/react-vis/dist/style.css';
import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, AreaSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis';

function linearRegression(data) {
  let n = data.length;
  let sumX = 0;
  let sumY = 0;
  let sumXY = 0;
  let sumXX = 0;
  let sumYY = 0;

  for (let i = 0; i < n; i++) {
    sumX += data[i].x;
    sumY += data[i].y;
    sumXY += data[i].x * data[i].y;
    sumXX += data[i].x * data[i].x;
    sumYY += data[i].y * data[i].y;
  }

  let slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  let intercept = (sumY - slope * sumX) / n;

  return { slope, intercept };
}

const index = () => {
      const data1 = [
        { x: 0, y: 8 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 1 },
        { x: 5, y: 7 },
        { x: 6, y: 6 },
        { x: 7, y: 3 },
        { x: 8, y: 2 },
        { x: 9, y: 0 },
      ];
      const regressionResult = linearRegression(data1);
      console.log(
        `Slope: ${regressionResult.slope}, Intercept: ${regressionResult.intercept}`
      );
  return (
    <div className='bg-white text-black'>
      test 2
      <XYPlot height={300} width={300}>

        <VerticalGridLines/>
        <HorizontalGridLines/>
        <XAxis/>
        <YAxis/>

        <LineSeries curve={'curveMonotoneX'} data={data1} />
        <AreaSeries data={data1} />
      </XYPlot>
    </div>
  );
}

export default index