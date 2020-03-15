
let vehiculos = []
let vehiculoTemporal = null

function obtenerValores() {
    let placa = document.getElementById("placa").value.toUpperCase()
    let color = document.getElementById("color").value
    let marca = document.getElementById("marca").value
    let ciudad = document.getElementById("ciudad").value
    let tipo = document.getElementById("tipo").value
    let dia = document.getElementById("fecha").value
    let hora = document.getElementById("hora").value



    let miVehiculo = { placa, color, marca, ciudad, tipo, dia, hora }
    return miVehiculo
}


function crearVehiculo() {
    let vehiculo = obtenerValores()
    let existevehiculo = vehiculos.find(x => vehiculo.placa === x.placa)
    console.log(existevehiculo)
    console.log(vehiculo.placa)

    if (existevehiculo) {
        window.alert('El vehiculo ya esta Ingresado');
        console.log('El vehiculo ya esta Ingresado');
        return;

    } else {

        vehiculos.push(vehiculo)
        listarVehiculos()
        addlocalstorage(vehiculos)
        
    }

    limpiarFormulario()

    
    
}

function addlocalstorage(lista1){
    localStorage.setItem("datos",JSON.stringify(lista1))
}
function getlocalstorage(){
    let objeto=JSON.parse(localStorage.getItem("datos"))

    if(objeto==null){
        vehiculos=[]
    }else{
        vehiculos=objeto
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
        data += `<td><button type="button" onclick="cargarInformacion(${i},${miVehiculo.placa})" class="btn btn-primary btn-sm">Editar</button> </td>`
        data += '<td><button type="button" onclick="eliminarVehiculo(' + i + ')" class="btn btn-primary btn-sm">Eliminar</button> </td>'
        data += `<td><button type="button" onclick="darsalida(${i})" class="btn btn-primary btn-sm">Dar salida</button> </td>`
        data += "</tr>"
    }
    lista.innerHTML = data;
    
}
function darsalida(i) {

    let fechaSalida = new Date()
    let fechaingreso=(vehiculos[i].dia+" "+vehiculos[i].hora)
    let fecha1 = moment(fechaingreso, "YYYY-MM-DD HH:mm:ss");
    let fecha2 = moment(fechaSalida, "YYYY-MM-DD HH:mm:ss");
    let diffminutes = fecha2.diff(fecha1, 'minutes'); // obtengo la diferencia de minutos entre 2 fechas dia/mes/año hora:minutos
    let horas = Math.ceil(diffminutes/60) 
    
    let valor=0;
    let tipo=vehiculos[i].tipo.toUpperCase()

    if(tipo==="CARRO"){
        valor=8000
        console.log("es un CARRO",valor)
    }
    if(tipo==="MOTO"){
        valor=4000
        console.log("es una MOTO ",valor)
    }
    if(tipo==="CAMION"){
        valor=21000
        console.log("es un CAMION",valor)
    }
    if(tipo==="BICICLETA"){
        valor=2000
        console.log("es una BICICLETA",valor)
    }

    let valorPagar=horas*valor
    window.alert("la fraccion de hora se toma como hora completa,Este vehiculo estuvo: "+horas+" horas y debe pagar: "+valorPagar+" pesos");

    eliminarVehiculo(i)
    

}

function eliminarVehiculo(index) {
    vehiculos.splice(index, 1)
    addlocalstorage(vehiculos)
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
    
    let vehiculo = obtenerValores()
    let placa=vehiculo.placa
    let existevehiculo = vehiculos.find(x => vehiculo.placa === x.placa)


    if(existevehiculo){

        window.alert("la placa de este vehiculo ya esta ingresada, no se puede repetir");
    }else{
        let vehiculoactualizado = obtenerValores()
        vehiculos.splice(vehiculoTemporal, 1, vehiculoactualizado)
        addlocalstorage(vehiculos)
        listarVehiculos()
        limpiarFormulario()
    }
        
    
}

getlocalstorage()



