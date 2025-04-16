import React from "react";
import JsonData from "../Data/data.json";
import Link from "next/link";
import "../styles/customStyles.css";
import WorkComponent from "../components/workcomponent";

const WorkPage = () => {
  return (
    <main className="flex min-h-screen w-[100%] flex-col items-center p-10">
      <div className="w-full md:w-[90%] lg:w-[55%]">
        {/* nav bar */}
        <div className="z-10 w-full md:w-[90%] lg:w-[60%] max-w-5xl font-mono text-sm lg:flex">
          <ul className="flex flex-wrap md:flex-row">
            {JsonData.Header.map((data, index) => (
              <li className="px-4" key={index + data}>
                <Link href={data === "home" ? "/" : `/${data}`}>
                  {data}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="m-4 md:m-12 mt-20 md:mt-20">
          <p className="text-2xl">my work</p>
          <p className="mt-8 text-sm leading-relaxed">{JsonData.Work.work_para_1}</p>
        </div>

        <div className="lg:m-12 mt-10 dash-line w-full" />

        <div className="m-4 md:m-12 mt-10 md:mt-20">
          <p className="mt-8 text-base lg:text-xl leading-relaxed">
            {JsonData.Experience.Current.company}
          </p>
          <p className="mt-4 text-sm text-stone-500 tracking-wide">
            {JsonData.Experience.Current.title}
          </p>
          <p className="mt-8 text-sm leading-relaxed">{JsonData.Experience.Current.info_para_1}</p>

          <ul className="mt-10 ml-5 list-disc text-sm leading-relaxed">
            {JsonData.Experience.Current.job_points.map((data, index) => (
              <li className="m-4" key={`current_job_point_${index}`}>
                {data}
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm leading-relaxed">{JsonData.Experience.Current.info_para_2}</p>
        </div>
        <div className="m-12 mt-10 dash-line" />

        {JsonData.Experience.Previous.map((data, index) => (
          <WorkComponent
            key={`previous_experience_${index}`}
            company={data.prev_job}
            title={data.prev_title}
            info_array={data.prev_job_info}
          />
        ))}
      </div>
    </main>
  );
};

export default WorkPage;
