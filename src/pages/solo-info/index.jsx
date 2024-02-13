import dynamic from 'next/dynamic';
import Select from 'react-select';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const people = [
  { name: '1 year' },
  { name: '2 years' },
  { name: '5 years' },
  { name: '10 years' },
  { name: '15 years' },
];

const Index = () => {
  const Test = dynamic(() => import('../test'), { ssr: false });
  const [selectedOption, setSelectedOption] = useState(null);
    const [selected, setSelected] = useState(people[0]);

  return (
    <div className="px-44 my-10">
      {/* header */}

      {/* breadcrumb */}

      {/* title of page */}

      {/* short description */}

      {/* container */}
      <div className="flex">
        <div className="">
          {/* select */}
          <div className="my-4 min-w-36">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1 z-50 w-full">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
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
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white  text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 py-2 pl-3 pr-10 ${
                            active
                              ? 'bg-[#2e5ce5] text-white'
                              : 'text-[#2e5ce5] bg-[#ebf3ff]'
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
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
          <div className=""></div>
        </div>
        {/* stats */}
        <div className="">
          {/* volume */}
          <div className=""></div>
          {/* growth */}
          <div className=""></div>
        </div>
      </div>

      <Test />
    </div>
  );
};

export default Index;
