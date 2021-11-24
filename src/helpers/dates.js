const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
]
const dayNames = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes",
  "Sábado"]

const shortDayNames = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie",
  "Sab"]

export const getMonthName = (date) => {
  const d = new Date(date);
  return monthNames[d.getMonth()]
}

export const getDayName = (date) => {
  const d = new Date(date);
  return dayNames[d.getDay()]
}

export const expiredDate = (date) => {
  const d = new Date(date);
  const today = new Date();
  return today > d
}

export const formatDate = (date) => {
  //let d = new Date(date)    
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  let hours = date.getHours();
  let minutes = date.getMinutes();

  return [year, month < 10 ? '0' + month : month, day].join('/') + ` ${hours}:${minutes}`
}