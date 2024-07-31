import React from "react";
import TwinImage from "./twinImage";
import "../styles/customStyles.css";
import sampleImage from "../assets/01.jpg";

interface IntroCardProps {
  card_title_1: string;
  card_title_2: string;
}

const IntroCard: React.FC<IntroCardProps> = (props) => {
  const { card_title_1, card_title_2 } = props;

  return (
    <div className="card normal-card justify-start flex items-center p-4 m-1 ml-2">
      <TwinImage firstImage={sampleImage} SecondImage={sampleImage} />
      <div className="flex flex-col justify-start items-start p-1">
        <p className="text-small p-1">{card_title_1}</p>
        <p className="text-small p-1">{card_title_2}</p>
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </div>
    </div>
  );
};

export default IntroCard;
