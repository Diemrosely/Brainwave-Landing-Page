import React from "react";

const Heading = ({ className, title }) => {
  return <div className={`${className ?? ""}`}>{title}</div>;
};

export default Heading;
