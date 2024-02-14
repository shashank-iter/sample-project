import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

function index() {
  const Test = dynamic(() => import("./test-7"), { ssr: false });
  const Test2 = dynamic(() => import("./test-8"), { ssr: false });
  const Test3 = dynamic(() => import("./test-9"), { ssr: false });
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-2 sm:mx-auto sm:px-10 py-10 ">
        <Link href={"/solo-info"}>
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
                  <div className="text-xs text-gray-400 ml-3">Growth</div>
                </div>
              </div>
            </div>
            <div className="pl-5">
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
        <Link href={"/solo-info2"}>
          <div className="w-full bg-white shadow-md p-1 rounded-md hover:border hover:border-blue-600 hover:border-1 ">
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
            <div className="pl-5">
              <Test2 />
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
        <Link href={"/solo-info3"}>
          <div className="w-full bg-white shadow-md p-1 rounded-md hover:border hover:border-blue-600 hover:border-1 ">
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
            <div className="pl-5">
              <Test3 />
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

export default index;
