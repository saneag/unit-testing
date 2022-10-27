const x = document.getElementById('number_x')
const y = document.getElementById('number_y')
const result = document.getElementById('result')
const calculateButton = document.getElementById('calculate')
const operationsSelect = document.getElementById('operations')

x.addEventListener('input', () => handleLengthValidation(x))
y.addEventListener('input', () => handleLengthValidation(y))

const handleLengthValidation = (input, maxLength) => {
    if (input.value.length > (maxLength || input.maxLength)) {
        input.value = input.value.slice(0, maxLength || input.maxLength)
    }
}

const validateSum = () => {
    if (x.value.length === 0 || y.value.length === 0) {
        return 'Please fill both fields'
    }

    return Number(x.value) + Number(y.value)
}

const validateSubtract = () => {
    if (x.value.length === 0 || y.value.length === 0) {
        return 'Please fill both fields'
    }

    return Number(x.value) - Number(y.value)
}

const validateDivide = () => {
    if (x.value.length === 0 || y.value.length === 0) {
        return 'Please fill both fields'
    }

    if (y.value === '0') {
        return 'Cannot divide by 0'
    }

    return Number(x.value) / Number(y.value)
}

const validateMultiply = () => {
    if (x.value.length === 0 || y.value.length === 0) {
        return 'Please fill both fields'
    }

    return Number(x.value) * Number(y.value)
}

const validatePower = () => {
    if (x.value.length === 0 || y.value.length === 0) {
        return 'Please fill both fields'
    }

    return Math.pow(Number(x.value), Number(y.value))
}

const validateSqrt = () => {
    if (x.value.length === 0) {
        return 'Please fill the field'
    }

    if (x.value < 0) {
        return 'Cannot calculate square root of negative number'
    }

    return Math.sqrt(Number(x.value))
}

const handleCalculate = () => {
    let rez
    switch (operationsSelect.value) {
        case 'add':
            rez = validateSum()
            break;
        case 'subtract':
            rez = validateSubtract()
            break;
        case 'divide':
            rez = validateDivide()
            break;
        case 'multiply':
            rez = validateMultiply()
            break;
        case 'power':
            rez = validatePower()
            break;
        case 'sqrt':
            rez = validateSqrt()
            break;
        default:
            console.log('Invalid operation');
            break;
    }

    if (typeof rez === 'string') {
        result.style.color = 'red'
    }
    if (typeof rez === 'number') {
        result.style.color = ''
    }
    result.innerHTML = rez
}

const operations = document.getElementById('operations')

operations.addEventListener('change', () => {
    if (operations.value === 'sqrt') {
        y.disabled = true
        y.value = ''
    } else {
        y.disabled = false
    }
})