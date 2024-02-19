import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import TrendGraph from '@/components/GraphWithTrend';
import { data1, data2, data3, cardData1, cardData2, cardData3 } from '@/data';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import LandingPageCard from '@/components/LandingPageCard';
import Image from 'next/image';

function Index() {
  const Test = dynamic(() => import('./test-7'), { ssr: false });
  const Test2 = dynamic(() => import('./test-8'), { ssr: false });
  const Test3 = dynamic(() => import('./test-9'), { ssr: false });

  const cardDetails = [
    cardData1,
    cardData2,
    cardData3,
    cardData2,
    cardData1,
    cardData3,
  ];

  return (
    <div className="w-full lg:max-w-[1120px] lg:px-5 mx-auto xl:max-w-7xl">
      {/* navbar */}
      <div
        id="header"
        className="w-full flex justify-between items-center py-7"
      >
        {/* logo */}
        <div className="bg-white p-3 rounded-md">Logo Here</div>
        {/* nav links */}
        <div className="flex gap-12 text-sm font-bold text-[#595d73]">
          <Link href={'/'}>About</Link>
          <Link href={'/'}>Newsletter</Link>
          <Link href={'/'}>Blog</Link>
          <Link href={'/'}>
            {/* pro subscription badge */}
            <span className="bg-trend-blue py-1 px-2 text-xs text-white uppercase font-normal">
              Pro
            </span>
          </Link>
        </div>
      </div>

      {/* Page Title */}
      <div className="w-full text-center space-y-7">
        <h1 className="text-3xl font-bold">Discover Exploding Topics</h1>
        <p className="text-base text-[#595d73] font-medium">
          We surface rapidly growing topics before they take off.
        </p>
      </div>

      {/* Filter and selections */}
      <div className="flex items-center justify-center gap-2 my-4 mt-10">
        <span className="text-xs font-bold uppercase">Filter by:</span>
        {/* Number of Years */}
        <button className="bg-white text-slate-400 font-normal text-sm py-2 px-2 min-w-44 flex justify-between items-center ring-transparent hover:ring-1 hover:text-slate-600 hover:ring-gray-400 transition duration-300">
          <span className="">2 Years</span>
          <ChevronDownIcon className="w-4 h-4" />
        </button>
        {/* Topics / Tags Selection */}
        <button className="bg-white text-slate-400 font-normal text-sm py-2 px-2 min-w-44 flex justify-between items-center ring-transparent hover:ring-1 hover:text-slate-600 hover:ring-gray-400 transition duration-300 capitalize">
          <span className="">All Categories</span>
          <ChevronDownIcon className="w-4 h-4" />
        </button>
        {/* Search bar */}
        <button className="bg-white text-slate-400 font-normal text-sm py-2 px-2 min-w-44 flex justify-start items-center ring-transparent hover:ring-1 hover:text-slate-600 hover:ring-gray-400 transition duration-300 capitalize relative">
          <MagnifyingGlassIcon className="w-4 h-4" />
          {/* <span className="ml-1">Search Trends</span> */}
          <input
            type="text"
            name=""
            id=""
            placeholder="Search trends"
            className="placeholder:capitalize focus:outline-none ml-1"
          />
          {/* pro subscription badge */}
          <span className="bg-trend-blue py-0.5 px-2 text-[10px] text-white uppercase font-normal absolute right-2">
            Pro
          </span>
        </button>
      </div>

      {/* background image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#f5faff]">
        <Image
          src="https://explodingtopics.com/static/images/grid-line.svg"
          alt=""
          className="w-full h-full object-cover"
          fill
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-2 sm:mx-auto py-10 pt-8 ">
        {cardDetails.map((card, index) => (
          <LandingPageCard
            key={index}
            cardTitle={card.title}
            cardDescription={card.description}
            graphData={card.graphData}
            volume={card.volume}
          />
        ))}
      </div>
    </div>
  );
}

export default Index;
