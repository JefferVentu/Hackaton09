function contrasenaValida(){
  if (contrasena === "2Fj(jjbFsuj" || contrasena === "eoZiugBf&g9") {
      return true
  }
  return false
}

export function Programa01(){
  const contrasena = prompt('Ingrese la contraseña valida: ');
  const ex1InputConstrasena =  contrasena
  const result = contrasenaValida(ex1InputConstrasena.value)
  alert(result)
}
