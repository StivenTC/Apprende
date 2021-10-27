export default function saveActivity(activity) {
  let appData = JSON.parse(localStorage.getItem('appData')) || {};
  appData = appData
  appData = { ...appData, ...activity }
  console.log(appData)
  localStorage.setItem("appData", JSON.stringify(appData));
}