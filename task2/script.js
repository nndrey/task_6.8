const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener ('click', () => {
        alert('Служит для вывода информации в консоль');
    })

    const alert2 = document.querySelector('#alert');

    alert2.addEventListener ('click', () => {
        alert('Простой способ вывести информацию');
    })

    const prompt2 = document.querySelector('#prompt');

    prompt2.addEventListener ('click', () => {
        alert('Prompt() можно использовать для ввода информации');
    }) 