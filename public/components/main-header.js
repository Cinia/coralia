


const template = document.createElement('template');
template.innerHTML = `
<style>

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--layout-header-height);
    background-color: var(--cinia-color-white);
   
    box-shadow: 0 0.5rem 5px 2px rgba(0,0,0,0.1);
    z-index: 10;
  

    & > div.cinia-container {
        display:flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
    
        max-width: var(--cinia-layout-breakpoint-xl);
        min-width: var(--cinia-layout-breakpoint-xs);
        width: 100%;

        img.coralia-logo {
            height: 100px;
            
            display: block;
        }
    
    }
    
}


</style>
<header>
    <div class="cinia-container">
        <a href="index.html"><img src="imgs/Coralia_red_black.png" alt="Coralia Logo" class="coralia-logo"></a>
        <nav>
        
                
                <a href="solutions.html" class="#services#">Ratkaisut</a>
                <a href="effectiveness.html" class="#about#">Vaikuttavuus</a>
                <a href="integrations.html" class="#about#">Integraatiot</a>
                <a href="videos.html" class="#about#">Videot</a>
                <a href="security.html" class="#about#">Tietoturva</a>
                <a href="coralia.html" class="#home#">Meistä</a>
                <a href="contact.html" class="#about#">Yhteystiedot</a>
                
                

        </nav>

        <a href="#"><button class="primary large">Pyydä demo</button></a>
    </div>
</header>
`;


class MainHeader extends HTMLElement {

    constructor() {
        super();
        const temp = template.content.cloneNode(true);
        this.appendChild(temp);



    }
}

customElements.define('main-header', MainHeader);