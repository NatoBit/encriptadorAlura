const botonEncriptar = document.getElementById('boton__encriptar');
const botonDesencriptar = document.getElementById('boton__desencriptar');
const botonCopiar = document.getElementById('boton__copiar');
const mensajeEncriptado = document.getElementById('mensajeEncriptado');
const areaTexto = document.getElementById('cuerpo__general__mensaje');

showSection('estandar');

// Función para actualizar el contenido de la barra lateral
botonEncriptar.addEventListener('click', function() {
    // Obtiene el texto del textarea
    const mensaje = areaTexto.value;
    
    // Si el textarea tiene texto, actualiza el contenido de la barra lateral
    if (mensaje.trim()) {
        
        if (verificarTexto(mensaje)) {
            if (mensaje == mensaje.toLowerCase()) {
                showSection('encriptado')

                textoEncriptado = encriptarTexto(mensaje)

                mensajeEncriptado.innerHTML = `${textoEncriptado}`;

                botonCopiar.addEventListener('click', function() {  
                    navigator.clipboard.writeText(textoEncriptado)
                });
            } else {
                alert('El texto debe estar en minúsculas.');
            }
        } else {
            alert('El texto no debe contener caracteres especiales ni números.');
        }
    } else {
        alert('Por favor, ingresa texto en el área de texto.');
    }

});

botonDesencriptar.addEventListener('click', function() {
    const mensaje = areaTexto.value;
    
    if (mensaje.trim()) {
        
        if (verificarTexto(mensaje)) {
            if (mensaje == mensaje.toLowerCase()) {
                showSection('encriptado')

                textoDesencriptado = desencriptarTexto(mensaje)

                mensajeEncriptado.innerHTML = `${textoDesencriptado}`;

                botonCopiar.addEventListener('click', function() {  
                    navigator.clipboard.writeText(textoDesencriptado)
                });
            } else {
                alert('El texto debe estar en minúsculas.');
            }
        } else {
            alert('El texto no debe contener caracteres especiales ni números.');
        }

    } else {
        alert('Por favor, ingresa el texto a desencriptar.');
    }

});

function showSection(sectionId) {
    // Ocultar todas las secciones
    var sections = document.querySelectorAll('.barra__lateral__contenido');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    var activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');

}

function verificarTexto(texto) {
    // Expresión regular para permitir solo letras sin acentos, números y espacios
    const regex = /^[a-zA-Z\s]*$/;

    if (regex.test(texto)) {
        return true; 
    } else {
        return false;
    }
}

function encriptarTexto(texto) {
    let textoEncriptado = texto
        // Las barras inclinadas /.../ delimitan el patrón de la expresión regular.
        // La bandera g le dice al motor de búsqueda que debe reemplazar o buscar todas las coincidencias en el texto, no solo la primera.
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}