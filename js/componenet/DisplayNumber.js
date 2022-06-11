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
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    padding-right: .5rem;
                    font-family: Digital, monospace;
                    padding-top:3rem;
                    gap: .5rem;
                }
                
                .calculation {
                    box-sizing:border-box;
                    font-size: 1rem;
                    font-weight: bold;
                    letter-spacing: 0.2rem;
                }
            </style>
        `;
    }

    render() {
        return `
            <div class="display-wrapper">
                <div class="number">
                    <div class="calculation">7+7</div>
                    <div class="total">8888888888888888</div>
                </div>
            </div>
        `;
    }
}