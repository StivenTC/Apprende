import { ConclusionTemplate } from "../../templates/ConclusionTemplate";

export const Conclusion = ({ nextActivity }) => {

  const ImgConclusion = () => <img src="/images/AI/conclusiones/1/p3_feedback.png" alt=""/>;
  const ImgSolution = () => <img src="/images/AI/conclusiones/1/p3_solucion.png" alt=""/>;

  return (
    <ConclusionTemplate
      goView={nextActivity}
      ImgConclusion={ImgConclusion}
      ImgSolution={ImgSolution}
      nextIDView={4}/>
    )
}