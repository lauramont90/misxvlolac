// Fecha objetivo (24 de noviembre)
const targetDate = new Date('2023-11-24 21:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = formatTime(days);
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Actualiza el contador cada segundo
setInterval(updateCountdown, 1000);

// Llama a la función para actualizar el contador inmediatamente
updateCountdown();
// Obtén una referencia al botón por su ID
const botonWhatsapp = document.getElementById("botonWhatsapp");
const botonGoogleMaps = document.getElementById("botonGoogleMaps");

// Agrega un manejador de eventos al botón
botonWhatsapp.addEventListener("click", function() {
    // URL de WhatsApp que deseas abrir
    const urlWhatsapp = "https://wa.me/+541124683994?text=Mi%20nombre%20y%20apellido%20es...%20Gracias%20por%20la%20invitación";

    // Redirige a la URL de WhatsApp
    window.open(urlWhatsapp, "_blank");
});
// Agrega un manejador de eventos al botón de Google Maps
botonGoogleMaps.addEventListener("click", function() {
    const urlGoogleMaps = "https://maps.app.goo.gl/RUQuJaD7oojoVfWX6";
    window.open(urlGoogleMaps, "_blank");
});