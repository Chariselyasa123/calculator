import {Button} from "./componenet/Button.js";
import {BodyCalculator} from "./componenet/BodyCalculator.js";
import {DisplayNumber} from "./componenet/DisplayNumber.js";
import {ServiceCalculator} from "./ServiceCalculator.js";

window.customElements.define('button-calculator', Button);
window.customElements.define('body-calculator', BodyCalculator);
window.customElements.define('display-number', DisplayNumber);

// wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    const decimal = document.querySelector('.decimal');
    const percent = document.querySelector('.percent');
    const power = document.querySelector('.power');
    const equalSign = document.querySelector('.equal-sign');
    const allClear = document.querySelector('.all-clear');
    const display = document.querySelector('display-number');

    const service = new ServiceCalculator({
        display,
        numbers,
        operators,
        decimal,
        percent,
        power,
        equalSign,
        allClear
    });

    service.init();

})