const submitFunction = (event) => {
    if(!validarFormulario()){
        event.preventDeFault();
    }else{


        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n' +
            'Apellido: ' + document.getElementById('apellido').value + '\n' +
            'Documento: ' + document.getElementById('documento').value + '\n' +
            'Email: ' + document.getElementById('email').value + '\n' +
            'Edad: ' + document.getElementById('edad').value + '\n' +
            'Actividad: ' + document.getElementById('actividad').value + '\n' +
            'Nivel de estudio: ' + document.getElementById('nivel de estudio').value + '\n' 
            
        )
    }

}

document.getElementById('formulario').addEventListener('submit', submitFunction) // Escucha el envio de formulario


function validarFormulario(){

    //Esto valida los campos de texto
    const camposTexto = document.querySelectorAll(ìnput[type="text"])
    let valiacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(i)) // error + id con la primera en mayuscula
        if(campo.value.length == ``) {
            mostrarError(errorCampo, `¡Este campo es requerido!`);
            valiacionCorrecta = false
        }else if(campo.value.length < 3){
            mostrarError(errorCampo, `¡Este campo debe tener al menos 3 caracteres!`);
                valiacionCorrecta = false;
        }else{
                ocultarError(errorCampo);
        }
        
    })

    //Esto valida el campo email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail')

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){  //Este regex valida que el formato del email sea valido
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail, '¡Ingrese un correo electronico valido!')
    }
    
    //Validacion de edad

    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('Erroredad')

    if(edad.value < 18){
        mostrarError(errorEdad, '¡Debes ser mayor de 18 años para registrarte')
        valiacionCorrecta = false
    } else{
        ocultarError(errorEdad)
    }

    //Validacion de la actividad
    const actividad = document.getElementById('actividad')
    const errorActividad = document.getElementById('errorActividad')
 
    if(actividad.value == ''){
        mostrarError(errorActividad, 'Por favor, seleccione una actividad')
        validacionCorrecta = false;
    }else {
        ocultarError(errorActividad)
    }



    //Validacion de nivel estudio
    const nivelEstudio = document.getElementById('nivelEstudio')
    const errorNivelEstudio = document.getElementById('errorNivelEstudio')

    if(nivelEstudio.value == ''){
        mostrarError(errorNivelEstudio, 'Por favor, selecciona un nivel de estudio')
        validacionCorrecta = false;
    }else {
        ocultarError(errorNivelEstudio)
    }



    // Validar los terminos y condiciones

    const aceptoTerminos = document.getElementById('aceptoTerminos')
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos')


    if(!aceptoTerminos.checked) {
        mostrarError(errorAceptoTerminos,'Debes aceptar los terminos y condiciones!')
        validacionCorrecta = false;
    }else {
        ocultarError(errorAceptoTerminos)
    }

    return valiacionCorrecta  //Esto dira si el formulario completo es o no valido
}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";

}

const ocultarError = (elemento) => {
    elemento.textContent = ``;
    elemento.style.display = "none";

}