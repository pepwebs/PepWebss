document.getElementById('hamburger-icon').addEventListener('click', function() {
    const menu = document.querySelector('ul.menu');
    menu.classList.toggle('show'); // Alternar la clase 'show' para abrir/cerrar el menú
});


// Obtener el formulario y el contenedor de mensajes
const form = document.getElementById('contact-form');
const statusMessage = document.getElementById('form-status');

// Prevenir el envío por defecto del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío normal del formulario

    const formData = new FormData(form);

    // Usar Fetch API para enviar los datos del formulario a Netlify Forms
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Mostrar mensaje de éxito
            statusMessage.innerHTML = '<p>¡Formulario enviado con éxito! Nos pondremos en contacto pronto.</p>';
            statusMessage.style.color = 'green';
            form.reset(); // Resetea el formulario
        } else {
            throw new Error('Hubo un problema al enviar el formulario');
        }
    })
    .catch(error => {
        // Mostrar mensaje de error
        statusMessage.innerHTML = `<p>Ocurrió un error: ${error.message}</p>`;
        statusMessage.style.color = 'red';
    });
});
