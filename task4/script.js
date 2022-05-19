const vvodText = document.querySelector('#vvod');

vvodText.addEventListener('click', function(event) {
    // тело обработчика
    vvodText.textContent = prompt('измените текст ссылки')
    event.preventDefault();
    // конец тела обработчика
})