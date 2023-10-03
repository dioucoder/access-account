let menuBtn = document.querySelector('#menu');

menuBtn.addEventListener('click', function name(params) {
    menuBtn.classList.toggle('active');
});

let ind = document.querySelector('.passwordIndicatin');
document.addEventListener('DOMContentLoaded', () => {
    ind.classList.add('enabled');
    setTimeout(() => {
        ind.classList.remove('enabled');
    }, 5000);
})

let keysValues = document.querySelectorAll('.keysValue');
let inputPassword = document.querySelector('.passValue');
let access = document.querySelector('.block-access');
let main = document.querySelector('#main');
let suppBtn = document.querySelector('#suppBtn');
let accessBtn = document.querySelector('#accessBtn');
let clearBtn = document.querySelector('#clearBtn');

inputPassword.value = "";

keysValues.forEach(key => {
    key.addEventListener('click', function () {
        inputPassword.value += key.textContent;
        accessBtn.addEventListener('click', () => {
            if (inputPassword.value == "becoder2.0") {
                access.classList.add('removed');
                main.classList.add('showAccount');
            } else {
                let wrongBox = document.querySelector('.wrong-password');
                wrongBox.classList.add('wrong');
                setTimeout(() => {
                    wrongBox.classList.remove('wrong');
                }, 3000);
            }
        })
    })

    clearBtn.addEventListener('click', function () {
        inputPassword.value = '';
    })
});


suppBtn.addEventListener('click', function () {
    let value = inputPassword.value;
    inputPassword.value = value.replace(value.charAt(value.length - 1), '');
});


window.addEventListener('keypress', () => {
    let mssg = document.querySelector('.message')
    mssg.classList.add('show');
    inputPassword.disabled = true;

    setTimeout(() => {
        mssg.classList.remove('show');
        inputPassword.disabled = false;
    }, 2000);
})
