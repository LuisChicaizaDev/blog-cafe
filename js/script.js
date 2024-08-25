//EVENTOS DE LOS INPUT Y TEXTAREA
//creamos un objeto
const datos = {
    nombre : '',
    email : '',
    mensaje : ''
}
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto );

email.addEventListener('input', leerTexto);

mensaje.addEventListener('input', leerTexto);


//EVENTO DE SUBMIT- en los formularios
formulario.addEventListener('submit', function(e){
    e.preventDefault();
   
    //Validar Formulario
    //Destructuring - Desestructuración
    const {nombre, email, mensaje} = datos; //Las variables vienen del OBJETO datos
 
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true);

        return; //Corta la ejecución del código
    }

    //Enviado correctamente
    mostrarAlerta('Mensaje enviado correctamente');

});


function leerTexto(e){
    //console.log(e.target.value); //Value es el valor de lo q el usuario escribe

    datos[e.target.id] = e.target.value;

    // console.log(datos);
}


function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('exito');
    }

    formulario.appendChild(alerta);
     //Desaparezca el msj despues de 3segundos
     setTimeout(() => {
        alerta.remove(); //Elimina un elemento HTML
    }, 3000);

}
