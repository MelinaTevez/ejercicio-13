
 /*---------------Consigna 2 ------------*/

 document.addEventListener('DOMContentLoaded', () => {

    console.log('Contenido del DOM cargado');

    /*---------------Consigna 3 ------------*/

    let textareaOrigen = document.querySelector('textarea'); 

    textareaOrigen.value = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>'
    
     /*---------------Consigna 4 ------------*/

    // cambio porpiedad disabled a false

    todosLosInput = document.querySelectorAll('input')
    console.log(todosLosInput)

    textareaOrigen.addEventListener('input', () => {
        todosLosInput.forEach(function(input){
            input.disabled = false; 
            btnMinusculas.disabled = false;   
        });
    });

     /*---------------Consigna 5 ------------*/

    // selecciono div destino 

    let divDestino = document.querySelector('#destino')
    console.log(divDestino)

    
    // función reemplazar
    // selecciono input reemplazar
    
    let inputReemplazar = document.getElementById('btn-reemplazar')
    console.log(inputReemplazar)
    
    function btnReemplazar() {
        inputReemplazar.addEventListener ('click', () =>{
            divDestino.innerHTML = textareaOrigen.value
            textareaOrigen.value = ''
        } )
    }

    btnReemplazar()

    // función agregar

    //selecciono inputs con clase btn-agregar

    let inputAgregar = document.getElementsByClassName('btn-agregar')[0]
    console.log(inputAgregar)

    function btnAgregar() {
        inputAgregar.addEventListener ('click', () =>{
            divDestino.innerHTML = textareaOrigen.value

        } )
    }

    btnAgregar()

    // función agregar 5

    let inputAgregar5 = document.getElementsByClassName('btn-agregar')[1]
    console.log(inputAgregar5)

    function btnAgregar5() {
        inputAgregar5.addEventListener ('click', () =>{
            divDestino.innerHTML = textareaOrigen.value.repeat(5)

        } )
    }

    btnAgregar5()

     // función agregar 10

     let inputAgregar10 = document.getElementsByClassName('btn-agregar')[2]
    console.log(inputAgregar10)


     function btnAgregar10() {
        inputAgregar10.addEventListener ('click', () =>{
            divDestino.innerHTML = textareaOrigen.value.repeat(10)

        } )
    }

    btnAgregar10()

     // función agregar N veces

     let inputAgregarN = document.getElementsByClassName('btn-agregar')[3]
    console.log(inputAgregarN)

     /* function btnAgregarN() {
        inputAgregarN.addEventListener ('click', () =>{
            divDestino.innerHTML = textareaOrigen.value.repeat()

        } )
    }

    btnAgregarN()
 */

    /*---------------Consigna 6 ------------*/

    // función vaciar
    //selecciono input vaciar

    let inputVaciar = document.querySelector('.btn-vaciar')
    console.log(inputVaciar)

    function btnVaciar() {
        inputVaciar.addEventListener ('click', () =>{
            divDestino.innerHTML = ''

        } )
    }

    btnVaciar()

     // función Mayusculas
     //selecciono input mayusculas

    let inputMayusculas = document.querySelector('.btn-convertir-a-mayusculas')
    console.log(inputMayusculas)

    function btnMayusculas() {
        inputMayusculas.addEventListener ('click', () =>{
            divDestino.innerHTML = divDestino.innerHTML.toUpperCase()

        } )
    }

    btnMayusculas()

    // función Minusculas
    //selecciono button minusculas

    let btnMinusculas = document.querySelector('button')
    console.log(btnMinusculas)
    
    function btnMin() {
        btnMinusculas.addEventListener ('click', () =>{
            divDestino.innerHTML = divDestino.innerHTML.toLowerCase()

        } )
    }

    btnMin()

     /*---------------Consigna 7 ------------*/

   let listas = document.getElementsByTagName('li')
   console.log(listas)

  /*  listas.forEach(function(li) {
       console.log(color)

   })  */


    }
) 
