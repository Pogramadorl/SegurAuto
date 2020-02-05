//VARIABLES AUXILIARES FUERA DE FUNCIÓN

let x = 0;
let actual = 0;
let calculo = 0;


//PRECIO TOTAL


function precioTotal() {
    
    let marca = document.getElementById("marca").selectedIndex; //Recoger valor de la marca del coche

    //VARIABLES SIN INICIALIZAR

    let precioMarca;
    let precioSeguro;
    let precioFinal;
    let precioFinalDescuento;

    let descuento = document.getElementById("anos").selectedIndex; //Recoger valor del año seleccionado
    // console.log(descuento);
    let descuentoAplicado = descuento*3; //Valor del descuento a aplicar en el precio final
    // console.log(descuentoAplicado);


    //TODA LA ESTRUCTURA DE CÁLCULO ESTÁ EN UN SWITCH QUE SELECCIONA EN FUNCION DE LA MARCA ESCOGIDA
    //Y POSTERIORMENTE REALIZA TODAS LAS OPERACIONES
    switch(marca){
        case 0:
            alert("Seleccione una marca"); //En caso de que no seleccione ninguna marca
        break;

        case 1:
            
            marcaCoche = document.getElementsByTagName("option")[marca].value;    
            // alert("Ha seleccionado " + marcaCoche);
            precioMarca = 600*1.30; //Valor del seguro por marca
            // alert("El precio del seguro para esta marca es de " + precioMarca);

            //SELECCIONA EL VALOR DEL TIPO DE SEGURO
            if((document.querySelector("input[name=tipo]:checked").value)==1){
                alert("Ha seleccionado el seguro básico");
                precioSeguro = 600*1.30;
            }else{
                alert("Ha seleccionado el seguro completo");
                precioSeguro = 600*1.50;
            }

            // alert("El precio del seguro es de " + precioSeguro);

            precioFinal = precioMarca+precioSeguro; //SUMA EL PRECIO POR MARCA Y POR TIPO DE SEGURO
            // alert("El precio final sin descuento es de " + precioFinal);

            precioFinalDescuento = precioFinal-((precioFinal*descuentoAplicado)/100); //APLICA EL DESCUENTO DANDO COMO RESULTADO EL PRECIO FINAL
            // alert("El precio final con descuento es de " + precioFinalDescuento);

            //IMPRIMIR RESULTADO
            document.getElementById("resultado").innerHTML += `<h1>Precio final de su seguro:</h1>`+
            `<h3>`+precioFinalDescuento+` €</h3>` +`<h3>(Todos los descuentos han sido aplicados)</h3>`;


        break;

        case 2:

            // alert("Ha seleccionado " + document.getElementsByTagName("option")[marca].value);            
            precioMarca = 600*1.20;
            // alert("El precio del seguro para esta marca es de " + precioMarca);

            if((document.querySelector("input[name=tipo]:checked").value)==1){
                alert("Ha seleccionado el seguro básico");
                precioSeguro = 600*1.30;
            }else{
                alert("Ha seleccionado el seguro completo");
                precioSeguro = 600*1.50;
            }

            // alert("El precio del seguro es de " + precioSeguro);
            precioFinal = precioMarca+precioSeguro;

            // alert("El precio final sin descuento es de " + precioFinal);
            precioFinalDescuento = precioFinal-((precioFinal*descuentoAplicado)/100);
            // alert("El precio final con descuento es de " + precioFinalDescuento);

            document.getElementById("resultado").innerHTML += `<h1>Precio final de su seguro:</h1>`+
            `<h3>`+precioFinalDescuento+` €</h3>` +`<h3>(Todos los descuentos han sido aplicados)</h3>`;
                    
        break;

        case 3:

            // alert("Ha seleccionado " + document.getElementsByTagName("option")[marca].value);
            precioMarca = 600*1.10;
            // alert("El precio del seguro para esta marca es de " + precioMarca);

            if((document.querySelector("input[name=tipo]:checked").value)==1){
                alert("Ha seleccionado el seguro básico");
                precioSeguro = 600*1.30;
            }else{
                alert("Ha seleccionado el seguro completo");
                precioSeguro = 600*1.50;
            }

            // alert("El precio del seguro es de " + precioSeguro);
            precioFinal = precioMarca+precioSeguro;

            // alert("El precio final sin descuento es de " + precioFinal);
            precioFinalDescuento = precioFinal-((precioFinal*descuentoAplicado)/100);

            // alert("El precio final con descuento es de " + precioFinalDescuento);

            document.getElementById("resultado").innerHTML += `<h1>Precio final de su seguro:</h1>`+
            `<h3>`+precioFinalDescuento+` €</h3>` +`<h3>(Todos los descuentos han sido aplicados)</h3>`;
        
        break;
    }

}

//BUCLE PARA QUE EL SELECTOR DE AÑOS ESTÉ ACTUALIZADO CONFORME AL AÑO
//EN VIGOR Y SOLO PUEDA SELECCIONARSE HASTA 20 AÑOS ATRÁS

for(let i=20; i>=1; i--){

let añoActual = new Date();
actual = añoActual.getFullYear();

calculo = actual-x;

document.getElementById("anos").innerHTML += `<option value="${x}">`+ calculo +`</option>`;

x++;

}

