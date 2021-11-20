import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

export const PresentationTemplate = ({ goView, presentation, nextPage }) => {

  return (
    <div className="presentation-ai">
      <h1>{presentation.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: presentation.description }}/>
      <img src={presentation.image} alt=""/>
      <button
        className="btn-next"
        onClick={() => goView(nextPage)}>
        {presentation.submit.label}
        <BiRightArrowAlt />
      </button>
    </div>
  );
};
