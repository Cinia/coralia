


const template = document.createElement('template');
template.innerHTML = `
<style>
    div.pulse-line-container {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
            
        div.line-left {
            flex: 4 4 auto;
            border-bottom: solid 2px var(--primary-color);
            height: 24px;
        }

        div.line-right {
            flex: 1 1 auto;
            border-bottom: solid 2px var(--primary-color);
            height: 24px;
        }

        img.pulse {
            flex: 0 0 auto;
            
            height: auto;
            width: auto;
        }
}
</style>
<div class="pulse-line-container">
    <div class="line-left"></div>
    <img src="imgs/pulse.png" alt="Pulse" class="pulse"></img>
    <div class="line-right"></div>
</div>
`;

class PulseLine extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(template.content.cloneNode(true));


    }
}
customElements.define('pulse-line', PulseLine);