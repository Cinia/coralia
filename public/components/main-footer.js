


const rawTemplate = `
<style>

footer.main-footer {
    height: 10rem;
}

footer.main-footer > div.footer-content {

    height: 100%;

    & > div {
        min-width: 20%;
    }

    div.logo-section {

        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    img.coralia-logo-footer {
        height: 6rem;
    }
}

</style>
<footer class="main-footer">

    <div class="cinia-container footer-content flexrow fullwidth spacebetween" style="align-items: flex-start;">
        <div class="logo-section">
            <img src="imgs/coralia_red_black.png" alt="Coralia Logo" class="coralia-logo-footer">
        </div>
        <div>
            <dl>
            <a href="services.html"><dt>Palvelut</dt></a>
                <dd><a href="services.html">Laaturekisteri (QRE)</a></dd>
                <dd><a href="services.html">Salitoiminnan ohjaus (OPS)</a></dd>
            </dl>
        </div>
        <div>
            <dl>
            <a href="privacy.html"><dt class="header">Tietosuoja</dt></a>
                <dd><a href="privacy.html#cookies">Evästeet</a></dd>
                <dd><a href="privacy.html#data">Henkilötiedot</a></dd>
                <dd><a href="accessibility.html">Saavutettavuus</a></dd>

                <a href="index2.html"><dt class="header">Versio 2</dt></a>
                    <dd><a href="index.html">Versio 1</a></dd>
            </dl>
        </div>

        <div>
            <p>&copy; #currentYear# Sydänsairaala Oy & Cinia Oy.<br /><br />Kaikki oikeudet pidätetään.</p>
        </div>
    </div>


</footer>

`;

class MainFooter extends HTMLElement {

    constructor() {

        super();

        const templ = rawTemplate.replace('#currentYear#', new Date().getFullYear());

        this.innerHTML = templ;


    }
}


customElements.define('main-footer', MainFooter);