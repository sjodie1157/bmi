let weight = document.querySelector('#weighthInput')
let height = document.querySelector('#HeightInput')
let age = document.querySelector('#ageInput')

let bmilable = document.querySelector('#bmie')


function calculation(){
    bmilable.textContent = eval( `${weight.value} / (${height.value/100}**2)` ).toFixed(2) + " BMI" 
}

let calcbtn = document.querySelector('#answer')
calcbtn.addEventListener('click',calculation)


