export class BaseElement extends HTMLElement {
    constructor() {
        super();

        // Automatically fetch the shadow root
        this._component = this.attachShadow({mode: "closed"});

        // Set up a default state
        this._state = {};

        // Setup our private _doRender method
        this._doRender = this._doRender.bind(this);

        // Finally, actually render the component for the first time!
        this._doRender();
    }

    // getState, returns the state for a given path
    getState(path) {
        // The state variable was initialised in the constructor
        return this._state[path];
    }

    // setState, allows for modifying state and automatically rerendering
    setState(path, value) {
        // Only if the state changed, we'd want to rerendering
        // It would be possible to tweak this using a deep comparison for example
        if (this._state[path] !== value) {
            this._state[path] = value;
            // The state changed, cause a re-render
            this._doRender();
        }
    }

    // The _doRender, our private method for causing a render to occur
    _doRender() {
        // Setup the innerHTML of our component to be the value of the render method
        // The render method will return HTML inside a string
        this._component.innerHTML = this.style() + this.render();
    }
}