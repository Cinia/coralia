import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

const template = document.createElement('template');
template.innerHTML = `
<slot></slot>
`;

class MarkdownContent extends HTMLElement {

    shadow = null;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        const mdfile = this.getAttribute('src');
        const styleContent = this.getAttribute('stylecontent');
        if (styleContent) {
            const style = document.createElement('style');
            style.textContent = styleContent;
            this.shadow.appendChild(style);
        }


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
customElements.define('markdown-content', MarkdownContent);