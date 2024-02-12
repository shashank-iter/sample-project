"use client"
import React from 'react';
import { VictoryChart, VictoryArea, VictoryLine, VictoryTheme, VictoryTooltip } from 'victory';

const index = () => {
  return (
    <div className="">
      index
      <div className="bg-white text-black min-w-[30rem] min-h-[30rem]">
        <VictoryChart
          // theme={VictoryTheme.material}
          style={{
            background: {
              fill: 'pink',
              stroke: '#000'
            },
            parent: {
              stroke: "#000000"
            }
          }}
          // colorScale={{}}
          className="bg-red-500 stroke-transparent"
        >
          <VictoryArea
            data={[
              { x: 0, y: 2, y0: 0 },
              { x: 1, y: 3, y0: 0 },
              { x: 2, y: 5, y0: 0 },
              { x: 3, y: 4, y0: 0 },
              { x: 4, y: 6, y0: 0 },
            ]}
            style={{ data: { fill: '#c43a31' } }}
          />

          <VictoryLine
            labelComponent={<VictoryTooltip />}
            interpolation={'natural'}
            data={[
              { x: 0, y: 8, label: 'is it?' },
              { x: 1, y: 5, label: 'is it?' },
              { x: 2, y: 4, label: 'is it?' },
              { x: 3, y: 9, label: 'is it?' },
              { x: 4, y: 1, label: 'is it?' },
            ]}
            style={{
              parent: { border: '1px solid blue' },
            }}
          />
        </VictoryChart>
      </div>
    </div>
  );
};

export default index;
