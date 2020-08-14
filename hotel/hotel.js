// Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, sendo que desses, 25 estão ocupados pelas próximas semanas.  Faça um programa que o usuário digite o número de pessoas que entra (com números positivos) e o número de pessoas que saem (com números negativos). Caso a capacidade de leitos vagos seja ultrapassada, mostrar mensagem “não é possível pois ultrapassa a capacidade em X leitos”, sendo X o número a mais de hóspedes que ficariam sem leito.

let leitosVagos = 40;
// (130 / 2) - 25

let contagemLeitos = 0;

while (contagemLeitos < leitosVagos) {
  let entrada = Number(
    prompt(
      `Existem ${
        leitosVagos - contagemLeitos
      } leitos. \n Quantas pessoas entram ou saem (+ ou -):`
    )
  );

  // desafio -1

  // if (contagemLeitos <= leitosVagos) {
  //   alert(`Não é possível criar novas vagas`);
  // } else {
  //   contagemLeitos += entrada;
  // }
}

let leitosExcedidos = contagemLeitos - leitosVagos;

alert(
  `Não é possível pois ultrapassa a capacidade em ${leitosExcedidos} leitos`
);
