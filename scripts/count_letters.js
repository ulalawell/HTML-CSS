const textarea = document.querySelector('textarea');
const counter = document.querySelector('.container-list-text-group-counter');
const maxlength = 250;
textarea.addEventListener('input', onInput)

function onInput(event) {
    event.target.value = event.target.value.substr(0, maxlength);
    const length = event.target.value.length;
    counter.innerHTML = length + '/' + maxlength;
}
