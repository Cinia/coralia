const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<style>
    footer {
        position: relative;
        flex: 0 0 auto;
       
        margin-top: 2rem;

        background-color: var(--primary-color);
        

        display: flex;  
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        min-height: 200px;
        width: 100%;

        padding: 2rem 0;
        


        img.footer-pulse {
            position: absolute;
            top: -24px;
            right: 20%;
        
        }

        div.container {
            width: 100%;
            max-width: var(--content-width-max);
            min-width: var(--content-width-min);
            display: flex;  
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;

            color: var(--text-color-on-primary);

            div {
                flex: 1 1 auto;

                img.coralia-logo-footer {
                    margin-top: 3rem;
                    height: 100px;
    
                }
    
                ul.footer-links {
                    list-style-type: none;
                    padding: 0;
                    
                    li {
                        margin-bottom: 0.1rem;
                        font-size: 1rem;
                        a {
                            color: var(--text-color-on-primary);
                            text-decoration: none;
                        }
    
                        &.header {
                            font-weight: bold;
                            margin-top: 0.5rem;
                        }
                    }
                }
                    
                p {
                    font-size: 0.8rem;
                }
           }
        }

}

        

</style>
<footer>
        <img src="imgs/pulse-footer.png" alt="Pulse" class="footer-pulse">
        <div class="container">
        <div id="pulse-image">
            <img src="imgs/coralia_white.png" alt="Coralia Logo" class="coralia-logo-footer">
        </div>

        <div>
            <ul class="footer-links">
                <li class="header"><a href="services.html">Palvelut</a></li>
                <li><a href="#">Laaturekisteri (QRE)</a></li>
                <li><a href="#">Salitoiminnan ohjaus (OPS)</a></li>

                <li class="header"><a href="about.html">Coralia</a></li>
                <li><a href="https://www.sydansairaala.fi/" target="_blank" rel="noopener">Sydänsairaala Oy</a></li>
                <li><a href="https://www.cinia.fi" target="_blank" rel="noopener">Cinia Oy</a></li>
            </ul>
        </div>

        <div>
            <ul class="footer-links">
                <li class="header"><a href="privacy.html">Tietosuoja</a></li>
                <li><a href="privacy.html#cookies">Evästeet</a></li>
                <li><a href="privacy.html#data">Henkilötiedot</a></li>
                <li><a href="accessibility.html">Saavutettavuus</a></li>
            </ul>
        </div>

        <div>
            <p>&copy; #currentYear# Sydänsairaala Oy.<br /><br />Kaikki oikeudet pidätetään.</p>
        </div>
        </div>
    
</footer>
`;

class CoraliaFooter extends HTMLElement {

    constructor() {

        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const noPulse = this.getAttribute('nopulse') !== null;
        const transparent = this.getAttribute('transparent') !== null;


        const currentYear = new Date().getFullYear();
        footerTemplate.innerHTML = footerTemplate.innerHTML.replace('#currentYear#', currentYear);


        const temp = footerTemplate.content.cloneNode(true);

        if(transparent) {
            const footerEl = temp.querySelector('footer');
            if (footerEl) {
                footerEl.style.backgroundColor = 'transparent';
            }
        }

        

        if (noPulse) {
            const pulseImg = temp.querySelector('img.footer-pulse');
            if (pulseImg) {
                pulseImg.remove();
            }
        }

        shadow.append(temp);

    }

}
customElements.define('coralia-footer', CoraliaFooter);