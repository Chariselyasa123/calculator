export class ServiceCalculator {

    allowedKey = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '%', '+', '-', '*', '/', '^', 'Enter', 'Backspace'];

    constructor(options) {
        this.display = options.display;
        this.numbers = options.numbers;
        this.operators = options.operators;
        this.decimal = options.decimal;
        this.percent = options.percent;
        this.power = options.power;
        this.equalSign = options.equalSign;
        this.allClear = options.allClear;

        this.currentValue = '';
        this.prevValue = '';
        this.operator = '';
        this.operatorClicked = 0;
        this.total = 0;
    }

    init() {
        this.setCurrentValue();
        this.setOperator();
        this.decimalListener();
        this.percentListener();
        this.powerListener();
        this.equalSignListener();
        this.keyboardListener();
        this.clearValue();

    }

    setDisplayValue(value) {
        this.display.setState('value', value);
    }

    setDisplayOperation(operation) {
        this.display.setState('operation', operation);
    }

    getDisplayOperation() {
        return this.display.getState('operation');
    }

    inputNumber(number) {
        if (this.display._component.lastElementChild.lastElementChild.lastElementChild.offsetWidth + 22 > this.display.offsetWidth) return;
        if (this.currentValue === '0') this.currentValue = number;
        else this.currentValue += number;
    }

    inputOperator(operator) {
        if (this.currentValue === '') return;
        this.prevValue = this.currentValue;
        this.operator = operator;
        this.currentValue = '';
        this.setDisplayOperation(this.prevValue + this.operator);
    }

    inputDecimal(dot) {
        if (this.currentValue.includes(".")) {
            return;
        }
        this.currentValue += dot;
    }

    setCurrentValue() {
        for (const number of this.numbers) {
            number.addEventListener('click', () => {
                this.inputNumber(number.getAttribute('value'));
                this.setDisplayValue(this.currentValue);
            })
        }
    }

    setOperator() {
        for (const operator of this.operators) {
            operator.addEventListener('click', () => {
                this.operatorFn(operator.getAttribute('value'));
            })
        }
    }

    decimalListener() {
        this.decimal.addEventListener('click', () => {
            this.inputDecimal('.');
        })
    }

    percentListener() {
        this.percent.addEventListener('click', () => {
            this.percentFn();
        })
    }

    powerListener() {
        this.power.addEventListener('click', () => {
            this.powerFn();
        })
    }

    equalSignListener() {
        this.equalSign.addEventListener('click', () => {
            this.equals();
        })
    }

    hasNumber(myString) {
        return /\d/.test(myString);
    }

    equals() {
        this.calculate();
        const currentDisplayOperation = this.getDisplayOperation();
        if (!this.hasNumber(currentDisplayOperation) || !currentDisplayOperation) return;
        this.setDisplayOperation(currentDisplayOperation + this.currentValue + '=');
    }

    operatorFn(value) {
        if (this.operatorClicked > 0) {
            this.calculate()
            this.currentValue = this.total;
        }
        this.inputOperator(value);
        this.operatorClicked++;
    }

    percentFn() {
        if (this.prevValue !== '') {
            this.currentValue = parseFloat(this.currentValue) / 100;
            this.setDisplayValue(this.currentValue);
        } else {
            this.currentValue /= 100;
            this.setDisplayValue(this.currentValue);
            this.setDisplayOperation(this.currentValue);
        }
    }

    powerFn() {
        if (this.prevValue !== '') {
            this.currentValue = Math.pow(parseFloat(this.currentValue), 2);
            this.setDisplayValue(this.currentValue);
        } else {
            this.currentValue = Math.pow(this.currentValue, 2);
            this.setDisplayValue(this.currentValue);
            this.setDisplayOperation(this.currentValue);
        }
    }

    keyboardListener() {
        window.addEventListener('keydown', (e) => {
            if (this.allowedKey.includes(e.key)) {
                switch (e.key) {
                    case 'Enter':
                        this.equals();
                        break;
                    case 'Backspace':
                        this.currentValue = String(this.currentValue).slice(0, -1);
                        this.setDisplayValue(this.currentValue);
                        break;
                    case '+':
                    case '-':
                    case '*':
                    case '/':
                        this.operatorFn(e.key);
                        break;
                    case '.':
                        this.inputDecimal(e.key);
                        break;
                    case '%':
                        this.percentFn();
                        break;
                    case '^':
                        this.powerFn();
                        break;
                    default:
                        this.inputNumber(e.key);
                        this.setDisplayValue(this.currentValue);
                        break;
                }
            }
        })
    }

    calculate() {
        switch (this.operator) {
            case '+':
                this.total = parseFloat(this.prevValue) + parseFloat(this.currentValue);
                break;
            case '-':
                this.total = parseFloat(this.prevValue) - parseFloat(this.currentValue);
                break;
            case 'x':
                this.total = parseFloat(this.prevValue) * parseFloat(this.currentValue);
                break;
            case '/':
                this.total = parseFloat(this.prevValue) / parseFloat(this.currentValue);
                break;
            default:
                this.total = parseFloat(this.currentValue);
                break;
        }

        // prevent total from displaying NaN
        if (isNaN(this.total)) return;

        this.setDisplayValue(this.total);
    }

    clearValue() {
        this.allClear.onkeydown = (e) => {
            e.preventDefault();
            return false;
        }
        this.allClear.addEventListener('click', (e) => {
            this.currentValue = '';
            this.prevValue = '';
            this.operator = '';
            this.operatorClicked = 0;
            this.total = 0;
            this.setDisplayValue(this.currentValue);
            this.setDisplayOperation('');
        })
    }
}