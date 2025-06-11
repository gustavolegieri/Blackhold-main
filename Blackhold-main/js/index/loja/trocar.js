    function trocarImagem(id, novaImagem) {
      document.getElementById(id).src = novaImagem;
    }

    function avaliar(container) {
      const estrelas = container.querySelectorAll("i");
      estrelas.forEach((estrela, index) => {
        estrela.addEventListener("click", () => {
          estrelas.forEach((e, i) => {
            e.classList.toggle("fas", i <= index);
            e.classList.toggle("far", i > index);
          });
        });
      });
    }

    document.querySelectorAll('.estrelas').forEach(avaliar);