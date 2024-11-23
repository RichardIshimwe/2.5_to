import React from "react";
import { FormComponents } from "../utils/store/formComponents";

const ComponentsStatuses = ({ isLoading }: { isLoading: boolean }) => {
  const { sections } = FormComponents();
  console.log("sections in form state : ", sections);
  return (
    <div className="w-[30%] border border-gray-700 rounded-md">
      <div className="flex items-center justify-between py-2 px-2 border border-b-gray-700">
        <p className="text-gray-700 font-bold text-xl">Components statuses</p>
        <div className="flex gap-2 font-semibold">
          {" "}
          <p className="bg-green-700 px-3 py-1 rounded-sm">Transformed</p>
          <p className="bg-amber-900 px-3 py-1 rounded-sm">Skipped</p>
        </div>
      </div>
      {!isLoading ? (
        <div className="p-4">
          {sections.length > 0 &&
            sections.map((currentSection, index) => (
              <div
                key={index}
                className="p-2 border border-gray-700 mb-4 rounded-md"
              >
                <p className="text-neutral-500 font-bold">
                  {currentSection.name}
                </p>
                <div className="">
                  <p className="text-green-700 font-bold">Transformed</p>
                  <div className="flex gap-1  mb-4">
                    {currentSection.transformedComponents.length > 0 ? (
                      currentSection.transformedComponents.map(
                        (component, index) => (
                          <div
                            key={index}
                            className="inline-flex items-center text-sm text-green-700 font-semibold bg-green-20/80 border border-green-700 rounded-md px-1"
                          >
                            <p className="mr-1">{component.type}</p>
                            <p className="bg-green-950 text-white px-[4px] rounded-full my-1">
                              {component.count}
                            </p>
                          </div>
                        )
                      )
                    ) : (
                      <p className="text-black text-sm">
                        no component transformed double check your JSON
                      </p>
                    )}
                  </div>
                  <p className="text-amber-900 font-bold">Skipped</p>
                  <div className="flex gap-1 mb-4">
                    {currentSection.skippedComponents.length > 0 ? (
                      currentSection.skippedComponents.map(
                        (component, index) => (
                          <div
                            key={index}
                            className="inline-flex items-center text-sm text-amber-900 font-semibold bg-green-20/80 border border-amber-900 rounded-md px-1"
                          >
                            <p className="mr-1">{component.type}</p>
                            <p className="bg-amber-950 text-white px-[4px] rounded-full my-1">
                              {component.count}
                            </p>
                          </div>
                        )
                      )
                    ) : (
                      <p className="text-black text-sm">
                        all components are transformed :white_check_mark:
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default ComponentsStatuses;
