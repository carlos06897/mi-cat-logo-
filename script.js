const MI_TELEFONO = "584129778779"; 

function openModal(title, description, price, imgSrc) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = description;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('modal-img').src = imgSrc;
    
    const botonWA = document.getElementById('btn-whatsapp');
    const mensaje = encodeURIComponent(`Hola, estoy interesado en el producto: ${title} (${price}). ¿Tiene disponibilidad?`);
    botonWA.onclick = function() {
        window.open(`https://wa.me/${MI_TELEFONO}?text=${mensaje}`, '_blank');
    };
    
    document.getElementById('product-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}
