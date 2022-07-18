var Licuadora = "0";
var Sonido = document.getElementById( "blender-sound")
var Boton = document.getElementById( "blender-button-sound")
var Blender = document.getElementById("blender")

function FuncionLicuadora() {
    if (Licuadora == "0") {
        Licuadora = "encendido";
        SonidoLicuadora();
        Blender.classList.add("active")
  } else {
    Licuadora = "0";
    SonidoLicuadora()
    Blender.classList.remove("active")
  }
}

function SonidoLicuadora() {
if(Sonido.paused){
    Boton.play()
    Sonido.play()
  } else {
    Boton.play()
    Sonido.pause()
    Sonido.currentTime = 0
  }
}
