import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

export const PresentationBkgTemplate = ({ goView, presentation, nextPage }) => {

  const style = {
    background: `top/100% 100% no-repeat url("${presentation.backgroundImage}")`,
    backgroundColor: presentation.backgroundColor
  };

  return (
    <div className="presentation-bkg" style={style}>
      <div className="presentation-bkg-wrapper">
        <h1>{presentation.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: presentation.description }} />
        <img src={presentation.image} alt="" />
      </div>
      <button
        className="btn-next"
        onClick={() => goView(nextPage)}>
        {presentation.submit.label}
        <BiRightArrowAlt />
      </button>
    </div>
  );
};
