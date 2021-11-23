import { ConclusionTemplate } from "../../templates/ConclusionTemplate";

export const Conclusion4 = ({ nextActivity }) => {

  const ImgConclusion = () => <img src="/images/AI/conclusiones/3/p4_feedback.png" alt=""/>;
  const ImgSolution = () => <img src="/images/AI/conclusiones/3/p4_solucion.png" alt=""/>;

  return <ConclusionTemplate goView={nextActivity} ImgConclusion={ImgConclusion} ImgSolution={ImgSolution} nextIDView={5}/>
}