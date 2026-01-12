class CssVarValue extends HTMLElement {
    static get observedAttributes() { return ['var']; }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.span = document.createElement('span');
        this.shadowRoot.appendChild(this.span);
    }

    connectedCallback() {
        this.updateValue();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'var' && oldValue !== newValue) {
            this.updateValue();
        }
    }

    updateValue() {
        const varName = this.getAttribute('var');
        if (!varName) {
            this.span.textContent = '';
            return;
        }
        // Get computed value from the element's parent or :root
        const value = getComputedStyle(this.parentElement || document.documentElement).getPropertyValue(varName);
        this.span.textContent = value.trim() || '(not set)';
    }
}

customElements.define('css-var-value', CssVarValue);
