import { Header } from "../../../components/layout/Header/Header"

import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";


export const FillSquares = ({ goView, saveUser, userData }) => {

  const [answer, setAnswer] = useState({ data: [0, 0] });

  const FractionA = () => {
    return <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.3097 29.4093L19.3595 7.54443C7.65838 15.459 0 28.8114 0 43.9858C0 44.3559 0 44.7545 0.0284698 45.1246H25.9645C25.936 44.7545 25.936 44.3559 25.936 43.9858C25.9075 38.0071 28.8114 32.6833 33.3097 29.4093Z" fill="#FFBC0F" />
      <path d="M62.0639 43.9858C62.0639 44.3559 62.0354 44.7545 62.0354 45.1246H87.9714C87.9714 44.7545 87.9999 44.3559 87.9999 43.9858C87.9999 28.9253 80.4269 15.6014 68.8682 7.68677L54.8895 29.5516C59.2454 32.8541 62.0639 38.0925 62.0639 43.9858Z" fill="#D9D9ED" />
      <path d="M54.1781 29.0392L68.1283 7.20286C61.1817 2.64769 52.897 0 43.9859 0C35.1603 0 26.9325 2.59075 20.0428 7.08899L33.993 28.9253C36.84 27.0179 40.2849 25.9075 43.9859 25.9075C47.7724 25.9075 51.2742 27.0748 54.1781 29.0392Z" fill="#D9D9ED" />
      <path d="M53.4666 59.388L67.4168 81.2244C79.2317 73.7653 87.2602 60.84 87.915 45.9788H61.9506C61.3242 51.6443 58.0787 56.5126 53.4666 59.388Z" fill="#FFBC0F" />
      <path d="M35.4449 59.929L21.4662 81.7938C28.0427 85.7226 35.758 87.9717 43.9573 87.9717C52.2705 87.9717 60.0428 85.6657 66.6762 81.6514L52.726 59.7866C50.1353 61.2101 47.1459 62.0357 43.9858 62.0357C40.9111 62.0642 38.0071 61.2955 35.4449 59.929Z" fill="#FFBC0F" />
      <path d="M26.0216 45.9788H0.0571289C0.711934 60.8969 8.82583 73.9077 20.7547 81.3383L34.7049 59.5019C29.9789 56.6549 26.6479 51.7297 26.0216 45.9788Z" fill="#FFBC0F" />
    </svg>
  }
  const FractionB = () => {
    return <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5552 12.2518C20.3919 4.47023 30.7672 0.13797 41.8049 0V24.8346C37.3898 24.9726 33.2507 26.7386 30.105 29.8016L12.5552 12.2518Z" fill="#D9D9ED" />
      <path d="M54.7465 29.9671C51.6559 26.8766 47.572 25.0554 43.1846 24.8622V0C54.1946 0.220752 64.5148 4.6082 72.2963 12.3897L54.7465 29.9671Z" fill="#D9D9ED" />
      <path d="M59.879 42.4949C59.879 42.4397 59.879 42.4121 59.879 42.3569C59.879 38.1902 58.3889 34.1615 55.6847 30.9882L73.2621 13.4108C80.6573 21.2751 84.7136 31.5676 84.7136 42.3845C84.7136 42.4397 84.7136 42.4673 84.7136 42.5225H59.879V42.4949Z" fill="#37BCDA" />
      <path d="M54.8845 54.6086C57.7267 51.7112 59.4651 47.9308 59.7963 43.8745H84.6861C84.2998 54.5534 79.9675 64.57 72.4619 72.1584L54.8845 54.6086Z" fill="#37BCDA" />
      <path d="M43.1846 59.8514C47.1305 59.6583 50.9109 58.1406 53.8911 55.5468L71.4685 73.1242C63.7973 80.3814 53.7531 84.4929 43.1846 84.6861V59.8514Z" fill="#37BCDA" />
      <path d="M41.8049 84.7137C31.2088 84.5758 21.137 80.5195 13.3831 73.2622L30.9605 55.6848C33.9958 58.2787 37.8038 59.7411 41.7773 59.8791V84.7137H41.8049Z" fill="#37BCDA" />
      <path d="M12.3897 72.2964C4.80136 64.6804 0.413905 54.6086 0.0275879 43.8745H24.9174C25.2761 47.986 27.0698 51.8216 29.9671 54.7466L12.3897 72.2964Z" fill="#37BCDA" />
      <path d="M-0.00012207 42.4948C-0.00012207 42.4396 -0.00012207 42.412 -0.00012207 42.3568C-0.00012207 31.4572 4.11139 21.137 11.5894 13.2451L29.1668 30.8225C26.3798 34.0234 24.8345 38.1073 24.8345 42.3568C24.8345 42.412 24.8345 42.4396 24.8345 42.4948H-0.00012207Z" fill="#D9D9ED" />
    </svg>
  }

  const activities = [{
    title: "Fracción A",
    cake: <FractionA />,
    squares: 6
  },
  {
    title: "Fracción B",
    cake: <FractionB />,
    squares: 8
  }]

  const paintTile = (index, tile) => {
    let a = answer.data
    a[index] = tile + 1
    setAnswer({ data: a })
  }

  return (
    <div className="fill-square">
      <Header goView={goView} actualView={6} />
      <div className="fill-square-content">
        <div className="fill-square-content-text">
          <h2>Compara</h2>
          <p>Colorea en los rectángulos las fracciones A y B</p>
        </div>

        <div className="fill-square-activity">
          {activities.map((activity, i) =>
            <div key={activity.title} className="fill-square-activity-item">
              <p>{activity.title}</p>
              {activity.cake}
              <div
                className="fill-square-fraction"
                style={{ gridTemplateColumns: `repeat(${activity.squares}, 1fr)` }}>
                {[...Array(activity.squares)].map((item, j) =>
                  <div key={item}
                    role="button"
                    onClick={() => paintTile(i, j)}
                    className={`tile ${j < answer.data[i] ? "painted" : ""}`} />
                )}
              </div>
            </div>)}
        </div>
        <button className={`btn-next ${answer.data.includes(0) ? "disabled" : ""}`} onClick={() => !answer.data.includes(0) ? goView(7) : console.log("no posible")}>
          Siguiente
          <BiRightArrowAlt />
        </button>
      </div>
    </div>
  )
}