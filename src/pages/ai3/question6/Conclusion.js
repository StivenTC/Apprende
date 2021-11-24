import { ConclusionTemplate } from "../../templates/ConclusionTemplate";
import LlamasBkg from "../../../assets/birdsBkg.png";

export const Conclusion = ({ nextActivity }) => {

  const ImgConclusion = () => <img src="/images/AI/conclusiones/3/p6_feedback.png" alt=""/>;
  const ImgSolucion = () => <img src="/images/AI/conclusiones/3/p6_solucion.png" alt=""/>;
  const generalStyle = {
    background: `url("${LlamasBkg}") no-repeat center/100% 100%`
  };

  return (
    <ConclusionTemplate
      goView={nextActivity}
      ImgConclusion={ImgConclusion}
      ImgSolution={ImgSolucion}
      generalStyle={generalStyle}
      nextIDView={7}/>
    )
}