/**llamada de los objetos del html */
const tabla=document.querySelector(".tabla");
const ingresostotales=document.querySelector("#ingresos");

/*Variables globales*/
let acomulado=0;
/*llamada del json */
const enlace="inventario.json";
/*Extraccion de informacioon del json*/
function Extraccion()
{
    fetch (enlace)
        .then (response => response.json())
        .then (data => {
            data.forEach(item=>{LlenarTabla(item);
            IngresoTotal(item);
            }) 
            
        });
}

function LlenarTabla(data)
{
const renglon=document.createElement("tr");
const columna1=document.createElement("th");
const columna2=document.createElement("th");
const columna3=document.createElement("th");

columna1.textContent=data.Nombre;
columna2.textContent=data.vendidos;
columna3.textContent=data.vendidos*data.Precio;

/*ingreso de datos en la tabla*/
renglon.appendChild(columna1);
renglon.appendChild(columna2);
renglon.appendChild(columna3);
tabla.appendChild(renglon);

}

function IngresoTotal(data)
{
    acomulado+=data.Precio*data.vendidos;
    ingresostotales.textContent="$ "+ acomulado;
}


Extraccion();





