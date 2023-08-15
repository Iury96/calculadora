const primeiro = document.querySelector('#primeiro');
const segundo = document.querySelector('#segundo');
const resultado = document.querySelector('#resultado');

function somar() {
    const numero1 = parseInt(primeiro.value);
    const numero2 = parseInt(segundo.value);
    const resultadoSoma = numero1 + numero2;
    resultado.innerHTML = (`${numero1} + ${numero2} = ${resultadoSoma}`);
}

function multiplicar() {
    const numero1 = parseInt(primeiro.value);
    const numero2 = parseInt(segundo.value);
    const resultadoMulti = numero1 * numero2;
    resultado.innerHTML = (`${numero1} * ${numero2} = ${resultadoMulti}`);
}

function subtrair() {
    const numero1 = parseInt(primeiro.value);
    const numero2 = parseInt(segundo.value);
    const resultadoSub = numero1 - numero2;
    resultado.innerHTML = (`${numero1} - ${numero2} = ${resultadoSub}`);
}

function dividir() {
    const numero1 = parseInt(primeiro.value);
    const numero2 = parseInt(segundo.value);
    const resultadoDiv = numero1 / numero2;
    if (numero2 === 0) {
      resultado.innerHTML = 'Não é possível dividir por zero.';
    } else {
      resultado.innerHTML = (`${numero1} / ${numero2} = ${resultadoDiv}`)
    }
   
}
