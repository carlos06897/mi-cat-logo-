let currentImages = [];
let currentImageIndex = 0;

function openModal(title, description, price, imagesArray) {
    currentImages = imagesArray;
    currentImageIndex = 0;

    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = description;
    document.getElementById('modal-price').innerText = price;
    
    document.getElementById('modal-img').src = currentImages[currentImageIndex];

    const arrows = document.querySelectorAll('.carousel-arrow');
    if (currentImages.length <= 1) {
        arrows.forEach(arrow => arrow.style.display = 'none');
    } else {
        arrows.forEach(arrow => arrow.style.display = 'block');
    }

    const phoneNumber = "584121234567"; // Tu número real de WhatsApp aquí
    const message = `Hola! Estoy interesado en el ${title} que cuesta ${price}. Me das más información?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    document.getElementById('btn-whatsapp').onclick = function() {
        window.open(whatsappUrl, '_blank');
    };

    document.getElementById('product-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex >= currentImages.length) {
        currentImageIndex = 0;
    }
    if (currentImageIndex < 0) {
        currentImageIndex = currentImages.length - 1;
    }

    document.getElementById('modal-img').src = currentImages[currentImageIndex];
}

/* NUEVAS FUNCIONES PARA EXPANDIR LA IMAGEN */
function zoomImage() {
    // Agarramos la foto que se esté mostrando actualmente en el carrusel
    const currentSrc = document.getElementById('modal-img').src;
    
    // Se la pasamos al contenedor de pantalla completa y lo mostramos
    document.getElementById('zoom-img').src = currentSrc;
    document.getElementById('zoom-modal').style.display = 'flex';
}

function closeZoom() {
    // Cerramos el modo pantalla completa
    document.getElementById('zoom-modal').style.display = 'none';
}
