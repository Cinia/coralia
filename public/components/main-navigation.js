

const navTemplate = document.createElement('template');
navTemplate.innerHTML = `
<style>
nav {
    margin-left: 5rem;

    a {
        display: inline-block;
        color: var(--primary-color);
        font-size: 1.2rem;
        font-weight: normal;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.07rem;
        margin-right: 2rem;
        transition: all 0.2s ease;
        transform: scale(1);

        &.active {
            border-bottom: solid 2px var(--primary-color);
        }

        &:hover {
            border-bottom: dashed 1px var(--primary-color);
            transform: scale(1.1);
            
        }
    }

    &.white {
        
        a {
            color: var(--text-color-on-primary);
        }   

        &:hover {
            border-bottom: dashed 1px var(--text-color-on-primary);
            
        }
    }

    &.alt {
        a {
            text-transform: none;
            letter-spacing: normal;
            font-size: 1.1rem;
            font-weight: bold;
            color: var(--secondary-color);
        }
    } 
}
</style>
<nav></nav>
`;


const navigationLinks = [
    { id: 'services', label: 'Palvelut', href: 'services.html' },
    { id: 'references', label: 'Referenssit', href: 'references.html' },
    { id: 'news', label: 'Julkaisut', href: 'news.html' },
    { id: 'about', label: 'Coralia', href: 'about.html' }
];

const navigationLinksAlt = [
    { id: 'coralia', label: 'Coralia Lyhyesti', href: 'services.html' },
    { id: 'solutions', label: 'Ratkaisut', href: 'references.html' },
    { id: 'benefit', label: 'Hyödyt & Vaikuttavuus', href: 'news.html' },
    { id: 'customerexp', label: 'Asiakaskokemus', href: 'about.html' }
];


class MainNavigation extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const active = this.getAttribute("active") || null;
        const white = this.getAttribute("white") !== null;
        const alt = this.getAttribute("alt") !== null;

        const temp = navTemplate.content.cloneNode(true);

        const navEl = temp.querySelector('nav');
        if (white && navEl) {
            navEl.classList.add("white");
        }
        if (alt && navEl) {
            console.log("ALT?", alt);
            navEl.classList.add("alt");
        }
        const linksToUse = alt ? navigationLinksAlt : navigationLinks;
        linksToUse.forEach(link => {
            const aEl = document.createElement('a');
            aEl.id = `link-${link.id}`;
            aEl.href = link.href;
            aEl.textContent = link.label;
            if (active === link.id) {
                console.log("Active link:", link.id);
                aEl.classList.add('active');
            }

            navEl.appendChild(aEl);
        });

        shadow.append(temp);


    }
}
customElements.define('main-navigation', MainNavigation);