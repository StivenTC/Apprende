import { ConclusionTemplate } from "../../templates/ConclusionTemplate";

export const Conclusion = ({ nextActivity }) => {

  const ImgConclusion = () => <img src="/images/AI/conclusiones/3/p6_feedback.png" alt=""/>;
  const ImgSolucion = () => <img src="/images/AI/conclusiones/3/p6_solucion.png" alt=""/>;
  const solutionStyle = {
    background: `url("../../../assets/birdsBkg.png")no-repeat center/100% 100%`
  };

  return (
    <ConclusionTemplate
      goView={nextActivity}
      ImgConclusion={ImgConclusion}
      ImgSolution={ImgSolucion}
      solutionStyle={solutionStyle}
      nextIDView={7}/>
    )
}