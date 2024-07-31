import Image from "next/image";
import JsonData from "./Data/data.json";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-5xl flex flex-col items-start">
        <div className="z-10 w-[60%] max-w-5xl font-mono text-sm lg:flex m-10">
          <ul className="flex flex-row">
            {JsonData.Header.map((data, index) => (
              <li className="px-4" key={index}>
                <code className="font-mono font-bold">{data}</code>
              </li>
            ))}
          </ul>
        </div>

        {/* header section */}
        <div className="w-fit bg-blue-100">
          <h3>hi i am Avi</h3>
        </div>
      </div>
    </main>
  );
}
