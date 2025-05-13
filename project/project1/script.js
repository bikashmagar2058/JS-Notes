const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const result = document.querySelector('#result');

    if (height === '' || isNaN(height) || height < 0) {
        results.innerHTML = `please enter the valid height ${height}`;
    } else if (weight === '' || isNaN(weight) || weight < 0) {
        results.innerHTML = `please enter the valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `Your BMI is ${bmi}`;

        if (bmi < 18.6) {
            result.innerHTML = `Your weight is under BMI.`;
        } else if (18.6 <= bmi >= 24.9) {

            result.innerHTML = `Your weight is with in normal BMI Range.`
        }
        else {
            result.innerHTML = `Your weight is over BMI.`
        }
    }
})
