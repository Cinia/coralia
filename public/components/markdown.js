import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

const template = document.createElement('template');
template.innerHTML = `
<slot></slot>
`;

class Markdown extends HTMLElement {

    shadow = null;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        const mdfile = this.getAttribute('src');

        if (mdfile) {
            try {
                fetch(mdfile)
                    .then(response => response.text())
                    .then(markdown => {
                        this.shadow.appendChild(template.content.cloneNode(true));
                        this.shadow.appendChild(document.createRange().createContextualFragment(marked.parse(markdown)));
                        
                    });

            } catch (error) {
                console.log(`Error fetching markdown file (${mdfile}):`, error);
            }

        }

    }
}
customElements.define('markdown-content', Markdown);