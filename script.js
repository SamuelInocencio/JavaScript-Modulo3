const resultElements = document.querySelector('.result');

function generateNumber() {
    const firstNumberElement = Math.ceil(document.getElementById('firstNumber').value);
    const lastNumberElement = Math.floor(document.querySelector('#lastNumber').value);


    const drawnNumber = Math.floor(Math.random() * (lastNumberElement - firstNumberElement + 1)) + firstNumberElement;

    resultElements.innerHTML = `O número sorteado é: ${drawnNumber}`;

}