import "./main-navigation.js";

const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<style>

header {
    position: relative;
    top: 0;
    display: flex;  
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: var(--header-bg-color);
    padding: 1rem 2rem;
    height: 100%;

    border-top: solid 2px var(--primary-color);

    div.header-main {
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        
        height: 150px;
        max-width: var(--content-width-max);
        min-width: var(--content-width-min);
        width: 100%;
        margin: 0 auto;
        
        z-index: 10;

        img.coralia-logo {
            height: 130px;
        }
    
        nav {

        margin-left: 5rem;
    
            a {
                color: var(--primary-color);
                font-size: 1.4rem;
                font-weight: bold;
                text-decoration: none;
                margin-right: 2rem;

                &.active {
                    border-bottom: solid 2px var(--primary-color);
                }

                &:hover {
                    border-bottom: dashed 2px var(--primary-color);
                }
            }
        }
        
    }
    
    div.header-content {
        
        display: none;
    }

    &.banner {    
        height: 50vh;
        border-bottom: solid 2px var(--primary-color);

        img.banner-image {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
            z-index: 5;

            filter: grayscale(50%) brightness(70%);
        }

        div.header-content {
            display: block;
            z-index: 10;
            max-width: var(--content-width-max);
            min-width: var(--content-width-min);
            width: 100%;
            margin: 0 auto;

            &.centered {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
            }
        }
    }
}

</style>

<header>
    <div class="header-main">
        <a href="index.html"><img class="coralia-logo" src="imgs/Coralia_red_black.png" alt="Coralia Logo"></a>  
        <main-navigation active="#active#"></main-navigation>
    </div>
    <div class="header-content">
        <slot></slot>
    </div>
</header>
`;

const bannerTemplate = document.createElement('template');
bannerTemplate.innerHTML = `
    
    <img class="banner-image" src="imgs/banner-image.jpg" alt="Banner Image">
`;


// const navigationLinks = [
//     { id: 'services', label: 'Palvelut', href: 'services.html' },
//     { id: 'references', label: 'Referenssit', href: 'references.html' },
//     { id: 'news', label: 'Tiedoitteet', href: 'news.html' },
//     { id: 'about', label: 'Tietoa meistä', href: 'about.html' }
// ]


/**
 * Show Coralia header component
 * 
 * If the "showbanner" attribute is present, a large banner image is displayed.
 */
class CoraliaHeader extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const hasBanner = this.getAttribute('showbanner') !== null;
        const active = this.getAttribute("active") || null;
        const centerContent = this.getAttribute("centercontent") !== null;


        headerTemplate.innerHTML = headerTemplate.innerHTML.replace('#active#', active || '');

        const temp = headerTemplate.content.cloneNode(true);
        const headerEl = temp.querySelector('header');


        const contentEl = temp.querySelector('div.header-content');
        if (centerContent && contentEl) {
            contentEl.classList.add("centered")
        }

        // // Create navigation links
        // const navEl = temp.querySelector('nav#navigation');
        // if (navEl) {
        //     navigationLinks.forEach(link => {
        //         const aEl = document.createElement('a');
        //         aEl.id = `link-${link.id}`;
        //         aEl.href = link.href;
        //         aEl.textContent = link.label;
        //         if (active === link.id) {
        //             console.log("Active link:", link.id);
        //             aEl.classList.add('active');
        //         }

        //         navEl.appendChild(aEl);
        //     });
        // }


        if (hasBanner && headerEl) {
            headerEl.classList.add('banner')
            headerEl.append(bannerTemplate.content.cloneNode(true));
        }
        shadow.append(temp);
    }

}
customElements.define('coralia-header', CoraliaHeader);

