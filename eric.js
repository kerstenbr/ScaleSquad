var navbar = document.getElementById('navbar');
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos > 0) {
    navbar.style.display = 'flex'; // Mostra a barra de navegação ao sair do topo da tela
  } else {
    navbar.style.display = 'none'; // Esconde a barra de navegação quando no topo da página
  }
  
  prevScrollpos = currentScrollPos;
}