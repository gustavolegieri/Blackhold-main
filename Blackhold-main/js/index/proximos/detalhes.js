const jogos = document.querySelectorAll('.jogo');

    jogos.forEach(jogo => {
      jogo.addEventListener('click', () => {
        const detalhes = jogo.querySelector('.detalhes-jogo');
        if (!detalhes) return;

        if (detalhes.style.display === 'block') {
          detalhes.style.display = 'none';
        } else {
          jogos.forEach(j => {
            const d = j.querySelector('.detalhes-jogo');
            if (d) d.style.display = 'none';
          });
          detalhes.style.display = 'block';
        }
      });
    });