// components/LanguageBox.tsx
import React from "react";
import { StaticImageData } from "next/image";
import "../styles/customStyles.css";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiDjango, SiFlutter } from "react-icons/si";

interface LanguageBoxProps {
  title: string;
}

const LanguageBox: React.FC<LanguageBoxProps> = ({ title }) => {
  const renderIcon = () => {
    if (title == "Django") {
      return <SiDjango size={20} color="green" />
    } else if (title == 'React') {
      return <FaReact size={20} color="cyan" />
    }
    else if (title == 'Flutter') {
      return <SiFlutter size={20} style={{ color: 'lightblue' }} />
    }
    else if (title == 'Node') {
      return <FaNodeJs size={20} style={{ color: 'lightgreen' }} />
    }
  }


  return (
    <div className="flex flex-row items-center justify-between lng-box mt-4 mr-4">
      {renderIcon()}
      <p className="pl-2 text-sm">{title}</p>
    </div>
  );
};

export default LanguageBox;
