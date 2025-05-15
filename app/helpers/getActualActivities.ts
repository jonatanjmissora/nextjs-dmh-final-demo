import { ActivityDataTypes } from "../types/account.types";
import { getLocaleDate, getAnotherDate, getWeekDay } from "./getDateData";

export const getActualActivities = (activityData: ActivityDataTypes[], filter?: string, search?: string) => {
  let filteredResult = [...activityData]
  if (filter)
    filteredResult = filteredActivities(filteredResult, filter)

  let searchedResult = [...filteredResult]
  if (search)
    searchedResult = searchedActivities(searchedResult, search)

  return searchedResult
}

const filteredActivities = (activityData: ActivityDataTypes[], filter: string) => {
  let result = activityData
  if (filter) {
    const [year, month, day, time] = getLocaleDate(new Date().toString())
    const today = `${year}-${month}-${day}`

    if (filter === "hoy") {
      result = activityData.filter(activity => activity.dated.substring(0, 10) === today)
    }

    if (filter === "ayer") {
      const yesterday = getAnotherDate(today, 1)
      result = activityData.filter(activity => activity.dated.substring(0, 10) === yesterday.substring(0, 10))
    }

    if (filter === "semana") {
      const week = getAnotherDate(today, 7)
      result = activityData.filter(activity => activity.dated > week)
    }

    if (filter === "quincena") {
      const fortNight = getAnotherDate(today, 15)
      result = activityData.filter(activity => activity.dated > fortNight)
    }

    if (filter === "mes") {
      const month = getAnotherDate(today, 30)
      result = activityData.filter(activity => activity.dated > month)
    }

    if (filter === "anio") {
      result = activityData.filter(activity => activity.dated.substring(0, 4) === year)
    }

  }
  return result
}

const searchedActivities = (searchedResult: ActivityDataTypes[], search: string) => {
  return [...searchedResult].filter(activity =>
    activity
      .description
      .toLowerCase()
      .includes(search.toLowerCase()))
}

export const getActivityDateToShow = (dated: string) => {
  const [year, month, day, time] = getLocaleDate(new Date().toString())
  const today = `${year}-${month}-${day}`
  const yesterday = getAnotherDate(today, 1)
  const dateWeekBefore = getAnotherDate(today, 7)
  if (dated.substring(0, 10) === today) return "hoy"
  if (dated.substring(0, 10) === yesterday) return "ayer"
  return dated < dateWeekBefore ? dated.substring(0, 10) : getWeekDay(dated)
}

export const sortedActivityByDate = (activities: ActivityDataTypes[]) => {
  return activities.sort((a, b) => b.dated.localeCompare(a.dated))
}