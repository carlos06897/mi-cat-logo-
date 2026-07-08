function openModal(title, description, imgSrc) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = description;
    document.getElementById('modal-img').src = imgSrc;
    
    // Cambia el diseño a flex para que se muestre en pantalla
    document.getElementById('product-modal').style.display = 'flex';
}

function closeModal() {
    // Vuelve a ocultar la ventana flotante
    document.getElementById('product-modal').style.display = 'none';
}
