


const template = document.createElement('template');
template.innerHTML = `
<style>

header {
    position: relative;
   
    box-shadow: 0 0.5rem 5px 2px rgba(0,0,0,0.1);
  

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
        <a href="index2.html"><img src="imgs/Coralia_red_black.png" alt="Coralia Logo" class="coralia-logo"></a>
        <nav>
        
                <a href="coralia2.html" class="#home#">Coralia Lyhyesti</a>
                <a href="solutions.html" class="#services#">Ratkaisut</a>
                <a href="about.html" class="#about#">Hyödyt & vaikuttavuus</a>
                <a href="contact.html" class="#contact#">Asiakaskokemus</a>
                

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