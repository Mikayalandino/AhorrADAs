const seccionBalance = document.getElementById("seccion-balance");
const seccionNuevaOperacion = document.getElementById("seccion-nueva-operacion");

// Categorías
const seccionCategorias = document.getElementById("seccion-categorias");
console.log(seccionCategorias) // preguntar para qué sirve 

const listadoDeCategorias = document.getElementById("listado-categorias");
// const categoriasAgregadas = document.getElementById("categorias-agregadas");
const seccionEditarCategorias = document.getElementById("seccion-editar-categorias")


const botonCambiarFiltros = document.getElementById("boton-cambiar-filtros");
const contenedorFiltros = document.getElementById("cambiar-filtros"); 



// ELEMENTOS DEL DOM
const botonBalanceNavbar = document.getElementById("boton-balance");
const botonCategoriasNavbar = document.getElementById("boton-nav-categorias");
const botonReportesNavbar = document.querySelector("#boton-reportes")

const botonNuevaOperacion = document.getElementById("boton-operacion");
const botonCancelarOperacion = document.getElementById("boton-cancelar-operacion");
const botonAgregarOperacion = document.querySelector("#boton-agregar-operacion")
const formularioOperaciones = document.querySelector("#formulario-operaciones")

const inputDescripcionOperaciones = document.querySelector("#input-descripcion")
const inputMontoOperaciones = document.querySelector("#input-monto")
const selectTipoOperaciones = document.querySelector("#select-tipo-op")
const selectCategoriasOperaciones = document.querySelector("#select-categorias-op")
const inputFechaoperaciones = document.querySelector("#input-fecha")


const inputSeccionCategoria = document.querySelector("#input-categoria");
const botonInputSeccionCategoria = document.querySelector("#boton-agregar-categoria");
const selectCategoriasDeFiltros = document.querySelector("#select-categorias");
const formularioFiltros = document.getElementById("formulario-filtros");

// Botones categorías

const botonAgregarCategoria = document.getElementById("boton-agregar-categoria");
const botonCancelarEditarCategoria = document.getElementById("boton-cancelar-editar-categoria");
const botonConfirmarEditarCategoria = document.getElementById("boton-confirmar-editar-categoria");

// FUNCIONES GENÉRICAS REUTILIZABLES

const modificarClasesBotones = (boton, clase1, clase2) => {
boton.onclick = () => {
  clase1.classList.add("is-hidden")
  clase2.classList.remove("is-hidden")
}
}

const aJSONYSubirAlLStorage = (operacion, clave) => {
const aJSON = JSON.stringify(operacion)
localStorage.setItem(clave , aJSON)
}

const obtenerLStorageYPasarAJs = (clave) => {
  const nuevoObjeto = localStorage.getItem(clave) || `[]`
  const JSONAObjeto = JSON.parse(nuevoObjeto)     
  return JSONAObjeto
}

const blanquearFormularios = (form) => {
  form.reset()
}

// NAVEGACIÓN CON BOTONES

botonCategoriasNavbar.onclick = () => {
  seccionCategorias.classList.remove("is-hidden");
  seccionEditarCategorias.classList.add("is-hidden")
  seccionBalance.classList.add("is-hidden")
  seccionNuevaOperacion.classList.add("is-hidden") 
  }
  

modificarClasesBotones(botonNuevaOperacion, seccionBalance, seccionNuevaOperacion);
modificarClasesBotones(botonCancelarOperacion, seccionNuevaOperacion, seccionBalance);

// OPERACIONES

let operaciones = []

const subirObjetoAArray = (array) => {
  const nuevoObjeto = {
    descripcion: inputDescripcionOperaciones.value,
    monto: inputMontoOperaciones.value,  
    tipo: selectTipoOperaciones.value,
    categoria: selectCategoriasOperaciones.value,
    fecha: inputFechaoperaciones.value,
  }
  console.log(array)
  array.push(nuevoObjeto)
}

botonAgregarOperacion.onclick = () =>{
  subirObjetoAArray(operaciones)
  blanquearFormularios(formularioOperaciones)
  aJSONYSubirAlLStorage(operaciones, "operaciones")
}

let nuevasOperaciones = []

const guardarObjetosDeLStorage = (array) => {
  const nuevoArray = [localStorage.getItem("operaciones") || "[]"]
  const parseArray = JSON.parse(nuevoArray)
  const nuevosObjetos = parseArray.map((arr) => {
    return array.push(arr)
  })  
  return nuevosObjetos
}

guardarObjetosDeLStorage(nuevasOperaciones)

operaciones = nuevasOperaciones

const aHTML = (array) => {
  const arrReduc = array.reduce((acc, arr) => {

  }, "")

  return arrReduc
}

                                // listado operaciones

const listadoOperaciones = document.getElementById(listado-operaciones)



// FILTROS

botonCambiarFiltros.onclick = (event) => {
event.preventDefault();
contenedorFiltros.classList.toggle("is-hidden");
if (contenedorFiltros.classList.contains("is-hidden")) {
  botonCambiarFiltros.textContent = "Mostrar filtros";
} else {
  botonCambiarFiltros.textContent = "Ocultar filtros";
}
}





/* // Botón balance

botonBalance.onclick = () => {

} 

// Sección categorías

                              // botón nav categorías 
                              */
                              


                              // CATEGORÍAS 

let categorias = ["Todas", "Comida", "Servicios", "Salidas", "Educación", "Transporte", "Trabajo"]

const subirCategorias = (boton, arr, clave) => {
boton.onclick = () => {
  arr.push(inputSeccionCategoria.value)
  aJSONYSubirAlLStorage(arr, clave)    
}  
}

subirCategorias(botonInputSeccionCategoria, categorias, "categorias")

categorias = obtenerLStorageYPasarAJs("categorias") 

const arrayReduc = categorias.reduce((acc, arr) => {
  return acc += `<option value="${arr}">${arr}</option>`
}, "")

selectCategoriasDeFiltros.innerHTML = arrayReduc

const agregarCategoriasAHTML = () => {

const categoriasHTML = categorias.reduce((acc, elemento) => {
  return acc + `<div class="columns">
  <div class="column">
      <div class="tag is-primary is-light">${elemento}</div>
  </div>
  <button id="listaDeBotonesEditarCategoria" class= "button is-ghost is-small mr-2 mt-2">Editar</button> 
  <button id="listaDeBotonesEliminarCategoria" class= "button is-ghost is-small mr-1 mt-2">Eliminar</button>
  </div>`
}, "")

listadoDeCategorias.innerHTML = categoriasHTML
}

agregarCategoriasAHTML()


/**

botonAgregarCategoria.onclick = () => {
const nuevaCategoria = listadoDeCategorias.value
const categorias = obtenerCategorias()
categorias.push(nuevaCategoria)
listadoDeCategorias.value = ""

const categoriasAJSON = JSON.stringify(categorias)
localStorage.setItem("categorias", categoriasAJSON)

  agregarCategoriasAlSelect() 
agregarCategoriasAHTML()
}

                              // Editar lista categorías

// Lista de botones editar-eliminar


for (let i = 0; i < listaDeBotonesEliminarCategoria.length; i++) {
listaDeBotonesEliminarCategoria[i].onclick = () => {
  const id = listaDeBotonesEliminarCategoria[i].id
  console.log(id)
  const indice = id.charAt(7)
  const categoriasFiltradas = categorias.filter((elemento, index) => {
      return index != indice
    })
}
}

for (let i = 0; i < listaDeBotonesEditarCategoria.length; i++) {
listaDeBotonesEditarCategoria[i].onclick = () => {
  seccionEditarCategorias.classList.remove("is-hidden");
  seccionCategorias.classList.add("is-hidden");
  seccionBalance.classList.add("is-hidden")
  seccionNuevaOperacion.classList.add("is-hidden")
}
}

botonCancelarEditarCategoria.onclick = () => {
seccionEditarCategorias.classList.add("is-hidden");
seccionCategorias.classList.remove("is-hidden")

}

**/