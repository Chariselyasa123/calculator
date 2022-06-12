import {BaseElement} from "../BaseElement.js";

export class Button extends BaseElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const value = this.getAttribute("value");
        this.setState("value", value);
    }

    style() {
        return `
            <style>
                button {
                    box-sizing:border-box;
                    align-items: center;
                    background-color: #afd275;
                    box-shadow: 
                    5px 5px 10px 0 rgba(0, 0, 0, 0.25),
                    -5px -5px 10px 0 rgba(255, 255, 255, 0.3);
                    border-radius: 20px;
                    display: flex;
                    height: 80px;
                    width: 100%;
                    justify-content: center;
                    border: none;
                    font-size: 2rem;
                    cursor: pointer;
                    transition: all .02s ease-in-out;
                    font-family: 'Orbitron', sans-serif;
                    padding: .1rem;
                }
                
                button:hover {
                    background-color: #9AC751;
                    transform: scale(1.1);
                }
                
                button:active {
                    background-color: #82B039;
                    transform: translateY(4px);
                }
                
                .equal-sign{
                    background:#9874D2;
                    color: #fff;
                }
                
                .equal-sign:hover{
                    background:#7E51C7;
                }
                
                .equal-sign:active {
                    background:#6739B0;
                }
            </style>
        `;
    }

    render() {
        const value = this.getState("value");
        return `
            <button class="${value === '=' ? 'equal-sign' : ''} button" >
                <span part="operator">${value === 'power' ? 'X<sup>2</sup>' : value}</span>
            </button>
        `;
    }
}