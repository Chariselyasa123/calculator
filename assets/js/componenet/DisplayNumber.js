import {BaseElement} from "../BaseElement.js";

export class DisplayNumber extends BaseElement {
    constructor() {
        super();
    }

    style() {
        return `
            <style>
                .display-wrapper {
                    box-sizing:border-box;
                    background-color: #9AC751;
                    box-shadow: 
                    5px 5px 10px 0 rgba(0, 0, 0, 0.25),
                    -5px -5px 10px 0 rgba(255, 255, 255, 0.3);
                    border-radius: 10px;
                    display: block;
                    height: 150px;
                    width: 100%;
                    font-size: 3rem;
                    padding: .5rem;
                }
                
                .number {
                    box-sizing:border-box;
                    border: 2px solid #9874D2;
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                    padding-right: .2rem;
                    font-family: Digital, monospace;
                    display: grid;
                    grid-template-rows: 2fr 2fr;
                }
                
                .calculation {
                    box-sizing:border-box;
                    font-size: 1rem;
                    font-weight: bold;
                    letter-spacing: 0.2rem;
                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-end;
                }
                
                .total{
                    box-sizing:border-box;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }
                
                /*make blinking cursor in total*/
                .total::after {
                    content: "|";
                    color: #9874D2;
                    font-size: 5rem;
                    animation: blinker 1s linear infinite;
                    display: flex;
                    align-items: baseline;
                }
                
                @keyframes blinker {
                    50% {
                        opacity: 0;
                    }
                }
            </style>
        `;
    }

    render() {
        const value = this.getState("value") ?? '';
        const operation = this.getState("operation") ?? '';
        return `
            <div class="display-wrapper">
                <div class="number">
                    <div class="calculation">${operation}</div>
                    <div class="total">${value}</div>
                </div>
            </div>
        `;
    }
}