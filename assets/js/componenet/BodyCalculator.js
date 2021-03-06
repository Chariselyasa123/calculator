import {BaseElement} from "../BaseElement.js";

export class BodyCalculator extends BaseElement {
    constructor() {
        super();
    }

    style() {
        return `
            <style>
                .wrapper {
                    background-color: #afd275;
                    box-shadow: 
                    12px 12px 16px 0 rgba(0, 0, 0, 0.25),
                    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
                    border-radius: 10px;
                    display: flex;
                    height: 700px;
                    width: 450px;
                    border: none;
                    padding: 1.4rem;
                    box-sizing:border-box;
                }
                
                .display{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
            </style>
        `;
    }

    render() {
        return `
            <div class="wrapper">
                <div class="display">
                    <slot name="display"></slot>
                    <slot name="button"></slot>
                </div>
            </div>
        `;
    }
}