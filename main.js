const seccionBalance = document.getElementById("seccion-balance");
const seccionNuevaOperacion = document.getElementById("seccion-nueva-operacion");
//categorías
const seccionCategorias = document.getElementById("seccion-categorias");
const listadoDeCategorias = document.getElementById("listado-categorias");
const categoriasAgregadas = document.getElementById("categorias-agregadas");
const selectCategorias = document.getElementById("select-categorias")
//
const botonNuevaOperacion = document.getElementById("boton-operacion");
const botonCancelarOperacion = document.getElementById("boton-cancelar-operacion");
const botonCambiarFiltros = document.getElementById("boton-cambiar-filtros");
const contenedorFiltros = document.getElementById("cambiar-filtros"); 

const botonBalance = document.getElementById("boton-balance");
// botones categorías
const botonNavCategorias = document.getElementById("boton-nav-categorias");
const botonAgregarCategoria = document.getElementById("boton-agregar-categoria");
//
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

// botón balance

botonBalance.onclick = () => {
  
}

// seccion categorías

                                // botón categorías

botonNavCategorias.onclick = () => {
  seccionCategorias.classList.remove("is-hidden");
  seccionBalance.classList.add("is-hidden")
}
// Lista de categorías

// const categorias = ["Comida", "Servicios", "Salidas", "Educación", "Transporte", "Trabajo"]

// const obtenerCategorias = () => {
//   const categoriasEnLocalStorage = localStorage.getItem("categorias")
//   if (categoriasEnLocalStorage === null) {
//     return categorias
//   } 
//   else {
//     return JSON.parse(categoriasEnLocalStorage)
//   }
// }

// const agregarCategoriasAlSelect = () => {
//   const categorias = obtenerCategorias()
//   const select = document.querySelector("#categoria-select")

//   const categoriasString = categorias.reduce((acc, elemento) => {
//     return acc + `<option value="${elemento}">${elemento}</option>`
//   }, "")
  
//   select.innerHTML = categoriasString
// }

// const agregarCategoriasAHTML = () => {
//   const categorias = obtenerCategorias()

//   const categoriasString = categorias.reduce((acc, elemento, index) => {
//     return acc + `<div>${elemento} <button id="eliminar-${index}" class="boton-eliminar delete-link">Eliminar</button></div>`
//   }, "")
  
//   listadoDeCategorias.innerHTML = categoriasString
// }

// agregarCategoriasAHTML()

// botonAgregarCategoria.onclick = () => {
//   const nuevaCategoria = listadoDeCategorias.value
//   const categorias = obtenerCategorias()
//   categorias.push(nuevaCategoria)
//   listadoDeCategorias.value = ""

//   const categoriasAJSON = JSON.stringify(categorias)
//   localStorage.setItem("categorias", categoriasAJSON)

//   agregarCategoriasAlSelect()
//   agregarCategoriasAHTML()
// }
