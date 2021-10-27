export default async function saveDatainSheets(data) {

  let token = `EN08LaMZubwZaz7cbd5FYDWW%C7_Iym#AA-P4ZKsLMHgDV9qJ9XsX3NEa14@aj!h`;
  let apiUrl = 'https://sheet.best/api/sheets/373b4fbb-34b3-459f-b680-c59339b56156';
  let requestOptions = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  };

  const response = await fetch(apiUrl, requestOptions)
  //const data = await response.json();
  console.log("================")
  console.log("respuesta: ", response)
  console.log("================")
  return response
}