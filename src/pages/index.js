import React from "react";
import Test from "./test";
import dynamic from "next/dynamic";
import Link from "next/link";

function index() {
  const Test = dynamic(() => import("./test"), { ssr: false });
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-2 sm:mx-auto sm:px-10 py-10 ">
        <Link href={"#"}>
          <div className="w-full bg-white shadow-md p-1 rounded-md hover:border hover:border-blue-600 hover:border-1 ">
            <div className="flex flex-row w-full px-2 sm:px-8 py-4">
              <div className="w-1/2">
                <div className="text-xl  text-black font-medium">
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
                  <div className="text-xs text-gray-400">Growth</div>
                </div>
              </div>
            </div>
            <div className="flex place-content-center">
              <Test />
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
        <Link href={"#"}>
          <div className="w-full bg-white shadow-md p-1 rounded-md hover:border hover:border-blue-600 hover:border-1 ">
            <div className="flex flex-row w-full px-2 sm:px-8 py-4">
              <div className="w-1/2">
                <div className="text-xl  text-black font-medium">
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
                  <div className="text-xs text-gray-400">Growth</div>
                </div>
              </div>
            </div>
            <div className="flex place-content-center">
              <Test />
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
        <Link href={"#"}>
          <div className="w-full bg-white shadow-md p-1 rounded-md hover:border hover:border-blue-600 hover:border-1 ">
            <div className="flex flex-row w-full px-2 sm:px-8 py-4">
              <div className="w-1/2">
                <div className="text-xl  text-black font-medium">
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
                  <div className="text-xs text-gray-400">Growth</div>
                </div>
              </div>
            </div>
            <div className="flex place-content-center">
              <Test />
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
       
      </div>
    </div>
  );
}

export default index;
