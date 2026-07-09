let currentImages = [];
let currentImageIndex = 0;

function openModal(title, description, price, imagesArray) {
    // Guardamos la lista de imágenes del producto actual
    currentImages = imagesArray;
    currentImageIndex = 0;

    // Asignamos textos
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = description;
    document.getElementById('modal-price').innerText = price;
    
    // Mostramos la primera imagen
    document.getElementById('modal-img').src = currentImages[currentImageIndex];

    // Ocultar o mostrar flechas si el producto solo tiene 1 foto
    const arrows = document.querySelectorAll('.carousel-arrow');
    if (currentImages.length <= 1) {
        arrows.forEach(arrow => arrow.style.display = 'none');
    } else {
        arrows.forEach(arrow => arrow.style.display = 'block');
    }

    // Configurar enlace de WhatsApp
    const phoneNumber = "584121234567"; // Pon aquí tu número de WhatsApp real
    const message = `Hola! Estoy interesado en el ${title} que cuesta ${price}. Me das más información?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    document.getElementById('btn-whatsapp').onclick = function() {
        window.open(whatsappUrl, '_blank');
    };

    // Mostrar ventana modal
    document.getElementById('product-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// Función para cambiar de imagen (adelante o atrás)
function changeImage(direction) {
    currentImageIndex += direction;

    // Si llega al final, vuelve al principio
    if (currentImageIndex >= currentImages.length) {
        currentImageIndex = 0;
    }
    // Si va hacia atrás del principio, va a la última foto
    if (currentImageIndex < 0) {
        currentImageIndex = currentImages.length - 1;
    }

    // Actualizar imagen en pantalla
    document.getElementById('modal-img').src = currentImages[currentImageIndex];
}
