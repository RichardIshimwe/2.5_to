import React from "react";
import { FormComponents } from "../utils/store/formComponents";

const ComponentsStatuses = () => {
  const { sections } = FormComponents();
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
      <div className="p-4">
        {sections.length > 0 &&
          sections.map((name, index) => (
            <div key={index} className="mb-6">
              <p className="text-neutral-500 font-bold">{name}</p>
              <div className="p-3 w-3/4 border-b border-b-gray-700 mx-auto text-center"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ComponentsStatuses;
