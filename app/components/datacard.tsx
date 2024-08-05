import React from "react";
import "../styles/customStyles.css";
import Link from "next/link";

interface DataCardProps {
  title: string;
  subtitle: string;
}

const DataCard: React.FC<DataCardProps> = (props) => {
  const { title, subtitle } = props;

  return (
    <div className="data-card mb-4">
      <Link
        className="flex flex-row justify-between items-center w-fill h-[100%]  "
        href={"/blogs"}
      >
        <div className="flex flex-col">
          <p>{title}</p>
          <p>{subtitle}</p>
        </div>
        {/* TODO: add redirection icon */}
        <p>b</p>
      </Link>
    </div>
  );
};

export default DataCard;
