"use client";

import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { cn } from "./utils/cn";
import ComponentsStatuses from "./components/components_statuses";
import { toast } from "sonner";
import { Transform25To30 } from "./utils/transformer/transform25To30";

export default function App() {
  const [json, setCode] = useState<string>("");
  const [transformedCode, setTransformedCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [currentVersion, setCurrentVersion] = useState<string>("2.5");
  const [sections, setSections] = useState<number>(0);

  const handleTransform = (version: string): void => {
    setCurrentVersion(version);
    setLoading(true);
    setTimeout(() => {
      try {
        console.log("original json : ",json);
        const parsedJson = JSON.parse(json);
        console.log("Parsed Json : ",parsedJson);
        // const transformed = {
        //   ...parsedJson,
        //   timestamp: new Date().toISOString(),
        // };
        const transformedJson = Transform25To30(parsedJson);
        console.log("Transformed Json : ",transformedJson);
        setSections(parsedJson.fields.length);
        setTransformedCode(JSON.stringify(transformedJson, null, 2));
        // setTransformedCode(JSON.stringify(transformed, null, 2));
      } catch (error) {
        console.error("Error occuring : ", error);
        toast.error(`Invalid JSON`, {
          position: "top-right",
        });
        setCurrentVersion("2.5");
        setTransformedCode("Invalid JSON");
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  const handleCopy = (text: string): void => {
    navigator.clipboard.writeText(text);
    toast.success(`Copied to clipboard!`, {
      position: "top-right",
    });
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 font-sans">
      <h1 className="text-2xl font-extrabold uppercase text-gray-700 border-b-2 mb-10">
        2.5 to 3.0 Tool
      </h1>
      <div className="w-full flex">
        <ComponentsStatuses sections={sections} />
        <div className="flex justify-center w-[70%]">
          <div className="flex flex-col w-[80%] rounded-lg shadow-md border border-gray-300 p-4 h-[80vh]">
            <div className="w-full  flex justify-between gap-2 p-2 border border-green-500 rounded-md">
              <button
                onClick={() => setCurrentVersion("2.5")}
                className={cn(
                  "px-6 py-2 w-full text-green-600  font-semibold rounded hover:bg-green-550 transition-all",
                  currentVersion === "2.5" ? "bg-green-600 text-white" : ""
                )}
              >
                2.5 JSON
              </button>
              <button
                onClick={() => handleTransform("3.0")}
                className={cn(
                  "px-6 py-2 w-full text-green-600 font-semibold rounded hover:bg-green-550 transition-all",
                  currentVersion === "3.0" ? "bg-green-600 text-white" : ""
                )}
              >
                Transform to 3.0
              </button>
            </div>
            {currentVersion == "2.5" ? (
              <textarea
                value={json}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Paste your JSON here..."
                className="flex-1 bg-gray-100 text-sm font-mono text-gray-700 p-3 rounded border border-gray-300 outline-none resize-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <div
                className="flex-1 bg-gray-100 resize-none text-sm font-mono text-gray-700 p-3 rounded border border-gray-300 overflow-auto relative"
                style={{ maxHeight: "calc(100% - 2rem)", width: "100%" }}
              >
                {!loading && (
                  <button
                    onClick={() => handleCopy(transformedCode)}
                    className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded shadow-md hover:bg-blue-600 transition-all"
                  >
                    Copy
                  </button>
                )}
                {loading ? (
                  <div className="flex justify-center items-center h-full">
                    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <SyntaxHighlighter
                    language="json"
                    style={docco}
                    customStyle={{
                      fontSize: "14px",
                      lineHeight: "1.5",
                      wordWrap: "break-word",
                      width: "100%",
                    }}
                  >
                    {transformedCode || "// Transformed JSON will appear here"}
                  </SyntaxHighlighter>
                )}
              </div>
            )}
            {/* <button
            onClick={handleTransform}
            className="mt-4 px-6 py-2 bg-green-500 text-white font-semibold rounded shadow-md hover:bg-green-600 transition-all"
          >
            Transform JSON
          </button> */}
          </div>
          {/* <div className="flex flex-col w-1/2 bg-yellow-500 rounded-lg shadow-md border border-gray-300 p-4 relative h-[80vh]">
          <h2 className="text-blue-500 font-semibold text-lg mb-4">
            Transformed JSON{" "}
            <span className="text-gray-500 text-sm">Version 3.0</span>
          </h2>
          <button
            onClick={() => handleCopy(transformedCode)}
            className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded shadow-md hover:bg-blue-600 transition-all"
          >
            Copy
          </button>
          <div
            className="flex-1 bg-gray-100 resize-none text-sm font-mono text-gray-700 p-3 rounded border border-gray-300 overflow-auto"
            style={{ maxHeight: "calc(100% - 2rem)", width: "100%" }}
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <SyntaxHighlighter
                language="json"
                style={docco}
                customStyle={{
                  fontSize: "14px",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  width: "100%",
                }}
              >
                {transformedCode || "// Transformed JSON will appear here"}
              </SyntaxHighlighter>
            )}
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}
