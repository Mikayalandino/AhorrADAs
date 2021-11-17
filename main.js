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
const botonBalanceNavbar = document.getElementById("boton-nav-balance");
const botonCategoriasNavbar = document.getElementById("boton-nav-categorias");
const botonReportesNavbar = document.querySelector("#boton-nav-reportes")

const botonNuevaOperacion = document.getElementById("boton-operacion");
const botonCancelarOperacion = document.getElementById("boton-cancelar-operacion");
const botonAgregarOperacion = document.querySelector("#boton-agregar-operacion")
const formularioOperaciones = document.querySelector("#formulario-operaciones")

const inputDescripcionOperaciones = document.querySelector("#input-descripcion")
const inputMontoOperaciones = document.querySelector("#input-monto")
const selectTipoOperaciones = document.querySelector("#select-tipo-op")
const selectCategoriasOperaciones = document.querySelector("#select-categorias-op")
const inputFechaoperaciones = document.querySelector("#input-fecha")

const operacionesSinResultados = document.querySelector(".operaciones-sin-resultados")
const listadoOperaciones = document.getElementById("listado-nuevas-operaciones")

const seccionListadoOperaciones = document.querySelector(".listado-operaciones")


const inputSeccionCategoria = document.querySelector("#input-categoria");
const botonInputSeccionCategoria = document.querySelector("#boton-agregar-categoria");
const selectCategoriasDeFiltros = document.querySelector("#select-categorias");
const formularioFiltros = document.getElementById("formulario-filtros");

// AhorrADAs pagina completa

const paginaPrincipal = document.getElementById("pagina-completa")
const botonNavAhorradas = document.getElementById("boton-nav-ahorradas")

botonNavAhorradas.onclick = () => {
  seccionBalance.classList.remove("is-hidden");
  seccionCategorias.classList.add("is-hidden");
  seccionReportesInsuficientes.classList.add("is-hidden");
}

// Botones balance

botonBalanceNavbar.onclick = () => {
  seccionBalance.classList.remove("is-hidden");
  seccionCategorias.classList.add("is-hidden");
  seccionReportesInsuficientes.classList.add("is-hidden");
}

// Botones categorías

const botonAgregarCategoria = document.getElementById("boton-agregar-categoria");
const botonCancelarEditarCategoria = document.getElementById("boton-cancelar-editar-categoria");
const botonConfirmarEditarCategoria = document.getElementById("boton-confirmar-editar-categoria");

// FUNCIONES GENÉRICAS 
// Botones reportes
const seccionReportesInsuficientes = document.getElementById("seccion-reportes-insuficientes")

botonReportesNavbar.onclick = () => {
  seccionReportesInsuficientes.classList.remove("is-hidden");
  seccionBalance.classList.add("is-hidden");
  seccionCategorias.classList.add("is-hidden")
}

// FUNCIONES GENÉRICAS REUTILIZABLES

const modificarClasesBotones = (boton, clase1, clase2) => {
boton.onclick = () => {
  clase1.classList.add("is-hidden")
  clase2.classList.remove("is-hidden")
}
}

const aJSONYSubirAlLStorage = (array, clave) => {
const aJSON = JSON.stringify(array)
localStorage.setItem(clave , aJSON)
}

const guardarDeLStorage = (array, clave) => {
  const nuevoArray = [localStorage.getItem(clave) || "[]"]
  const parseArray = JSON.parse(nuevoArray)
  const nuevosObjetos = parseArray.map((arr) => {
    return array.push(arr)
  })  
  return nuevosObjetos
}

const blanquearFormularios = (form) => {
  form.reset()
}

//  VARIABLES REUTILIZABLES

let signo = ""

// NAVEGACIÓN CON BOTONES

botonCategoriasNavbar.onclick = () => {
  seccionCategorias.classList.remove("is-hidden");
  seccionEditarCategorias.classList.add("is-hidden")
  seccionBalance.classList.add("is-hidden")
  seccionNuevaOperacion.classList.add("is-hidden") 
  seccionReportesInsuficientes.classList.add("is-hidden")
  }
  

modificarClasesBotones(botonNuevaOperacion, seccionBalance, seccionNuevaOperacion);
modificarClasesBotones(botonCancelarOperacion, seccionNuevaOperacion, seccionBalance);



                                // listado operaciones






// al hacer click en nueva operación y agregar una nueva, abre la sección del listado de nuevas opeaciones, desaparece la imagen y texto sin resultados

//maquetado del listado operaciones

/* 
*/


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

let categorias = ["Comida", "Servicios", "Salidas", "Educación", "Transporte", "Trabajo"]

const subirCategoriasAlLs = (array, clave) => localStorage.getItem(clave) === null && aJSONYSubirAlLStorage(array, clave) 

subirCategoriasAlLs(categorias, "categorias")

const pushCategoria = (arr) =>{
    arr.push(inputSeccionCategoria.value)
}

botonInputSeccionCategoria.onclick = () => { 
  pushCategoria(categorias)  
  aJSONYSubirAlLStorage(categorias, "categorias")       
  agregarCategoriasAHTML()
}  

let nuevasCategorias = []

guardarDeLStorage(nuevasCategorias, "categorias")

categorias = nuevasCategorias

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

 */
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
seccionReportesInsuficientes.classList.add("is-hidden")

}


// OPERACIONES

selectCategoriasOperaciones.innerHTML = arrayReduc

let operaciones = []

const subirObjetoAArray = (array) => {
  const nuevoObjeto = {
    descripcion: inputDescripcionOperaciones.value,
    monto: inputMontoOperaciones.value,  
    tipo: selectTipoOperaciones.value,
    categoria: selectCategoriasOperaciones.value,
    fecha: inputFechaoperaciones.value,
  }
  array.push(nuevoObjeto)
}

botonAgregarOperacion.onclick = () =>{
  subirObjetoAArray(operaciones)
  blanquearFormularios(formularioOperaciones)
  aJSONYSubirAlLStorage(operaciones, "operaciones") 
  listadoOperaciones.innerHTML = aHTML(operaciones) 
}

const estadoDeContenedorDeOperaciones = (id) => localStorage.getItem(id) !== null && (seccionListadoOperaciones.classList.remove("is-hidden"),
operacionesSinResultados.classList.add("is-hidden"))

estadoDeContenedorDeOperaciones("operaciones")

let nuevasOperaciones = []

guardarDeLStorage(nuevasOperaciones, "operaciones")

operaciones = nuevasOperaciones


const aHTML = (array) => {
  const arrReduc = array.reduce((acc, elemento) => {
    const montoSigno = (elemento) => elemento.tipo === "ganancia" ? `+$` : `-$`
    const montoClase = (elemento) => elemento.tipo === "ganancia" ? "has-text-success" : "has-text-danger"  
    const fechas = new Date(elemento.fecha)
    
    return acc += `<div class="columns">
    <div class="column is-3 has-text-weight-bold has-text-left">${elemento.descripcion}</div>
    <div class="column is-1 tag is-primary is-light has-text-left mt-3">${elemento.categoria}</div>
    <div class="column is-4 has-text-grey has-text-right">${fechas.toLocaleDateString()}</div>
    <div class="column is-2 has-text-weight-bold ${montoClase(elemento)} has-text-right">${montoSigno(elemento)}${elemento.monto}</div>
    <div class="column is-2">
      <div class="columns">
        <button id="listaDeBotonesEditarCategoria" class= "button is-2 is-ghost is-small  mt-2 has-text-right">Editar</button> 
        <button id="listaDeBotonesEliminarCategoria" class= "button is-ghost is-small mt-2 has-text-right">Eliminar</button>
      </div>
    </div>
  </div>`
  }, "")   

  return arrReduc
}


// corregir 







aHTML(operaciones)
listadoOperaciones.innerHTML = aHTML(operaciones)




