addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    //######################################### Ejercicio 1 #########################################//
    let Ejercicio1 = document.querySelector("#form_1");
    let mensaje1 = document.querySelector("#mensaje1")
    mensaje1.addEventListener("click",()=> {
        Swal.fire(
            'Ejercicio 1',
            'Escribe la tabla de multiplicar de un numero N positivo usaremos el bucle for para saber el rango deseado este ejercicio zse efectuara con la multiplicacion',
        )
    })
    Ejercicio1.addEventListener("submit",(e)=>{
        e.preventDefault();
        let numero = Number(document.querySelector("#NumMultiplicar").value);
        document.querySelector("#form_1").reset();
        document.querySelector("#Table_multi").innerHTML = "";
        let cont = 11;
        for (let i = 1; i < cont; i++) {
            let resultado = numero * i;
            let plantilla = `
            <tr>
               <td>${numero}</td>
               <td>${i}</td>
               <td>${resultado}</td>
            </tr>
            `;
            document.querySelector("#Table_multi").insertAdjacentHTML("beforeend", plantilla);
        }
    })
    //######################################### Ejercicio 2 #########################################//
    let ejercicio2 = document.querySelector("#form2");
    let menssje2 = document.querySelector("#mensaje2");
    let Limpiar2 = document.querySelector("#limpiar2");
    let resultado2=document.querySelector("#res2")
    menssje2.addEventListener("click",()=>{
        Swal.fire(
            'Ejercicio 2',
            'Crear un programa que permita al usuario ingresar los montos de las compras de un cliente (se desconoce la cantidad de datos que cargará, la cual puede cambiar en cada ejecución),cortando el ingreso de datos cuando el usuario ingrese el monto 0. Si ingresa un monto negativo, no se debe procesar y se debe pedir que ingrese un nuevo monto. Al finalizar, informar el total a pagar teniendo que cuenta que, si las ventas superan el total de $10000, se le debe aplicar un 10% de descuento.analizando el problema usaremos un  bucle for para saber lo que sucedera acontinuacion',
        )
    })
    Limpiar2.addEventListener("click",()=>{

        document.querySelector("#form2").reset();
        documento.querySelector("#Ventas").innerHTML = "";

    })
    ejercicio2.addEventListener("submit",(e)=>{
        e.preventDefault();

        function Pago(valorproducto) {
            this.valorproducto = valorproducto;
        }
        let valorinproduct = Number(document.querySelector("#valorproducto").value);
        datosProducto = new Pago(valorinproduct);
        AgregarProducto();
    })

    let productobase = [];
    let productobase2 = [];
    let descuento = 0;
    let suma=0;
    let total_iva=0;
    let totalcon_iva=0;
    let totalcoo_descuento = 0;

    function AgregarProducto() {
        productobase.push(parseInt(datosProducto))
        if (datosProducto.valorproducto > 0) {
            document.querySelector("#Ventas").innerHTML += '<tbody><td>' + productobase.length + '</td><td>' + datosProducto.valorproducto + '</td> <td>' + "16%" + '</td></tbody>';
            productobase2.push(datosProducto.valorproducto)
            suma+= datosProducto.valorproducto
            total_iva = suma * 0.16;
            totalcon_iva = suma + total_iva
            descuento = suma * 0.15;
            totalcoo_descuento = suma - descuento;
            if (suma>500){
                resultado2.innerHTML = `Total de productos: ${productobase.length }total de compras ${ suma } total iva ${ total_iva } total con iva ${ totalcon_iva } descuento 15% ${ descuento } total con descuento ${ totalcoo_descuento } `
            } else {
                resultado2.innerHTML = `Total de productos: ${productobase.length } total de compras ${ suma } total iva ${ total_iva } total con iva ${ totalcon_iva } descuento 0% `
            }
        }
    }
    //######################################### Ejercicio 3 #########################################//
    let mensaje3 = document.querySelector("#mensaje3");
    mensaje3.addEventListener("click", () => {
        Swal.fire(
            'Ejercicio 3',
            'Una pizzería, vende sus pizzas en tres tamaños: Pequeña (10 pulga. De diámetro); mediana (12 pulg. De diámetro); y grandes (16 pulg. De diámetro); Una pizza puede ser sencilla (con sólo salsa y carne), o con ingredientes extras, tales como pepinillos, champiñones o cebollas. Los propietarios desean desarrollar un programa que calcule el precio de venta de una pizza, dándole el tamaño y el número de ingredientes extras. El precio de venta será 1.5 veces el costo total, que viene determinado por el área de la pizza, más el número de ingredientes.• En particular el costo total se calcula sumando:• Un costo fijo de preparación• Un costo base variable que es proporcional al tamaño de la pizza',
        )
    })
    //######################################### Ejercicio 4 #########################################//
});