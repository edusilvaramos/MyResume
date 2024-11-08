
// Função de Rolagem Suave
$(function() {
  // Seleciona todos os links de âncora (<a>) que possuem um "href" contendo "#", 
  // mas exclui aqueles com "href" exatamente igual a "#"
  $('a[href*="#"]:not([href="#"])').click(function() {

    // Verifica se o link leva para a mesma página (compara o caminho e o nome do host)
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        && location.hostname == this.hostname) {

      // Busca o elemento alvo com o ID que corresponde ao hash do link
      var target = $(this.hash);
      
      // Se não encontrar um ID correspondente, tenta encontrar um elemento com o atributo "name"
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      // Se o elemento alvo for encontrado
      if (target.length) {
        // Anima a rolagem suave para a posição do elemento alvo (scrollTop = posição vertical)
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000); // A rolagem dura 1000 milissegundos (1 segundo)

        // Impede o comportamento padrão do link (pular diretamente para o alvo)
        return false;
      }
    }
  });
});


