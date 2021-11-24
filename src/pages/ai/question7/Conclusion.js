import { ConclusionTemplate } from "../../templates/ConclusionTemplate";

export const Conclusion = ({ nextActivity }) => {

  const ImgConclusion = () => <img src="/images/AI/conclusiones/1/p7_feedback.png" alt=""/>;

  return (
    <ConclusionTemplate
      goView={nextActivity}
      ImgConclusion={ImgConclusion}
      skipSolution={true}
      nextIDView={8}/>
    )
}