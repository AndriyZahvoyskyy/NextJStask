const slider = document.querySelector('.slider');
const lenght = document.querySelector('.lenght');

const includeUppercase = document.querySelector('#upper');
const includeLowercase = document.querySelector('#lower');
const includeNumbers = document.querySelector('#numbers');
const includeSymbols = document.querySelector('#symbols');

const generateButton =document.querySelector('.button-generate')
const passwordDisplay = document.querySelector('.password');

slider.addEventListener ('input',()=>{
    lenght.textContent = slider.value
})

const characters = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase:'abcdefghijklmnopqrstuvwxyz',
    numbers: '1234567890',
    symbols: '!@#$%^&*()_+=-:><,./?'
};

const createPassword = (options) => {
    let charset = '';

    if(options.uppercase) {
        charset += characters.uppercase
    }
    if(options.lowercase) {
        charset += characters.lowercase
    }
    if(options.numbers) {
        charset += characters.numbers
    }
    if(options.symbols) {
        charset += characters.symbols
    }

    let password = '';
    for(let i = 0; i < options.lenght; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length)
        password += charset.charAt(randomIndex)
    }
    return password;
}


generateButton.addEventListener ('click', () =>{
    const passwordOptions = {
        lenght: slider.value,
        uppercase: includeUppercase.checked,
        lowercase: includeLowercase.checked,
        numbers: includeNumbers.checked,
        symbols: includeSymbols.checked,
    };

    const password = createPassword(passwordOptions)
    passwordDisplay.textContent = password;

})
