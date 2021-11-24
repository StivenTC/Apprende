import { ConclusionTemplate } from "../../templates/ConclusionTemplate";

export const Conclusion = ({ nextActivity }) => {

  const ImgConclusion = () => <img src="/images/AI/conclusiones/2/p5_feedback.png" alt=""/>;
  const ImgSolucion = () => <img src="/images/AI/conclusiones/2/p5_solucion.png" alt=""/>;

  return (
    <ConclusionTemplate
      goView={nextActivity}
      ImgConclusion={ImgConclusion}
      ImgSolution={ImgSolucion}
      nextIDView={6}/>
    )
}