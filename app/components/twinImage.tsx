import React from "react";
import Image, { StaticImageData } from "next/image";
import { SiGithub, SiLinkedin } from "react-icons/si";

interface ImageProps {
  imgName: string
}

const TwinImage: React.FC<ImageProps> = (props) => {
  const { imgName } = props;

  return (
    <div>
      {imgName == 'LinkedIN' ? <SiLinkedin size={27} className="mr-4 m-1" color="white" /> : <SiGithub size={30} className="mr-4 m-1" color="white" />}
    </div>
  );
};

export default TwinImage;
