import React from "react";
import { StaticImageData } from "next/image";

interface ImageProps {
  firstImage: StaticImageData;
  SecondImage: StaticImageData;
}

const TwinImage: React.FC<ImageProps> = (props) => {
  const { firstImage, SecondImage } = props;

  return (
    <div>
      <img src={firstImage.src} className="circular-image " alt={""} />
    </div>
  );
};

export default TwinImage;
