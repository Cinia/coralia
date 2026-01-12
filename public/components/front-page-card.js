


const rawTemplate = `

<style>
    .front-page-card {
        flex: 1 1 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: center;

        
    }
    .front-page-card h2 {
        color: var(--cinia-color-secondary);
        text-align: left;
    }

    .front-page-card img {
        
        height: 4rem;

        color: lightblue;
        
    }

    .front-page-card svg {
        
        color: var(--cinia-color-secondary);
        height: 5rem;
        width: 8rem;
    }
</style>
<div class="cinia-card p2 sh-no">
    <div class="front-page-card">
        
    </div>
</div>
`;

class FrontPageCard extends HTMLElement {

    constructor() {
        super();
        const temp = document.createElement('div');
        temp.innerHTML = rawTemplate;

        temp.querySelector('.front-page-card').innerHTML = this.innerHTML;

        this.innerHTML = temp.innerHTML;
    }
}
customElements.define('front-page-card', FrontPageCard);

