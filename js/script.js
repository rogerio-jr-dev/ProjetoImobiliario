// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona a imagem principal
    const mainImage = document.getElementById('main-image');
  
    // Seleciona todas as miniaturas
    const thumbnails = document.querySelectorAll('.thumbnail');
  
    // Adiciona um evento de clique a cada miniatura
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        // Troca o src da imagem principal com o src da miniatura clicada
        let tempSrc = mainImage.src;
        mainImage.src = thumbnail.src;
        thumbnail.src = tempSrc;
      });
    });
  });
  