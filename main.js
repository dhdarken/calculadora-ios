const ACCIONES = {
  dividir: "dividir",
  multiplicar: " multiplicar",
  sumar: "sumar",
  restar: "restar",
  igual: "igual",
  reset: "reset",
  cambiar: "cambiar",
  porcentaje: "porcentaje",
  calculadora: "calculadora",
};

let result = "";
let anterior = "";
let d = document;
const calcu = d.getElementById("calculadora");
const resultado = d.getElementById("first");
const antesResultado = d.getElementById("second");
calcu.addEventListener("click", functi);

const setfield = function ({ sigResult, anteriorResult }) {
  result = sigResult;
  anterior = anteriorResult;
  antesResultado.textContent = anterior;
  resultado.textContent = result;
};

const aplicarPorcentaje = function () {
  setfield({ sigResult: result / 100, anteriorResult: "" });
};

const sumas = function () {
  antesResultado.textContent = result;
  resultado.textContent = "";
  //function sum(num1, num2) {
  //return num1 + num2;
  //}
  result = "";
  //sum(antesResultado, result);
};
const restas = function () {
  antesResultado.textContent = result;
  resultado.textContent = "";
  result = "";
  function res(num1, num2) {
    return num1 - num2;
  }
  res(antesResultado, result);
};
const multiplicas = function () {
  antesResultado.textContent = result;
  resultado.textContent = "";
  result = "";
  function mul(num1, num2) {
    return num1 * num2;
  }

  mul(antesResultado, result);
};
const divides = function () {
  antesResultado.textContent = result;
  resultado.textContent = "";
  result = "";
  function div(num1, num2) {
    return num1 / num2;
  }
  div(antesResultado, result);
};
const iguals = function () {};

const ejecutar = function ({ action }) {
  const comandos = {
    [ACCIONES.dividir]: divides,
    [ACCIONES.multiplicar]: multiplicas,
    [ACCIONES.sumar]: sumas,
    [ACCIONES.reset]: () => setfield({ sigResult: "", anteriorResult: "" }),
    [ACCIONES.igual]: iguals,
    [ACCIONES.restar]: restas,
    [ACCIONES.cambiar]: function () {},
    [ACCIONES.porcentaje]: aplicarPorcentaje,
  };
  comandos[action]();
};

function functi(event) {
  const valor = event.target.id;
  const actions = Object.keys(ACCIONES);
  if (actions.includes(valor)) {
    return ejecutar({
      action: valor,
    });
  }
  if (result === "0") {
    result = valor;
  } else {
    result += valor;
    resultado.textContent = result;
  }
}
