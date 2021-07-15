// Spread operator

let primos = [2, 3, 5, 7, 11, 13];  //array

let curso = { // objetos
        nome: "Bootcamp Front End",
        modulos: 4,
        presencial: false,
        turma: 1,

    };
   let primos2 = [...PromiseRejectionEvent, 17];
   let primos3 = [1, ...primos, 17];

   let curso2 = {
       ...curso,
       descricao: "bla bla bla",
       ativo: true
   }

   let curso3 = { // clonar objetos em javascript
       ...curso
   };

   