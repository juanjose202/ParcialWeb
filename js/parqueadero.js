
let vehiculos = [
    {
        placa: "DST-602",
        color: "GRIS",
        marca: "RENAULT",
        ciudad: "Medellin",
        tipo: "003",
        dia: "",
        hora: "",
        fecha: ""
    }
]
let vehiculoTemporal = null

function obtenerValores() {
    let placaobtenida = document.getElementById("placa").value + ""
    let placa = placaobtenida.toUpperCase()
    let color = document.getElementById("color").value
    let marca = document.getElementById("marca").value
    let ciudad = document.getElementById("ciudad").value
    let tipo = document.getElementById("tipo").value

    var fecha = new Date()
    var dianumero = fecha.getDate()
    var mes = fecha.getMonth()
    var anio = fecha.getFullYear()
    var horanumero = fecha.getHours()
    var minutos = fecha.getMinutes()
    var segundos = fecha.getSeconds()

    let dia = (dianumero + "/" + mes + "/" + anio)
    let hora = (horanumero + ":" + minutos + ":" + segundos)


    let miVehiculo = { placa, color, marca, ciudad, tipo, dia, hora, fecha }
    return miVehiculo
}


function crearVehiculo() {
    let vehiculo = obtenerValores()
    let existevehiculo = vehiculos.find(x => vehiculos.placa === x.placa)
    if (existevehiculo) {
        console.log('El vehiculo ya esta Ingresado');
        return;
    }

    vehiculos.push(vehiculo)
    listarVehiculos()
}

function listarVehiculos() {
    let lista = document.getElementById("listavehiculos")
    let data = ""
    for (let i = 0; i < vehiculos.length; i++) {
        let miVehiculo = vehiculos[i];
        data += "<tr>"
        data += `<td>${miVehiculo.placa}</td>`
        data += `<td>${miVehiculo.tipo} </td>`
        data += `<td>${miVehiculo.marca} </td>`
        data += `<td>${miVehiculo.ciudad} </td>`
        data += `<td>${miVehiculo.dia} </td>`
        data += `<td>${miVehiculo.hora} </td>`
        data += `<td><button type="button" onclick="cargarInformacion(${i})" class="btn btn-primary btn-sm">Editar</button> </td>`
        data += '<td><button type="button" onclick="eliminarVehiculo(' + i + ')" class="btn btn-primary btn-sm">Eliminar</button> </td>'
        data += `<td><button type="button" onclick="darsalida(${i})" class="btn btn-primary btn-sm">Dar salida</button> </td>`
        data += "</tr>"
    }
    lista.innerHTML = data;
}
function darsalida(i){

}

function eliminarVehiculo(index) {
    vehiculos.splice(index, 1)
    listarVehiculos()
}

function cargarInformacion(index) {
    let vehiculo = vehiculos[index]
    vehiculoTemporal = index
    document.getElementById("placa").value = vehiculo.placa
    document.getElementById("color").value = estudiante.color
    document.getElementById("tipo").value = vehiculo.tipo
    document.getElementById("marca").value = vehiculo.marca
    document.getElementById("ciudad").value = vehiculo.ciudad

    document.getElementById("btnEntradaVehiculo").style.display = "none"
    document.getElementById("btnEditarVehiculo").style.display = "inline"
}


function limpiarFormulario() {

    document.getElementById("placa").value = ""
    document.getElementById("color").value = ""
    document.getElementById("marca").value = ""
    document.getElementById("ciudad").value = ""
    document.getElementById("tipo").value = ""
    document.getElementById("btnEntradaVehiculo").style.display = "inline"
    document.getElementById("btnEditarVehiculo").style.display = "none"

    function actualizarVehiculo() {
        let vehiculoactualizado = obtenerValores()
        vehiculos.splice(vehiculoTemporal, 1, vehiculoactualizado)
        limpiarFormulario()
        listarVehiculos()
    }



    // Llamado a la función
    listarVehiculos()
}