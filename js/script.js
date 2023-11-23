// function atualizarValores() {
//   let circularProgressList = document.querySelectorAll(".box-circle-progress");

//   if (circularProgressList.length == 0) {
//     console.error("Nenhum elemento .box-circle-progress encontrado");
//     return;
//   }

//   let valoresFinais;
//   let elementos = [
//     { start: 0, end: 0.84 },
//     { start: 0, end: 0.77 },
//     { start: 0, end: 0.72 },
//     { start: 0, end: 0.9 },
//     // Adicione mais objetos conforme necessário
//   ];

//   circularProgressList.forEach((circularProgress, index) => {
//     let progressValue = circularProgress.querySelector(".progress-valor");

//     if (!progressValue) {
//       console.error(
//         `Elemento .progress-valor não encontrado para o elemento ${index + 1}`
//       );
//       return;
//     }

//     let { start: progressStartValue, end: progressEndValue } = elementos[index];
//     let speed = 20;

//     let progress = setInterval(() => {
//       if (progressEndValue == 0) {
//         return 0;
//       }

//       progressStartValue += 0.01;
//       let displayedValue = `${(progressStartValue * 1).toFixed(
//         index === circularProgressList.length - 1 ? 1 : 2
//       )}`;

//       progressValue.textContent = `${displayedValue}`;

//       circularProgress.style.background =
//         index === circularProgressList.length - 1
//           ? `conic-gradient(#ff0 ${
//               progressStartValue * 180
//             }deg, var(--bg-color) 0deg)`
//           : `conic-gradient(#ff0000 ${
//               progressStartValue * 180
//             }deg, var(--bg-color) 0deg)`;
//       // controla o limite dos medidores de 0 a 1
//       if (progressStartValue >= progressEndValue) {
//         clearInterval(progress);
//         console.log(`Elemento ${index + 1} concluído`);
//       }
//     }, speed);
//   });
// }

// // Chame esta função para atualizar os valores
// atualizarValores();

// // Exemplo de como você pode chamar a função em resposta a algum evento, como um clique em um botão
// document
//   .getElementById("botaoAtualizar")
//   .addEventListener("click", function () {
//     atualizarValores();
//   });
