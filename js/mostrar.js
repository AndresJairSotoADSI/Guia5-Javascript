addEventListener("DOMContentLoaded", () => {
    btn1.addEventListener("click", () => {
        document.querySelector("#Ejercicio1").style.display = "block";
        document.querySelector("#Ejercicio2").style.display = "none";
        document.querySelector("#Ejercicio3").style.display = "none";
    });
    btn2.addEventListener("click", () => {
        document.querySelector("#Ejercicio1").style.display = "none";
        document.querySelector("#Ejercicio2").style.display = "block";
        document.querySelector("#Ejercicio3").style.display = "none";
    });
    btn3.addEventListener("click", () => {
        document.querySelector("#Ejercicio1").style.display = "none";
        document.querySelector("#Ejercicio2").style.display = "none";
        document.querySelector("#Ejercicio3").style.display = "block";
        
    });
    pizzaElegir.addEventListener("click", (e) => {
        e.preventDefault;
        let clasepizza = document.querySelector("#clasepizza")
        if (clasepizza.value == 1) {
            document.querySelector("#imgpizza").style.display = "block";
            document.querySelector("#pizzacencilla").style.display = "none";
            document.querySelector("#pizzaespecial").style.display = "none";
        }
        /*#################        SENCILLA            ######################*/
        let Ejercicio3 = document.querySelector("#form_3");
        if (clasepizza.value == 2) {
            document.querySelector("#imgpizza").style.display = "none";
            document.querySelector("#pizzacencilla").style.display = "block";
            document.querySelector("#pizzaespecial").style.display = "none";
            Ejercicio3.addEventListener("submit", (e) => {
                e.preventDefault();
                let data = Object.fromEntries(new FormData(e.target));
                let valor1 = Number(data.valor_1);
                let valor2 = Number(data.valor_2);
                let valor3 = Number(data.valor_3);
                console.log(valor1);
                let val1 = 40000 * valor1;
                let val2 = 25000 * valor2;
                let val3 = 15000 * valor3;
                let suma = val1 + val2 + val3;
        
                document.querySelector("#respizzas").insertAdjacentHTML("beforeend", "La suma total es: " + suma);
            })

        }
        /*#################  ESPECIAL     ######################*/
        let Ejercicio31 = document.querySelector("#form_31");
        if (clasepizza.value == 3) {
            document.querySelector("#imgpizza").style.display = "none";
            document.querySelector("#pizzacencilla").style.display = "none";
            document.querySelector("#pizzaespecial").style.display = "block";
            Ejercicio31.addEventListener("submit", (e) => {
                e.preventDefault();
                let data = Object.fromEntries(new FormData(e.target));
                let valor1 = Number(data.valor_1);
                let valor2 = Number(data.valor_2);
                let valor3 = Number(data.valor_3);
                let val1 = 40000 * valor1;
                let val2 = 25000 * valor2;
                let val3 = 15000 * valor3;
                let suma = val1 + val2 + val3;
        
                document.querySelector("#respizzas").insertAdjacentHTML("beforeend", "La suma total es: " + suma);
            })
            
        }
    })
    document.querySelector('.box-juntas1,.box-juntas').addEventListener("click", (e)=>{
        if(e.target.nodeName == "INPUT"){
            e.target.addEventListener("keyup", (e)=>{
                if(Number(e.target.value)){
                    document.querySelectorAll("#respizzae span")[e.target.dataset.id].innerHTML = `<b data-total="${e.target.dataset.precio * e.target.value}">${e.target.dataset.nombre} </b> ${e.target.value}U/n  $${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(e.target.dataset.precio * e.target.value)}`;
                }else{
                    document.querySelectorAll("#respizzae span")[e.target.dataset.id].innerHTML = "";
                }
                
            })
        }
        // input[type="number"]
    })
    let observer = new MutationObserver(e => {
        let list = document.querySelectorAll("#respizzae div span");
        let total = 0;
        list.forEach(element => {
            try {
                total += Number(element.children[0].dataset.total);
            } catch (error) {
                total += 0;
            }
        });
        document.querySelectorAll("#respizzae span")[3].innerHTML = `<b>Total a pagar:</b> $${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(total)}`
      });
      observer.observe(document.querySelector("#respizzae div"), {
        childList: true,
        subtree: true,
        characterData: true 
      });
    // document.querySelector('input').addEventListener("focus", (e)=>{
    //     console.log(e.target);
    // })
})