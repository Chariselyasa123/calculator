import {BaseElement} from "../BaseElement.js";

export class Button extends BaseElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const number = this.getAttribute("number");
        this.setState("number", number);
    }

    style() {
        return `
            <style>
                button {
                    align-items: center;
                    background-color: #afd275;
                    box-shadow: 
                    12px 12px 16px 0 rgba(0, 0, 0, 0.25),
                    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
                    border-radius: 30%;
                    display: flex;
                    height: 70px;
                    width: 70px;
                    justify-content: center;
                    border: none;
                    font-size: 2rem;
                    cursor: pointer;
                    transition: all .02s ease-in-out;
                }
                
                button:hover {
                    background-color: #a7d143;
                    transform: scale(1.1);
                }
                
                button:active {
                    background-color: #99c129;
                    transform: translateY(4px);
                }
            </style>
        `;
    }

    render() {
        const number = this.getState("number");
        return `<button>${number}</button>`;
    }
}