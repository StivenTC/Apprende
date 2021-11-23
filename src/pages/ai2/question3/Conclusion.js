import { ConclusionTemplate } from "../../templates/ConclusionTemplate";

export const Conclusion = ({ nextActivity }) => {

  const ImgConclusion = () => <img src="/images/AI/conclusiones/2/p3_feedback.png" alt=""/>;
  const ImgSolucion = () => <img src="/images/AI/conclusiones/2/p3_solucion.png" alt=""/>;
  const solutionStyle = {
    backgroundColor: '#35bfa5'
  };

  return (
    <ConclusionTemplate
      goView={nextActivity}
      solutionStyle={solutionStyle}
      ImgConclusion={ImgConclusion}
      ImgSolution={ImgSolucion}
      nextIDView={4}/>
    )
}