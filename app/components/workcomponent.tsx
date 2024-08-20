import React from "react";

interface WorkComponentProps {
  company: string;
  title: string;
  info_array: string[]
}

const WorkComponent: React.FC<WorkComponentProps> = (props) => {
  const { company, title, info_array } = props;

  return (
    <div className="m-12 mt-20">
      <p className="text-2xl tracking-wide">
        {company}
      </p>
      <p className="mt-4 text-sm text-stone-500 tracking-wide">
        {title}
      </p>

      <ul>
        {info_array.map((data, index) => (
          <li className="mt-8 text-sm leading-relaxed" key={data + index}>
            {data}
          </li>
        ))}
      </ul>


    </div>
  );
};

export default WorkComponent;
