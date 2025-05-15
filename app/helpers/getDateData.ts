export const getLocaleDate = (date: string) => {
  let [year, month, day, time] = getDateData(date)
  month = (+month + 1).toString().length < 2 ? "0" + (+month + 1) : (+month + 1)
  day = day.toString().length < 2 ? "0" + day : day
  return [year.toString(), month, day, time.toString()]
}

export const getDateData = (date: string) => {
  const actualDate = new Date(date)
  const year = actualDate.getFullYear()
  const month = actualDate.getMonth()
  const day = actualDate.getDate()
  const hours = actualDate.getHours() < 10 ? "0" + actualDate.getHours() : actualDate.getHours()
  const minutes = actualDate.getMinutes() < 10 ? "0" + actualDate.getMinutes() : actualDate.getMinutes()
  const time = `${hours}:${minutes}`
  return [year, month, day, time]
}

export const monthStr = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]

export const datedForm = (dated: string) => {
  const [year, month, day, time] = getDateData(dated)
  return `Creada el ${day} de ${monthStr[+month]} ${year} a ${time}hs`
}

const spanishDayOfWeek = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]

export const getWeekDay = (date: string) => {
  const d = new Date(date);
  let day = d.getDay()
  return spanishDayOfWeek[day]
}

export const getAnotherDate = (date: string, deltaDay: number) => {
  const today = new Date(date)
  const yesterdayTime = today.getTime() - (deltaDay * 24 * 60 * 60 * 1000);
  const yesterday = new Date(yesterdayTime).toJSON().substring(0, 10)
  return yesterday
}
