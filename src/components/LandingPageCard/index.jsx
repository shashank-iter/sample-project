import Link from 'next/link';
import React from 'react';
import TrendGraph from '../GraphWithTrend';
import { dataRandom, data1 } from '@/data';

/**
 * Landing page Card component
 * @param {object} props - The props object
 * @param {object} props.graphData - The graph data
 * @param {boolean} props.showTooltip - Whether to show the tooltip
 * @param {string} props.cardTitle - The title of the card
 * @param {string} props.cardDescription - The description of the card
 * @param {string} props.volume - The volume
 * @param {string} props.growth - The growth
 * @param {array} props.tags - The tags
 */
const LandingPageCard = ({
  graphData = dataRandom,
  showTooltip,
  cardTitle = 'Title',
  cardDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam laborum non?',
  volume = '99K',
  growth = '+99X',
  tags,
}) => {
  return (
    <Link href={'/solo-info'}>
      <div className="w-full h-full bg-white shadow-md p-1 rounded-md hover:shadow-md hover:ring-1 ring-trend-blue transition duration-500 ease-in-out group">
        <div className="flex flex-row w-full px-2 sm:px-8 py-4">
          <div className="w-1/2">
            <div className="text-base group-hover:text-trend-blue text-black font-medium transition duration-500 ease-in-out">
              {cardTitle}
            </div>
          </div>
          <div className="w-1/2 flex flex-row gap-x-3 justify-end">
            <div className="flex flex-col">
              <div className="text-xl text-blue-600 font-bold">{volume}</div>
              <div className="text-xs text-gray-400">Volume</div>
            </div>
            <div className="flex flex-col">
              <div className="text-xl text-green-500 font-bold">+99X</div>
              <div className="text-xs text-gray-400 ml-3">Growth</div>
            </div>
          </div>
        </div>
        <div className="pl-5 cursor-pointer relative">
          {/* overlay */}
          <div className="absolute top-0 left-0 w-full h-full z-50"></div>
          {/* graph */}
          <TrendGraph data={graphData} showTooltip={false} />
        </div>

        <div className=" w-full px-2 sm:px-8 py-4 font-normal text-sm text-gray-400">
          <div className="text-sm h-11 line-clamp-2">{cardDescription}</div>
          <div>
            <div className="bg-gray-200 px-2 text-gray-500 font-medium py-1 w-fit mt-3 uppercase text-xs">
              exploding
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LandingPageCard;
