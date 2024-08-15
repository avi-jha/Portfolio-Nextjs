// components/LanguageBox.tsx
import React from "react";
import { StaticImageData } from "next/image";
import "../styles/customStyles.css";

interface LanguageBoxProps {
  imgName: StaticImageData;
  title: string;
}

const LanguageBox: React.FC<LanguageBoxProps> = ({ imgName, title }) => {

  console.log(imgName)

  return (
    <div className="flex flex-row items-center justify-between lng-box mt-4 mr-4">
      <img
        src={`../assets/01.jpg`}
        className="object-cover circular-image mr-8"
        alt={title}
      />
      <p>{title}</p>
    </div>
  );
};

export default LanguageBox;
