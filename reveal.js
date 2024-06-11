window.revelar = ScrollReveal({reset:true})
/*Efeito pagina inicial (destaques)*/ 
revelar.reveal('.efeito-txt-pagInicital', {
  duration:2000, 
  distance:'90px'   
} ) 
revelar.reveal('.efeito-reveal-destaques', {
  duration:2000, 
  distance:'100px',  
  delay:500
} ) 


// Topo da apresentação//
revelar.reveal('.efeito-img-apto', {
   duration:2000, 
   distance:'90px'   
} ) 
revelar.reveal('.efeito-txt-apto', {
  duration:2000, 
  distance:'90px', 
  delay: 500
} ) 
revelar.reveal('.efeito-ficha-tec', {
  duration:2000, 
  distance:'90px', 
  delay: 500
} ) 
/*Ativar o menu */ 

const links = document.querySelectorAll(".nav-menu a");

function ativarLink(link){
  const url = location.href;
  const href = link.href; 
  if(url.includes(href)){
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

/*----------- Menu hamburger ---------------*/ 
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);





