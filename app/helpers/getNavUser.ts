export const getNavUser = (username: string) => {
  let firstname = "" 
  let midname = ""
  let lastname = ""
  const nameArray = username.split(" ")
  if(nameArray.length === 3) {
    [firstname, midname, lastname] = nameArray
  }
  else {
    [firstname, lastname] = nameArray
  }
  const avatar = `${firstname.charAt(0).toUpperCase()} ${lastname.charAt(0).toUpperCase()}`
  const capitalName = `${firstname.charAt(0).toUpperCase()}${firstname.slice(1)} ${midname.charAt(0).toUpperCase()} ${lastname.charAt(0).toUpperCase()}${lastname.slice(1)}`
  return [avatar, capitalName]
}