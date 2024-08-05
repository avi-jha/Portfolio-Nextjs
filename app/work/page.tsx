import React from "react";
import JsonData from "../Data/data.json";
import Link from "next/link";
import "../styles/customStyles.css";

const WorkPage = () => {
  return (
    <main className="flex min-h-screen w-[100%] flex-col items-center p-10">
      <div className="w-[55%]">
        {/* nav bar */}
        <div className="z-10 w-[60%] max-w-5xl font-mono text-sm lg:flex m-10">
          <ul className="flex flex-row ">
            {JsonData.Header.map((data, index) => (
              <li className="px-4" key={index}>
                <Link href={data === "home" ? "/" : `/${data}`}>{data}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="m-12 mt-20">
          <p className="text-2xl">my work</p>
          <p className="mt-10 text-sm ">{JsonData.Work.work_para_1}</p>
        </div>

        <div className="m-12 mt-10 dash-line" />

        <div className="m-12 mt-20">
          <p className="text-2xl tracking-wide">
            {JsonData.Experience.Current.current_job}
          </p>
          <p className="mt-4 small-text tracking-wide">
            {JsonData.Experience.Current.current_title}
          </p>
          <p className="mt-10 text-sm">
            {JsonData.Experience.Current.current_job_info}
          </p>

          <ul className="mt-10 ml-5 list-disc text-sm">
            {JsonData.Experience.Current.job_points.map((data, index) => (
              <li className="m-4" key={`data+${index}`}>
                {data}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default WorkPage;
