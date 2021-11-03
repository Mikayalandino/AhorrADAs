const seccionBalance = document.getElementById("seccion-balance");
const seccionNuevaOperacion = document.getElementById("seccion-nueva-operacion");

const botonNuevaOperacion = document.getElementById("boton-operacion");
const botonCancelarOperacion = document.getElementById("boton-cancelar-operacion");
const botonCambiarFiltros = document.getElementById("boton-cambiar-filtros");
const contenedorFiltros = document.getElementById("cambiar-filtros"); 

const formularioFiltros = document.getElementById("formulario-filtros");


const modificarClasesBotones = (boton, clase1, clase2) => {
  boton.onclick = () => {
    clase1.classList.add("is-hidden");
    clase2.classList.remove("is-hidden");
  };
};
modificarClasesBotones(botonNuevaOperacion, seccionBalance, seccionNuevaOperacion);
modificarClasesBotones(botonCancelarOperacion, seccionNuevaOperacion, seccionBalance);



botonCambiarFiltros.onclick = (event) => {
    event.preventDefault();
    contenedorFiltros.classList.toggle("is-hidden");
    if (botonCambiarFiltros.textContent === "Ocultar filtros") {
      botonCambiarFiltros.textContent = "Mostrar filtros";
    } else {
      botonCambiarFiltros.textContent = "Ocultar filtros";
    }
  };
