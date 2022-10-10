const butao = documento.getElementById('btn');
butao.addEventListener('click', () => {
      console.log('clicou!')
})



const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const total = document.querySelector('#total');

butao. addEventListener('click', () => {
    const soma = parseInt(num1.vale) + parseInt(num2.value)
    total.textContent = total.textContent + soma;
 })