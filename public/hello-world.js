class HelloWorld extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const wrapper = document.createElement('span');
        wrapper.textContent = 'Hello, Web Component!';
        wrapper.style.color = '#005a8b';
        wrapper.style.fontWeight = 'bold';
        shadow.appendChild(wrapper);
    }
}
customElements.define('hello-world', HelloWorld);