
const template = document.createElement('template');
template.innerHTML = `
<style>
    div.content-container {
        min-width: var(--content-width-min);
        max-width: var(--content-width-max);    
        width: 100%;
        margin: 0 auto;
    }
</style>
<div class="content-container">
    <slot></slot>
</div>
`;


class Container extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));


    }
}
customElements.define('content-container', Container);