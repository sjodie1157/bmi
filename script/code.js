let weight = document.querySelector('#weighthInput')
let height = document.querySelector('#HeightInput')

let state = document.querySelector('#status')
let bmilable = document.querySelector('#bmie')

function calculation(){
    bmilable.textContent = eval( `${weight.value} / (${height.value/100}**2)` ).toFixed(2) + " BMI";
    state.textContent = statusBmi(state)
    function statusBmi (state) {
        if (state < 18.5){
            return 'underweight';
        } else if (state < 25){
            return 'normal';
        } else if (state < 30){
            return 'overweight';
        } else {
            return 'obese';
        }
    }
}

let calcbtn = document.querySelector('#answer')
calcbtn.addEventListener('click',calculation)
