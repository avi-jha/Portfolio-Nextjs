import React from "react";

interface SectionTitleProps {
  number: string;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ number, title }) => {
  return (
    <div>
      <h2 className="section-title">
        <span className="number">{number}.</span> {title}
      </h2>
      <div className="section-title-line" />
    </div>
  );
};

export default SectionTitle;
