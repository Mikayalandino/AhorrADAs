const seccionBalance = document.getElementById("seccion-balance");
const seccionNuevaOperacion = document.getElementById("seccion-nueva-operacion");

// Categorías
const seccionCategorias = document.getElementById("seccion-categorias");
const listadoDeCategorias = document.getElementById("listado-categorias");
const categoriasAgregadas = document.getElementById("categorias-agregadas");
const selectCategorias = document.getElementById("select-categorias")
const seccionEditarCategorias = document.getElementById("seccion-editar-categorias")
//

const botonNuevaOperacion = document.getElementById("boton-operacion");
const botonCancelarOperacion = document.getElementById("boton-cancelar-operacion");
const botonCambiarFiltros = document.getElementById("boton-cambiar-filtros");
const contenedorFiltros = document.getElementById("cambiar-filtros"); 

const botonBalance = document.getElementById("boton-balance");

// Botones categorías
const botonNavCategorias = document.getElementById("boton-nav-categorias");
const botonAgregarCategoria = document.getElementById("boton-agregar-categoria");
const botonCancelarEditarCategoria = document.getElementById("boton-cancelar-editar-categoria");
const botonConfirmarEditarCategoria = document.getElementById("boton-confirmar-editar-categoria");
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

/* // Botón balance

botonBalance.onclick = () => {
  
} */

// Sección categorías

                                // botón nav categorías

botonNavCategorias.onclick = () => {
  seccionCategorias.classList.remove("is-hidden");
  seccionEditarCategorias.classList.add("is-hidden")
  seccionBalance.classList.add("is-hidden")
  seccionNuevaOperacion.classList.add("is-hidden")
}

                                // Lista de categorías

const categorias = ["Comida", "Servicios", "Salidas", "Educación", "Transporte", "Trabajo"]

const obtenerCategorias = () => {
  const categoriasEnLocalStorage = localStorage.getItem("categorias")
  if (categoriasEnLocalStorage === null) {
    return categorias
  } 
  else {
    return JSON.parse(categoriasEnLocalStorage)
  }
}

/* const agregarCategoriasAlSelect = () => {
  const categorias = obtenerCategorias()
  const select = document.querySelector("#categoria-select")

  const categoriasString = categorias.reduce((acc, elemento) => {
    return acc + `<option value="${elemento}">${elemento}</option>`
  }, "")

  select.innerHTML = categoriasString
} */

const agregarCategoriasAHTML = () => {
  const categorias = obtenerCategorias()

  const categoriasString = categorias.reduce((acc, elemento, index) => {
    return acc + `<div class="columns">
    <div class="column">
        <div class="tag is-primary is-light">${elemento}</div>
    </div>
    <button id="listaDeBotonesEditarCategoria" class= "button is-ghost is-small mr-2 mt-2">Editar</button> 
    <button id="listaDeBotonesEliminarCategoria" class= "button is-ghost is-small mr-1 mt-2">Eliminar</button>
    </div>`
  }, "")

  listadoDeCategorias.innerHTML = categoriasString
}

agregarCategoriasAHTML()

botonAgregarCategoria.onclick = () => {
  const nuevaCategoria = listadoDeCategorias.value
  const categorias = obtenerCategorias()
  categorias.push(nuevaCategoria)
  listadoDeCategorias.value = ""

  const categoriasAJSON = JSON.stringify(categorias)
  localStorage.setItem("categorias", categoriasAJSON)

/*   agregarCategoriasAlSelect() */
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

