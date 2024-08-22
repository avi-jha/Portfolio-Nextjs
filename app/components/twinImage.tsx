import React from "react";
import Image, { StaticImageData } from "next/image";

interface ImageProps {
  firstImage: StaticImageData;
  SecondImage: StaticImageData;
}

const TwinImage: React.FC<ImageProps> = (props) => {
  const { firstImage, SecondImage } = props;

  return (
    <div>
      <Image src={firstImage.src} className="circular-image mr-4" alt={""} />
    </div>
  );
};

export default TwinImage;
