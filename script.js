function generateNumber() {
    const min = Math.ceil(document.querySelector('#min').value);
    const max = Math.floor(document.querySelector('#max').value);
    const pressResult = document.querySelector('.pressResult');

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    pressResult.innerHTML = `O resultado é: ${result}`;

};