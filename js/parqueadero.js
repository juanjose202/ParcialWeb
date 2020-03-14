
let vehiculos = [
    {
        placa: "A",
        color: "GRIS",
        marca: "RENAULT",
        ciudad: "Medellin",
        tipo: "003",
        dia: "2001-08-19",
        hora: "",
        
    }
]
let vehiculoTemporal = null

function obtenerValores() {
    let placa= document.getElementById("placa").value.toUpperCase()
    let color = document.getElementById("color").value
    let marca = document.getElementById("marca").value
    let ciudad = document.getElementById("ciudad").value
    let tipo = document.getElementById("tipo").value
    let dia = document.getElementById("fecha").value
    let hora = document.getElementById("hora").value

    

    let miVehiculo = { placa, color, marca, ciudad, tipo, dia, hora}
    return miVehiculo
}




function crearVehiculo() {
    let vehiculo = obtenerValores()
    let existevehiculo = vehiculos.find(x => vehiculos.placa === x.placa)
    console.log(existevehiculo)
    console.log(vehiculo.placa)

    if (existevehiculo) {
        console.log('El vehiculo ya esta Ingresado');
        return;

    } else {

        vehiculos.push(vehiculo)
        listarVehiculos()
    }


}

function listarVehiculos() {
    let lista = document.getElementById("listaVehiculos")
    let data = ""
    for (let i = 0; i < vehiculos.length; i++) {
        let miVehiculo = vehiculos[i];
        data += "<tr>"
        data += `<td>${miVehiculo.placa}</td>`
        data += `<td>${miVehiculo.tipo} </td>`
        data += `<td>${miVehiculo.marca} </td>`
        data += `<td>${miVehiculo.color} </td>`
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
function darsalida(i) {

}

function eliminarVehiculo(index) {
    vehiculos.splice(index, 1)
    listarVehiculos()
}

function cargarInformacion(index) {
    let vehiculo = vehiculos[index]
    vehiculoTemporal = index
    document.getElementById("placa").value = vehiculo.placa
    document.getElementById("color").value = vehiculo.color
    document.getElementById("tipo").value = vehiculo.tipo
    document.getElementById("marca").value = vehiculo.marca
    document.getElementById("ciudad").value = vehiculo.ciudad
    document.getElementById("fecha").value = vehiculo.dia
    document.getElementById("hora").value = vehiculo.hora

    document.getElementById("btnEntradaVehiculo").style.display = "none"
    document.getElementById("btnEditarVehiculo").style.display = "inline"
}




function limpiarFormulario() {

    document.getElementById("placa").value = ""
    document.getElementById("color").value = ""
    document.getElementById("marca").value = ""
    document.getElementById("ciudad").value = ""
    document.getElementById("tipo").value = ""
    document.getElementById("fecha").value = ""
    document.getElementById("hora").value = ""

    document.getElementById("btnEntradaVehiculo").style.display = "inline"
    document.getElementById("btnEditarVehiculo").style.display = "none"



    listarVehiculos()
}

function actualizarVehiculo() {
    let vehiculoactualizado = obtenerValores()
    vehiculos.splice(vehiculoTemporal, 1, vehiculoactualizado)
    limpiarFormulario()
    listarVehiculos()

    console.log(vehiculoactualizado)
}


listarVehiculos()