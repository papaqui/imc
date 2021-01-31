'use strict';

let imcMenores = document.querySelector('.imc-menores');
let imcAdultos = document.querySelector('.imc-adultos');
let menores = document.querySelector('#menores');
let adultos = document.querySelector('#adultos');

document.querySelector('#menores').addEventListener('click', function(){
  if (imcMenores.classList.contains('hidden')){
    imcMenores.classList.remove('hidden');
    imcAdultos.classList.add('hidden');
  } 
});

document.querySelector('#adultos').addEventListener('click', function(){
  imcMenores.classList.add('hidden');
  imcAdultos.classList.remove('hidden');
});

document.querySelector('.check').addEventListener('click', function () {
  let age = Number(document.querySelector('.age').value);
  let weight = Number(document.querySelector('.weight').value);
  let height = Number(document.querySelector('.height').value);
  let boxResultado = document.querySelector('.box-resultado');

  const showResult = function() {
    if (boxResultado.classList.contains('hidden'))
    boxResultado.classList.remove('hidden');
  }

  if (age == '' || weight == '' || height == ''){
    showResult();
  
    document.querySelector('.resultado').textContent = 'Campos vacíos. Por favor ingresa tus datos.';
  } else {
 
  showResult();

  let bmi = weight / height ** 2;
 
  bmi = Number(weight / height ** 2).toFixed(2);

  document.querySelector('.resultado').textContent = `Tu IMC es: ${bmi}`;
     
  }
});
