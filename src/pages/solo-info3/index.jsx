import dynamic from "next/dynamic";
import Select from "react-select";
import { Fragment, useState } from "react";
import { ArrowTrendingUpIcon } from "@heroicons/react/20/solid";
import { Listbox, Transition, Switch } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import { Tooltip } from "react-tooltip";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const people = [
  { name: "1 year" },
  { name: "2 years" },
  { name: "5 years" },
  { name: "10 years" },
  { name: "15 years" },
];

const Index = () => {
  const Test = dynamic(() => import("../solo-test3"), { ssr: false });
  const [selectedOption, setSelectedOption] = useState(null);
  const [selected, setSelected] = useState(people[1]);
  const [enabled, setEnabled] = useState(false);

  return (
    <div className=" md:mx-32 md:my-10 p-4 bg-white">
      {/* header */}

      {/* breadcrumb */}

      {/* title of page */}
      <h1 className="inline-flex justify-center items-center px-4">
        <span className="text-3xl">Loop Earplugs</span>
        <span className="text-sm text-gray-400 ml-1.5 leading-9">
          (Keyword)
        </span>
      </h1>

      {/* short description */}
      <p className="mt-6 text-base px-4">
        {`Earplugs that are designed to be more comfortable and effective than traditional earplugs, often using a loop or other design to fit more securely in the ear.`}
      </p>

      {/* container */}
      <div className="flex my-4 justify-between flex-wrap gap-4 px-4">
        {/* buttons */}
        <div className="flex gap-4 justify-center items-center">
          {/* select */}
          <div className=" min-w-36">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative z-50 w-full text-xs md:text-sm cursor-pointer">
                <Listbox.Button className="relative w-full rounded-sm bg-white py-1 pl-3 pr-10 text-left  ring-1  ring-gray-300 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-black"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 w-full overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none flex flex-col gap-4 p-2 will-change-transform -translate-y-36">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active, selected }) =>
                          `relative select-none py-2 pl-3 pr-10 rounded-[4px] 

                          ${
                            selected
                              ? 'bg-[#2e5ce5] text-white'
                              : 'text-[#2e5ce5] bg-[#ebf3ff]'
                          }

                          ${(active && !selected) && 'transition duration-200 ring-1 ring-[#2e5ce5]'}
                          
                          `
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-medium'
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected
                              ? // <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                //   <CheckIcon
                                //     className="h-5 w-5 text-[#2e5ce5]"
                                //     aria-hidden="true"
                                //   />
                                // </span>
                                null
                              : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>

          {/* toggle */}
          <div className="flex justify-center items-center gap-2 rounded-sm bg-blue-100 py-1 px-3 text-xs md:text-sm text-[#2e5ce5] font-semibold ">
            <ArrowTrendingUpIcon className="w-4 h-4" />
            <span className="">
              {/* {enabled ? 'Enabled' : 'Disabled'} */}
              Forecast
            </span>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? 'bg-[#2e5ce5]' : 'bg-[#2e5ce5]/70'}
          relative inline-flex h-[16px] w-[29px] shrink-0 cursor-pointer rounded-full px-[2px] transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-[12px]' : 'translate-x-0'}
            pointer-events-none inline-block h-[13px] aspect-square  transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out my-auto`}
              />
            </Switch>
          </div>
        </div>
        {/* stats */}
        <div className="flex gap-4 justify-center items-center">
          {/* volume */}
          <div className="flex flex-col justify-center items-center gap-1">
            <span className="text-3xl md:text-4xl font-semibold text-blue-600">
              9.9K
            </span>
            <span className="text-xs text-gray-400 flex gap-1">
              Volume
              <QuestionMarkCircleIcon
                className="w-4 h-4 hover:text-black"
                data-tooltip-id="my-volume"
                data-tooltip-place="top"
              />
              <Tooltip id="my-volume">
                <div className="flex flex-col">
                  <span className="">Global Google search volume</span>
                  <span className="">for the previous full month.</span>
                </div>
              </Tooltip>
            </span>
          </div>
          {/* growth */}
          <div className="flex flex-col justify-center items-center gap-1">
            <span className="text-3xl md:text-4xl font-semibold text-green-500">
              7.6K
            </span>
            <span className="text-xs text-gray-400 flex gap-1">
              Growth
              <QuestionMarkCircleIcon
                className="w-4 h-4 hover:text-black"
                data-tooltip-id="my-growth"
                // data-tooltip-content="The increase in search volume since the previous full month."
              />
              <Tooltip id="my-growth" place="top">
                <div className="flex flex-col">
                  <span className="">The increase in search volume</span>
                  <span className="">since the previous full month.</span>
                </div>
              </Tooltip>
            </span>
          </div>
        </div>
      </div>

      <Test />
    </div>
  );
};

export default Index;
