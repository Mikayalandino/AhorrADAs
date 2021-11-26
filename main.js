
const seccionBalance = document.getElementById("seccion-balance")
const seccionNuevaOperacion = document.getElementById("seccion-nueva-operacion")
// Categorías
const seccionCategorias = document.getElementById("seccion-categorias")
const listadoDeCategorias = document.getElementById("listado-categorias")
const seccionEditarCategorias = document.getElementById("seccion-editar-categorias")
const botonOcultarFiltros = document.getElementById("boton-cambiar-filtros")
const contenedorFiltros = document.getElementById("cambiar-filtros")


// ELEMENTOS DEL DOM

const botonBalanceNavbar = document.getElementById("boton-nav-balance")
const botonCategoriasNavbar = document.getElementById("boton-nav-categorias")
const botonReportesNavbar = document.querySelector("#boton-nav-reportes")

const botonNuevaOperacion = document.getElementById("boton-operacion")
const botonCancelarOperacion = document.getElementById("boton-cancelar-operacion")
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
const inputEditarCategoria = document.querySelector("#input-edit-categorias")
const botonDeleteCategoria = document.querySelectorAll(".eliminar-categorias")








const sinReportes = document.querySelector("#sin-reportes");

const inputSeccionCategoria = document.querySelector("#input-categoria");
const botonInputSeccionCategoria = document.querySelector("#boton-agregar-categoria");
const selectCategoriasDeFiltros = document.querySelector("#select-categorias");
const formularioFiltros = document.getElementById("formulario-filtros");
const inputDateFiltro = document.querySelector("#input-date")

// AhorrADAs pagina completa
const paginaPrincipal = document.getElementById("pagina-completa");
const botonAhorradas = document.getElementById("boton-ahorradas");
const botonNavAhorradas = document.getElementById("boton-nav-ahorradas");

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

// Botones reportes
const seccionReportesInsuficientes = document.getElementById("seccion-reportes-insuficientes")

botonReportesNavbar.onclick = () => {
  seccionReportesInsuficientes.classList.remove("is-hidden");
  seccionBalance.classList.add("is-hidden");
  seccionCategorias.classList.add("is-hidden")
  seccionEditarCategorias.classList.add("is-hidden");
}

// FUNCIONES GENÉRICAS 


// FUNCIONES GENÉRICAS REUTILIZABLES

const modificarClasesBotones = (boton, clase1, clase2) => {
  boton.onclick = () => {
    clase1.classList.add("is-hidden");
    clase2.classList.remove("is-hidden");
  }
}

const aJSONYSubirAlLStorage = (array, clave) => {
  const aJSON = JSON.stringify(array)
  localStorage.setItem(clave, aJSON)
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

//  VARIABLES GLOBALES

let categorias = ["Comida", "Servicios", "Salidas", "Educación", "Transporte", "Trabajo"]
let operaciones = []

// NAVEGACIÓN CON BOTONES

botonCategoriasNavbar.onclick = () => {
  seccionCategorias.classList.remove("is-hidden");
  seccionEditarCategorias.classList.add("is-hidden");
  seccionBalance.classList.add("is-hidden");
  seccionNuevaOperacion.classList.add("is-hidden");
  seccionReportesInsuficientes.classList.add("is-hidden");
}


modificarClasesBotones(botonNuevaOperacion, seccionBalance, seccionNuevaOperacion);
modificarClasesBotones(botonCancelarOperacion, seccionNuevaOperacion, seccionBalance);

// CATEGORÍAS 

const subirCategoriasAlLs = (array, clave) => localStorage.getItem(clave) === null && aJSONYSubirAlLStorage(array, clave)

subirCategoriasAlLs(categorias, "categorias")

const pushCategoria = (arr) => {
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

selectCategoriasDeFiltros.innerHTML = ` <option value="todas" id="categoria-filtro-todas">Todas</option> ${arrayReduc}`

const agregarCategoriasAHTML = () => {
  const categoriasHTML = categorias.reduce((acc, elemento, index) => {
    return acc + `<div class="columns">
<div class="column">
<div class="tag is-primary is-light">${elemento}</div>
</div>
<button type="button" id="editar-categorias-${index}" class="button is-ghost is-small mr-2 mt-2 editar-categorias">Editar</button> 
<button type="button" id="eliminar-categorias-${index}" class="button is-ghost is-small mr-1 mt-2 eliminar-categorias">Eliminar</button>
</div>`
  }, "")

  listadoDeCategorias.innerHTML = categoriasHTML
}

agregarCategoriasAHTML()


// BOTONES EDITAR-ELIMINAR CATEGORÍAS

const editarCategoriaConInput = (id) => {

  seccionEditarCategorias.classList.remove("is-hidden")
  seccionCategorias.classList.add("is-hidden")
  seccionBalance.classList.add("is-hidden")
  seccionNuevaOperacion.classList.add("is-hidden")

  botonConfirmarEditarCategoria.onclick = () => {
    categorias[id] = inputEditarCategoria.value
    agregarCategoriasAHTML(categorias)
    aJSONYSubirAlLStorage(categorias, "categorias")
  }
}

const editarCategoriasBoton = () => {

  const btnEditarCategoria = document.querySelectorAll(".editar-categorias")

  for (let i = 0; i < btnEditarCategoria.length; i++) {

    btnEditarCategoria[i].onclick = () => {

      const idRecortado = btnEditarCategoria[i].id.slice(18)
      idNumerico = Number(idRecortado)
      inputEditarCategoria.value = categorias[idNumerico]
      editarCategoriaConInput(idNumerico)
    }
  }
}

editarCategoriasBoton()

botonCancelarEditarCategoria.onclick = () => {
  seccionEditarCategorias.classList.add("is-hidden");
  seccionCategorias.classList.remove("is-hidden")
  seccionReportesInsuficientes.classList.add("is-hidden")
}

const botonesEliminanCategorias = document.querySelectorAll(".eliminar-categorias")

const eliminarCategoriasBoton = () => {

  for (let i = 0; i < botonesEliminanCategorias.length; i++) {

    botonesEliminanCategorias[i].onclick = () => {

      const idRecortado = botonesEliminanCategorias[i].id.slice(20)
      idNumerico = Number(idRecortado)

      const filtradoCategorias = categorias.filter((elemento, index) => {
        return index != idNumerico

      })

      categorias = filtradoCategorias
      agregarCategoriasAHTML(categorias)
      aJSONYSubirAlLStorage(categorias, "categorias")

    }
  }
}

eliminarCategoriasBoton()


// OPERACIONES

selectCategoriasOperaciones.innerHTML = arrayReduc

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

botonAgregarOperacion.onclick = () => {
  subirObjetoAArray(operaciones)
  blanquearFormularios(formularioOperaciones)
  aJSONYSubirAlLStorage(operaciones, "operaciones")
  listadoOperaciones.innerHTML = aHTML(ordenarMasRecientes(operaciones))
  seccionNuevaOperacion.classList.add("is-hidden");
  seccionBalance.classList.remove("is-hidden");
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
  <button type="button" id="listaDeBotonesEditarOperaciones" class= "button is-2 is-ghost is-small  mt-2 has-text-right">Editar</button> 
  <button type="button" id="listaDeBotonesEliminarOperaciones" class= "button is-ghost is-small mt-2 has-text-right">Eliminar</button>
</div>
</div>
</div>`
  }, "")

  return arrReduc
}


// EDITAR Y ELIMINAR OPERACIONES 

// FILTROS

botonOcultarFiltros.onclick = () => {
  contenedorFiltros.classList.toggle("is-hidden");
  if (contenedorFiltros.classList.contains("is-hidden")) {
    botonOcultarFiltros.textContent = "Mostrar filtros";
  } else {
    botonOcultarFiltros.textContent = "Ocultar filtros";
  }
}

// FILTRO POR TIPO Y CATEGORÍA 

const filtrosTipo = document.getElementById("filtros-tipo")

let arrayFiltrado = [...operaciones]

const filtrosPorTipoYCategoria = () => {
  const filtroTipo = filtrosTipo.value
  const filtracionPorTipo = operaciones.filter((operacion) => {
    if (filtroTipo === "todos") {
      return operacion
    }
    return operacion.tipo === filtroTipo
  })
  const filtracionPorCategoria = selectCategoriasDeFiltros.value
  const filtrado = filtracionPorTipo.filter((operacion) => {
    if (filtracionPorCategoria === "todas") {
      return operacion
    }
    return operacion.categoria === filtracionPorCategoria
  })
  return filtrado
}

filtrosTipo.onchange = () => {
  const arrayFiltradoTipo = filtrosPorTipoYCategoria()
  listadoOperaciones.innerHTML = aHTML(arrayFiltradoTipo)
}

selectCategoriasDeFiltros.onchange = () => {
  const arrayFiltradoCategoria = filtrosPorTipoYCategoria()
  listadoOperaciones.innerHTML = aHTML(arrayFiltradoCategoria)
}

// FILTRO POR FECHA

const filtradoPorFecha = (array) => {
  inputDateFiltro.oninput = () => {
    const arrayFiltrado = array.filter((elemento) => {
      return new Date(elemento.fecha) > new Date(inputDateFiltro.value)
    })
    listadoOperaciones.innerHTML = aHTML(arrayFiltrado)
  }
}
filtradoPorFecha(operaciones)



// ORDENAR POR


// MÁS Y MENOS RECIENTE

const selectOrdenarPor = document.querySelector("#ordenar-por")

const ordenarMasRecientes = (array) => {
  const fechasOrdenadas = array.sort((a, b) => {
    return new Date(b.fecha) - new Date(a.fecha)
  })
  return fechasOrdenadas
}

const ordenarMenosRecientes = (array) => {
  const fechasOrdenadas = array.sort((a, b) => {
    return new Date(a.fecha) - new Date(b.fecha)
  })
  return fechasOrdenadas
}

listadoOperaciones.innerHTML = aHTML(ordenarMasRecientes(operaciones))

const masYMenosRecientes = () => {
  if (selectOrdenarPor.value === "mas-reciente") {
    listadoOperaciones.innerHTML = aHTML(ordenarMasRecientes(operaciones))
  }
  else if (selectOrdenarPor.value === "menos-reciente") {
    listadoOperaciones.innerHTML = aHTML(ordenarMenosRecientes(operaciones))
  }
  else {
    console.log("es otra opción")
  }
}

// MENOR MONTO

const arrayOrdenadoMenorMonto = [...operaciones].sort((a, b) => {
  return a.monto - b.monto
})

// MAYOR MONTO

const arrayOrdenadoMayorMonto = [...operaciones].sort((a, b) => {
  return b.monto - a.monto
})

const mayorMenorMonto = () => {
  if (selectOrdenarPor.value === "mayor-monto") {
    listadoOperaciones.innerHTML = aHTML(arrayOrdenadoMayorMonto)
  }
  else if (selectOrdenarPor.value === "menor-monto") {
    listadoOperaciones.innerHTML = aHTML(arrayOrdenadoMenorMonto)
  }
}

// ORDENAR A/Z Y Z/A

const arrayOrdenadoA = [...operaciones].sort((a, b) => {

  if (a.descripcion.toLowerCase() < b.descripcion.toLowerCase()) {
    return -1
  }
})

const arrayOrdenadoZ = [...operaciones].sort((a, b) => {

  if (a.descripcion.toLowerCase() > b.descripcion.toLowerCase()) {
    return -1
  }
})

const ordenarAlfabeticamente = () => {
  if (selectOrdenarPor.value === "a-z") {
    listadoOperaciones.innerHTML = aHTML(arrayOrdenadoA)
  }
  else if (selectOrdenarPor.value === "z-a") {
    listadoOperaciones.innerHTML = aHTML(arrayOrdenadoZ)
  }
}

const selectOrdenarPorAHTML = () => {
  selectOrdenarPor.oninput = () => {
    masYMenosRecientes()
    mayorMenorMonto()
    ordenarAlfabeticamente()
  }
}

selectOrdenarPorAHTML()


// REPORTES

sinReportes.style.display = "none"



const categoriaMayorGanancia = document.getElementById("categoria-mayor-ganancia")
const categoriaMayorGananciaMonto = document.getElementById("categoria-mayor-ganancia-monto")

const categoriaMayorGasto = document.getElementById("categoria-mayor-gasto")
const categoriaMayorGastoMonto = document.getElementById("categoria-mayor-gasto-monto")

const categoriaMayorBalance = document.getElementById("categoria-mayor-balance")
const categoriaMayorBalanceMonto = document.getElementById("categoria-mayor-balance-monto")

const categoriasConOperaciones = categorias.map(categoria => {
  const operacionPorCategoria = operaciones.filter(operacion => {
    if (operacion.categoria === categoria) {
      return true
    }
  })

  let gasto = 0;
  let ganancia = 0; //acc
  operacionPorCategoria.forEach(op => {
    if (op.tipo === "ganancia") ganancia = ganancia + parseInt(op.monto)
    if (op.tipo === "gasto") gasto = gasto + parseInt(op.monto)

  })

  return {
    nombre: categoria,
    ganancia,
    gasto,
    balance: ganancia - gasto, 
  }
})

const calcularResumen = (elemento) => {
  const ordenado = [...categoriasConOperaciones]
  ordenado.sort((a, b) => {
    return b[elemento] - a[elemento]
  })
  return ordenado[0]
}

// Obtener categoria con mayor ganancia

categoriaMayorGanancia.innerHTML = calcularResumen("ganancia").nombre
categoriaMayorGananciaMonto.innerHTML = "+$" + calcularResumen("ganancia").ganancia

categoriaMayorGasto.innerHTML = calcularResumen("gasto").nombre
categoriaMayorGastoMonto.innerHTML = "+$" + calcularResumen("gasto").gasto

categoriaMayorBalance.innerHTML = calcularResumen("balance").nombre
categoriaMayorBalanceMonto.innerHTML = "+$" + calcularResumen("balance").balance 

console.log(categoriasConOperaciones)

console.log(calcularResumen("ganancia"))
console.log(calcularResumen("gasto"))
