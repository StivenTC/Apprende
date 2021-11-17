import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Header } from "../../../components/layout/Header/Header";
import './PresentationTemplate.scss';
import classNames from "classnames";

export const PresentationTemplate = ({ goView, presentation, nextPage }) => {

  return (
    <div className="presentation-efda" style={{background: `top/100% 100% no-repeat url("${presentation.backgroundImage}")`}}>
       <Header />
      <div className="presentation-efda-intro">
        <h1 className="presentation-efda-title">{presentation.title}</h1>
        <p
          className={classNames('presentation-efda-description', presentation.description.classAdded)}
          dangerouslySetInnerHTML={{ __html: presentation.description.value }}/>
      </div>
      {
        presentation.image &&
        <img className="presentation-efda-person" src={presentation.image} alt=""/>
      }
      <button
        className="btn-next btn-tertiary"
        onClick={() => goView(nextPage)}>
        {presentation.submit.label}
        <BiRightArrowAlt />
      </button>
    </div>
  );
};
