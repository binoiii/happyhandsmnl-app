import React from "react";
import Personalize from "./Personalize/Personalize";
import "./ContentHolder.css";

const ContentHolder = ({ stepCount }) => {
  const moveX = 100 - 100 * stepCount;

  const stepsCont = [
    {
      step: 1,
      procedure: "Choose your Product and Font",
      content: <Personalize />,
    },
    {
      step: 2,
      procedure: "provide product information",
      content: <h1>test</h1>,
    },
    {
      step: 3,
      procedure: "identify payment scheme",
      content: <h1>tes2</h1>,
    },
    {
      step: 4,
      procedure: "Choose your Product and Pont",
      content: <h1>test3</h1>,
    },
  ];

  return (
    <div className="Content__cont">
      {stepsCont.map(({ step, procedure, content }) => (
        <div
          key={step}
          className="Content"
          style={{
            transform: `translateX(${moveX}%)`,
          }}
        >
          <div className="Content__title">{procedure}</div>
          {content}
        </div>
      ))}
    </div>
  );
};

export default ContentHolder;
