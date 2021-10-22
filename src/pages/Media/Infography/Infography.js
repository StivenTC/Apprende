import { useState } from "react";
import { useHistory, useLocation } from "react-router";


export default function Infography() {
  let history = useHistory();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  const goBack = () => {
    history.push("/")
  }

  const [currentInfo] = useState(query.get("fracciones"))

  const returnInfoUrl = () => {
    let src = ""
    if (currentInfo === "equivalentes") {
      src = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOSUC1wNQLvXoeYbR9lH7b6%2FApprende%3Fpage-id%3D566%253A17689%26node-id%3D1145%253A38104%26viewport%3D263%252C48%252C0.35%26scaling%3Dmin-zoom%26starting-point-node-id%3D1145%253A38104"
    } else {
      src = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOSUC1wNQLvXoeYbR9lH7b6%2FApprende%3Fpage-id%3D566%253A17689%26node-id%3D1145%253A38104%26viewport%3D263%252C48%252C0.35%26scaling%3Dmin-zoom%26starting-point-node-id%3D1145%253A38104"
    }
    return src
  }
  return (
    <div className="infography">
      <button className="close-btn" onClick={goBack} />
      <iframe
        src={returnInfoUrl()}
        allowFullScreen />
    </div >
  )
}