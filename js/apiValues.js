fetch("http://192.168.15.98:5000")
  .then(function (response) {
    // Check if the request was successful (status code 200)
    if (response.ok) {
      return response.json();
      // Parse the JSON in the response
      // console.log(response.json());
    }
  })
  .then(function (data) {
    // Certifique-se de que 'data' é um array
    if (Array.isArray(data) && data.length > 0) {
      // Acessar o primeiro objeto no array (supondo que só haja um objeto no array)
      var primeiroObjeto = data[0];

      // Atualizar os valores nos elementos HTML
      document.querySelector(".tensao").innerText = primeiroObjeto.tensao;
      document.querySelector(".tensaoF1").innerText = primeiroObjeto.tensao_f1;
      document.querySelector(".tensaoF2").innerText = primeiroObjeto.tensao_f2;
      document.querySelector(".tensaoF3").innerText = primeiroObjeto.tensao_f3;

      document.querySelector(".corrente").innerText = primeiroObjeto.corrente;
      document.querySelector(".corrente1").innerText =
        primeiroObjeto.corrente_f1;
      document.querySelector(".corrente2").innerText =
        primeiroObjeto.corrente_f2;
      document.querySelector(".corrente3").innerText =
        primeiroObjeto.corrente_f3;

      document.querySelector(".ativa").innerText =
        primeiroObjeto.potencia_ativa;
      document.querySelector(".ativa1").innerText =
        primeiroObjeto.potencia_ativa_f1;
      document.querySelector(".ativa2").innerText =
        primeiroObjeto.potencia_ativa_f2;
      document.querySelector(".ativa3").innerText =
        primeiroObjeto.potencia_ativa_f3;

      document.querySelector(".reativa").innerText =
        primeiroObjeto.potencia_reativa;
      document.querySelector(".reativa1").innerText =
        primeiroObjeto.potencia_reativa_f1;
      document.querySelector(".reativa2").innerText =
        primeiroObjeto.potencia_reativa_f2;
      document.querySelector(".reativa3").innerText =
        primeiroObjeto.potencia_reativa_f3;
    }
    function atualizarValores(limite) {
      let circularProgressList = document.querySelectorAll(
        ".box-circle-progress"
      );

      if (circularProgressList.length == 0) {
        console.error("Nenhum elemento .box-circle-progress encontrado");
        return;
      }

      let valoresFinais;
      let elementos = [
        { start: 0, end: primeiroObjeto.fp_circuito },
        { start: 0, end: primeiroObjeto.fP_fase1 },
        { start: 0, end: primeiroObjeto.fP_fase2 },
        { start: 0, end: primeiroObjeto.fP_fase3 },
        // Adicione mais objetos conforme necessário
      ];

      circularProgressList.forEach((circularProgress, index) => {
        let progressValue = circularProgress.querySelector(".progress-valor");

        if (!progressValue) {
          console.error(
            `Elemento .progress-valor não encontrado para o elemento ${
              index + 1
            }`
          );
          return;
        }

        let { start: progressStartValue, end: progressEndValue } =
          elementos[index];
        let speed = 20;

        let progress = setInterval(() => {
          if (progressEndValue == 0) {
            return 0;
          }

          progressStartValue += 0.01;

          let displayedValue = `${(progressStartValue * 1).toFixed(
            index === circularProgressList.length - 1 ? 1 : 2
          )}`;

          progressValue.textContent = `${displayedValue}`;

          circularProgress.style.background =
            index === circularProgressList.length - 1
              ? `conic-gradient(#ff0 ${
                  progressStartValue * 180
                }deg, var(--bg-color) 0deg)`
              : `conic-gradient(#ff0000 ${
                  progressStartValue * 180
                }deg, var(--bg-color) 0deg)`;
          // controla o limite dos medidores de 0 a 1
          if (progressStartValue >= progressEndValue) {
            clearInterval(progress);
            console.log(`Elemento ${index + 1} concluído`);
          }
        }, speed);
      });
    }

    // Chame esta função para atualizar os valores
    atualizarValores();

    // Exemplo de como você pode chamar a função em resposta a algum evento, como um clique em um botão
    document
      .getElementById("botaoAtualizar")
      .addEventListener("click", function () {
        atualizarValores();
      });
  });
