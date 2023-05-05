var totalEgresos = 0;
var totalIngresos = 0;
var presupuesto = 0;
var porcentajeEgreso = 0;

let ingresos = [ new Ingreso ("Salario",     20000), 
                 new Ingreso ("Venta auto",  50000),
                 new Ingreso ("Intereses" ,    100)];

let egresos = [new Egreso ("Renta",   4000),
               new Egreso ("Ropa",     400),
               new Egreso ("Despensa",1800)];
       

// Función tipo flecha Cargar Cabero
const cargarCabecero = () => { 
    var totalEgresos = 0;
    var totalIngresos = 0;    
    // Función tipo flecha Total Ingresos
    const TotalIngresos  = ( ) =>
    console.log("Entre a Ingresos");

    for (let indice = 0; indice < (ingresos.length); indice++){
        totalIngresos = totalIngresos + ingresos[indice].valor;
        console.log("Ingresos:",ingresos[indice].valor);
    } 
        console.log("TotalIngresos:",totalIngresos);

    // Función tipo flecha Total Egresos    
    const TotalEgresos = ( ) =>
    console.log("Entre a Egresos");

    for (let indice = 0; indice < (egresos.length); indice++){
        totalEgresos = totalEgresos + egresos[indice].valor;
    } 
    console.log("TotalEgresos:",totalEgresos);

    presupuesto = totalIngresos - totalEgresos;
    porcentajeEgreso = totalEgresos / totalIngresos;

  
    document.getElementById("presu").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos);
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);

}

// Función tipo flecha para formato Tipo Moneda
const formatoMoneda = (numero) => {
    let formato = numero.toLocaleString("es-Es", {style:"currency", currency:"MXN"});
    return formato;
}

// Función tipo flecha para formato Porcentaje
const formatoPorcentaje = (numero) => {
    let formato = numero.toLocaleString("es-Es", {style:"percent",minimumFractionDigits: 2,
    maximumFractionDigits: 2,});
    return formato;
}

let cargarIngresos = ( ) => {
    console.log ("Entre a cargarIngresos");
    let ingresoHTML = " ";
    let crearIngresoHTML = (ingreso) => {
        let descripcion = document.getElementsByClassName("elemento_descripcion").innerHTML = `<div class = "elemento_descripcion">${ingreso.descripcion}</div>`;
        let valor = document.getElementsByClassName("elemento_valor").innerHTML = `<div class ="elemento_valor">${formatoMoneda(ingreso.valor)}</div>`;
        let icon = document.createElement("ion-icon");
        let icon1 = `<ion-icon name= "close_circle_outline">${icon.innerHTML = ""}</ion-icon>`;
        //let icon2 = `<button onclick = "eliminarIngreso(${eliminarIngreso(ingreso)})" class = "elemento_eliminar_btn">${icon1}</button>`
        let icon2 = `<button onclick = "eliminarIngreso(${ingreso})" class = "elemento_eliminar_btn">${icon1}</button>`
        let boton = `<div class = "elemento_eliminar">${icon2} </div>`
        let derecha = `<div class = "derecha limpiarEstilos">${valor} ${boton}</div>`;
        let ingresoHTML = `<div id="${ingreso.descripcion}" class = "elemento limpiarEstilos">${descripcion} ${derecha}</div>`;
        return ingresoHTML;
    }

    for (let ingreso of ingresos){
        ingresoHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById("lista-ingresos").innerHTML = ingresoHTML;
    return ingresoHTML
}

let cargarEgresos = ( ) => {
    console.log ("Entre a cargarEgresos");
    let egresoHTML = " ";
    let crearEgresoHTML = (egreso) => {
        let descripcion = document.getElementsByClassName("elemento_descripcion").innerHTML = `<div class = "elemento_descripcion">${egreso.descripcion}</div>`;
        let valor = document.getElementsByClassName("elemento_valor").innerHTML = `<div class ="elemento_valor">${formatoMoneda(egreso.valor)}</div>`;
        let porcentaje = document.getElementsByClassName("elemento_porcentaje").innerHTML = `<div class ="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalIngresos)}</div>`;
        let icon = document.createElement("ion-icon");
        let icon1 = `<ion-icon name= "close_circle_outline">${icon.innerHTML = ""}</ion-icon>`;
        //let icon2 = `<button onclick = "eliminarEngreso(${eliminarEgreso(egreso)})" class = "elemento_eliminar_btn">${icon1}</button>`
        let icon2 = `<button onclick = "eliminarEngreso(${egreso})" class = "elemento_eliminar_btn">${icon1}</button>`
        let boton = `<div class = "elemento_eliminar">${icon2} </div>`
        let derecha = `<div class = "derecha limpiarEstilos">${valor}${porcentaje} ${boton}</div>`;
        let egresoHTML = `<div id="${egreso.descripcion}" class = "elemento limpiarEstilos">${descripcion}${derecha}</div>`;
        //console.log(egresoHTML);
        return egresoHTML;
    }

    for (let egreso of egresos){
        egresoHTML += crearEgresoHTML(egreso);
    }
    document.getElementById("lista-egresos").innerHTML = egresoHTML;
    return egresoHTML
}


let agregarDato = () => {

    //let tipo = document.querySelector("#forma .agregar_tipo" ).value;
    //let descripcion = document.querySelector("#forma .agregar_descripcion").value;
    //let valor= document.querySelector("#forma .agregar_valor").value; 
    const tipo = forma.tipo.value; 
    const descripcion = forma.descripcion.value; 
    const valor = parseFloat(forma.querySelector('.agregar_valor').value);
    
       if(descripcion != " " && valor !== " "){
            if (tipo=== "ingreso") {
                ingresos.push(new Ingreso(descripcion,valor));
                cargarCabecero();
                cargarIngresos();
                
            } else if (tipo === "egreso"){
                egresos.push(new Egreso(descripcion,valor));
                cargarCabecero();
                cargarEgresos();
            }                   
            limpiar();
            }
        }

 
let eliminarEgreso = (id) => {
        let indiceEliminar = egresos.findIndex(egreso => egreso.id === id );
        egresos.splice(indiceEliminar,1);
        //limpiar();
        //cargarCabecero();
        //cargarEgresos();
        }

let eliminarIngreso = (id) => {
        let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id );
        ingresos.splice(indiceEliminar,1);
        //limpiar();
        //cargarCabecero();
        //cargarIngresos();
        }


const limpiar = () => {
    var totalEgresos = 0;
    var totalIngresos = 0;
    var presupuesto = 0;
    var porcentajeEgreso = 0;
    forma.reset();
    return false;

}

    function cargarApp(){
             cargarCabecero();
             cargarIngresos();
             cargarEgresos();
             limpiar();
    }