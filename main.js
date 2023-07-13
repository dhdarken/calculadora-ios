let operando1;
let operando2;
let operacion;

const resultado = document.getElementById("Result");
const clasesNumb = document.getElementsByClassName("Numb");
const clasesOpe = document.getElementsByClassName("Yellow");
const dato1 = document.getElementById("first");
const dato2 = document.getElementById("second");

function Operaciones() {
  for (let i = 0; i <= clasesOpe.length; i++) {
    const Symbol = document.getElementById("Symb" + i);
    console.log(Symbol);
    Symbol.addEventListener("click", Sym);
    function Sym() {
      let Symb = Symbol.textContent;
      console.log(Symb);

      if (Symb === "+") {
        operando1 = dato1.textContent;
        operacion = "+";
        console.log(operando1);
        limpiar();
      } else if (Symb === "÷") {
        operando1 = dato1.textContent;
        operacion = "/";
        console.log(operando1);
        limpiar();
      } else if (Symb === "X") {
        operando1 = dato1.textContent;
        operacion = "*";
        console.log(operando1);
        limpiar();
      } else if (Symb === "-") {
        operando1 = dato1.textContent;
        operacion = "-";
        console.log(operando1);
        limpiar();
      } else if (Symb === "=") {
        operando2 = dato1.textContent;
        console.log(operando2);
        resolver();
      } else if (Symb === "C") {
        resetear();
      }
    }
  }
}

Operaciones();
function encontrarNum1() {
  for (let i = 0; i < clasesNumb.length; i++) {
    const Number = document.getElementById("NUM" + i);
    Number.addEventListener("click", funs);
    function funs() {
      const num1 = Number.textContent;
      dato1.textContent = dato1.textContent + num1;
    }
  }
}

function limpiar() {
  dato2.textContent = dato1.textContent;
  dato1.textContent = "";
}
encontrarNum1();

//function encontrarNum2() {
//  for (let i = 0; i < clasesNumb.length; i++) {
//    const Number = document.getElementById("NUM" + i);
//    Number.addEventListener("click", funs);
//    function funs() {
//      const num2 = Number.textContent;
//    }
//  }
//}
//encontrarNum2();

function resetear() {
  dato1.textContent = "";
  dato2.textContent = "";
  operando1 = 0;
  operando2 = 0;
  operacion = "";
}

function resolver() {
  let res = 0;
  switch (operacion) {
    case "+":
      res = operando1 + operando2;
      break;

    case "-":
      res = operando1 - operando2;
      break;
    case "/":
      res = operando1 / operando2;
      break;
    case "*":
      res = operando1 * operando2;
      break;
  }
  resetear();
  dato2.textContent = res;
}
