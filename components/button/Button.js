
class Button extends HTMLElement {
    buttonElement;

    constructor() {
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Integrate Css style with file.
        this.integrateStyle(shadow);

        // Create the main element of the web component
        this.buttonElement = document.createElement('button');
        this.buttonElement.textContent = this.getAttribute('label');
        this.buttonElement.setAttribute('type', 'button')
        this.initOrUpdateStyle();

        // Attach the created element to the shadow DOM
        shadow.appendChild(this.buttonElement);
    }

    initOrUpdateStyle() {
        this.buttonElement.setAttribute('class', '');

        // Match attribute style with classes css
        const color = this.getAttribute('color')
        if (color === 'success') {
            this.buttonElement.classList.add('button--success')
        }
        if (color === 'danger') {
            this.buttonElement.classList.add('button--danger')
        }
        if (color === 'warning') {
            this.buttonElement.classList.add('button--warning')
        }

        const variant = this.getAttribute('variant')
        if (variant === 'rounded') {
            this.buttonElement.classList.add('button--rounded')
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.initOrUpdateStyle()
    }

    static get observedAttributes() { return ['color', 'variant']; }

    integrateStyle(shadow) {
        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("href", "components/button/Button.css");
        shadow.appendChild(linkElement);
    }
}

customElements.define('c-button', Button)
