import React from "react";

const SectionTitle = ({
  titleText,
  subtitleText,
  subtitleColorClass,
  positionClass,
  spaceClass,
  borderClass,
}) => {
  return (
    <div
      className={`section-title ${positionClass ? positionClass : ""} ${
        spaceClass ? spaceClass : ""
      } ${borderClass ? borderClass : ""}`}
    >
      <h2>{titleText}</h2>
      <p className={subtitleColorClass ? subtitleColorClass : ""}>
        {subtitleText}
      </p>
    </div>
  );
};

export default SectionTitle;
