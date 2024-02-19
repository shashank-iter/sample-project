import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import TrendGraph from '@/components/GraphWithTrend';
import { data1, data2, data3 } from '@/data';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';

function Index() {
  const Test = dynamic(() => import('./test-7'), { ssr: false });
  const Test2 = dynamic(() => import('./test-8'), { ssr: false });
  const Test3 = dynamic(() => import('./test-9'), { ssr: false });

  return (
    <div className="w-full lg:max-w-[1120px] lg:px-5 mx-auto">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-2 sm:mx-auto py-10 pt-8 ">
        <Link href={'/solo-info'}>
          <div className="w-full h-full bg-white shadow-md p-1 rounded-md hover:shadow-md hover:ring-1 ring-trend-blue transition duration-500 ease-in-out ">
            <div className="flex flex-row w-full px-2 sm:px-8 py-4">
              <div className="w-1/2">
                <div className="text-lg text-black font-medium">
                  DataLake House
                </div>
              </div>
              <div className="w-1/2 flex flex-row gap-x-3 justify-end">
                <div className="flex flex-col">
                  <div className="text-xl text-blue-600 font-bold">99K</div>
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
              <TrendGraph data={data1} showTooltip={false} />
            </div>

            <div className=" w-full px-2 sm:px-8 py-4 font-normal text-sm text-gray-400">
              <div>
                Data solution concept combines the best of data warehousing and
                big data technologies.
              </div>
              <div>
                <div className="bg-gray-200 px-2 text-gray-500 font-medium py-1 w-fit mt-3 uppercase text-xs">
                  exploding
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={'/solo-info2'}>
          <div className="w-full h-full bg-white shadow-md p-1 rounded-md hover:shadow-md hover:ring-1 ring-trend-blue transition duration-500 ease-in-out ">
            <div className="flex flex-row w-full px-2 sm:px-8 py-4">
              <div className="w-1/2">
                <div className="text-xl  text-black font-medium">Mlops</div>
              </div>
              <div className="w-1/2 flex flex-row gap-x-3 justify-end">
                <div className="flex flex-col">
                  <div className="text-xl text-blue-600 font-bold">99K</div>
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
              <TrendGraph data={data2} showTooltip={false} />
            </div>

            <div className=" w-full px-2 sm:px-8 py-4 font-normal text-sm text-gray-400">
              <div>
                Machine learning operations. A set of best practices in the
                machine learning development cycle.
              </div>
              <div>
                <div className="bg-gray-200 px-2 text-gray-500 font-medium py-1 w-fit mt-3 uppercase text-xs">
                  exploding
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={'/solo-info3'}>
          <div className="w-full h-full bg-white shadow-md p-1 rounded-md hover:shadow-md hover:ring-1 ring-trend-blue transition duration-500 ease-in-out">
            <div className="flex flex-row w-full px-2 sm:px-8 py-4">
              <div className="w-1/2">
                <div className="text-xl  text-black font-medium">
                  Loop Earplugs
                </div>
              </div>
              <div className="w-1/2 flex flex-row gap-x-3 justify-end">
                <div className="flex flex-col">
                  <div className="text-xl text-blue-600 font-bold">99K</div>
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
              <TrendGraph data={data3} showTooltip={false} />
            </div>

            <div className=" w-full px-2 sm:px-8 py-4 font-normal text-sm text-gray-400">
              <div>
                Earplugs that are designed to be more comfortable and effective
                than traditional earplugs.
              </div>
              <div>
                <div className="bg-gray-200 px-2 text-gray-500 font-medium py-1 w-fit mt-3 uppercase text-xs">
                  exploding
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Index;
