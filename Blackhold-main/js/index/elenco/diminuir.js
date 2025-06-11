 document.querySelectorAll('h2').forEach(titulo => {
    titulo.style.cursor = 'pointer';
    titulo.onclick = () => {
      let conteudo = titulo.nextElementSibling;
      if (!conteudo) return;
      conteudo.style.display = conteudo.style.display === 'none' ? '' : 'none';
    }
  });