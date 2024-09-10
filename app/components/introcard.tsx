import React from "react";
import TwinImage from "./twinImage";
import "../styles/customStyles.css";
import sampleImage from "../assets/01.jpg";
import Link from "next/link";
import BentArrowIcon from "./arrowicon";

interface IntroCardProps {
  card_title_1: string;
  card_title_2: string;
  url: string
}

const IntroCard: React.FC<IntroCardProps> = (props) => {
  const { card_title_1, card_title_2, url } = props;



  return (
    <div className="card normal-card flex items-center ">

      <a target="_blank" href={url} rel="noopener noreferrer" className="flex items-center p-4 m-1 ml-2 w-full justify-between">
        <div className="flex justify-start items-center">
          <TwinImage imgName={card_title_1} />
          <div className="flex flex-col justify-start items-start p-1">
            <p className="text-base text-slate-200">{card_title_1}</p>
            <p className="text-sm text-slate-400">{card_title_2}</p>
            <link
              rel="apple-touch-icon"
              href="/apple-icon?<generated>"
              type="image/<generated>"
              sizes="<generated>"
            />
          </div>
        </div>
        <BentArrowIcon />
      </a>
    </div>
  );
};

export default IntroCard;
