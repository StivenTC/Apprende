import { ConclusionTemplate } from "../../templates/ConclusionTemplate";

export const Conclusion = ({ nextActivity }) => {

  const ImgConclusion = () => <img src="/images/AI/conclusiones/2/p3_feedback.png" alt=""/>;
  const ImgSolucion = () => <img src="/images/AI/conclusiones/2/p3_solucion.png" alt=""/>;
  const generalStyle = {
    background: `url("/images/AI/atletas_bkg.png") center bottom / 100% no-repeat`,
    backgroundColor: '#35bfa5',
    backgroundPosition: 'bottom',
    height: '100%'
  };

  return (
    <ConclusionTemplate
      goView={nextActivity}
      generalStyle={generalStyle}
      ImgConclusion={ImgConclusion}
      ImgSolution={ImgSolucion}
      nextIDView={4}/>
    )
}