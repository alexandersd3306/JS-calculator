const inputANode = document.querySelector('.js-input-A');
const inputBNode = document.querySelector('.js-input-B');
const selectInput = document.querySelector('.inputSelect');
const btnResultNode = document.querySelector('.js-btn-result');
const output = document.querySelector('.js-output');

btnResultNode.addEventListener('click', function() {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operation = selectInput.value;

    const result = calculate({
        a,
        b,
        operation
    });
    console.log(result);
    output.innerHTML = result;

});