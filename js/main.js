
/*Consigna 2 */
 document.addEventListener('DOMContentLoaded', () => {

    console.log('Contenido del DOM cargado');

    /*Consigna 3 */

    let textareaOrigen = document.querySelector('textarea'); 

    textareaOrigen.value = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>'
    
    /*Consigna 4 */

    //botones superiores

    // selecciono input reemplazar

    let inputReemplazar = document.getElementById('btn-reemplazar')
    console.log(inputReemplazar)

    //clase btn-agregar
    let classBtnAgregar = document.getElementsByClassName('btn-agregar')
    console.log(classBtnAgregar)

    //selecciono inputs con clase btn-agregar

    let inputAgregar = document.getElementsByClassName('btn-agregar')[0]
    console.log(inputAgregar)

    let inputAgregar5 = document.getElementsByClassName('btn-agregar')[1]
    console.log(inputAgregar5)

    let inputAgregar10 = document.getElementsByClassName('btn-agregar')[2]
    console.log(inputAgregar10)

    let inputAgregarN = document.getElementsByClassName('btn-agregar')[3]
    console.log(inputAgregarN)

    //botones inferiores

    //selecciono input vaciar

    let inputVaciar = document.querySelector('.btn-vaciar')
    console.log(inputVaciar)

    //selecciono input mayusculas

    let inputMayusculas = document.querySelector('.btn-convertir-a-mayusculas')
    console.log(inputMayusculas)

    //selecciono button minusculas

    let btnMinusculas = document.querySelector('button')
    console.log(btnMinusculas)

    // cambio porpiedad disabled a false

    todosLosInput = document.querySelectorAll('input')
    console.log(todosLosInput)

    textareaOrigen.addEventListener('input', () => {
        todosLosInput.forEach(function(input){
            input.disabled = false; 
            btnMinusculas.disabled = false;   
        });
    });

    /*----- Ejemplo Maxi ----- */

    /* arrayColores = ['Rojo', 'Verde', 'Azul', 'Marrón', 'Violeta', 'Rosa', 'Amarillo']

    arrayColores.forEach(function(color) {
        console.log(color)
    }) */


    /*Consigna 5 */

    // selecciono div destino 

    let divDestino = document.querySelector('#destino')
    console.log(divDestino)

    // función reemplazar

    function btnReemplazar() {
        inputReemplazar.addEventListener ('click', () =>{
            divDestino.innerHTML = textareaOrigen.value
            textareaOrigen.value = ''
        } )
    }

    btnReemplazar()

    // función agregar

    function btnAgregar() {
        inputAgregar.addEventListener ('click', () =>{
            divDestino.innerHTML = textareaOrigen.value

        } )
    }

    btnAgregar()

    // función agregar 5

    function btnAgregar5() {
        inputAgregar5.addEventListener ('click', () =>{
            divDestino.innerHTML = textareaOrigen.value.repeat(5)

        } )
    }

    btnAgregar5()

     // función agregar 10

     function btnAgregar10() {
        inputAgregar10.addEventListener ('click', () =>{
            divDestino.innerHTML = textareaOrigen.value.repeat(10)

        } )
    }

    btnAgregar10()

     // función agregar N veces

     /* function btnAgregarN() {
        inputAgregarN.addEventListener ('click', () =>{
            divDestino.innerHTML = textareaOrigen.value.repeat()

        } )
    }

    btnAgregarN()

    let agregarPrompt = prompt('Indica la cantidad de veces que desee agregar el contenido')
 */

    /*Consigna 6 */

    // función vaciar

    function btnVaciar() {
        inputVaciar.addEventListener ('click', () =>{
            divDestino.innerHTML = ''

        } )
    }

    btnVaciar()

     // función Mayusculas

    function btnMayusculas() {
        inputMayusculas.addEventListener ('click', () =>{
            divDestino.innerHTML = divDestino.innerHTML.toUpperCase()

        } )
    }

    btnMayusculas()

    // función Minusculas

    function btnMin() {
        btnMinusculas.addEventListener ('click', () =>{
            divDestino.innerHTML = divDestino.innerHTML.toLowerCase()

        } )
    }

    btnMin()

    /*Consigna 7*/

    let listas = document.getElementsByTagName('li')
    console.log(listas)
    
  


    
    

    
 

   /*  let input = document.querySelectorAll('input').disabled = false
    console.log(input) 
    let button = document.querySelector('button').disabled = false

   /*Consigna 5 */

   /* let reemplazar = document.querySelector('#btn-reemplazar')
   console.dir(reemplazar) */

    }
) 
