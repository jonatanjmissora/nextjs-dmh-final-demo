export const EnglishToSpanishError = (errorString: string) => {
  //console.log(errorString)
  if (errorString === "invalid credentials") return "La contraseña no corresponde al usuario"
  if (errorString === "user not found") return "Usuario no registrado"
  if (errorString === "") return ""
  return "Error en la conexión"
}