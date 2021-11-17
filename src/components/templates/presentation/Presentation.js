import { BiRightArrowAlt } from "react-icons/bi";

export function PresentationTemplate({ data, goView }) {

  return (
    <section className="presentation" style={{ background: data.bkgImage }}>
      <div className="presentation-context">
        <h2>{data.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: data.text }} />
      </div>

      <button
        className="btn-next"
        onClick={() => goView}>
        {data.submitText}
        <BiRightArrowAlt />
      </button>
    </section>
  );
}