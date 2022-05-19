let userText = document.querySelector('#vodText');
let textPaste = document.querySelector('#duplicateField');
let butt = document.querySelector('#cleanText');
userText.addEventListener('keyup', () => {
    textPaste.textContent = userText.value;
});
butt.addEventListener('click', () => {
    console.log(userText.value);
    userText.value = "";
    textPaste.textContent = "";
})
