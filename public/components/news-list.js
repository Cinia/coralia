const template = document.createElement('template');
template.innerHTML = `
<style>
div.news-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    div.news-item {
        h2 {
            margin: 0;
            color: var(--primary-color);
        }

        div.news-date {
            font-size: 0.9rem;
            color: var(--text-secondary-color);
        }
    }

    div.pagination {

        button {
            padding: 0.5rem 1rem;
            margin-right: 1rem;
            font-size: 0.9rem;
            text-transform: uppercase;

            background: transparent;
            border: solid 1px var(--primary-color);
            color: var(--primary-color);
            border-radius: 0.25rem;

            &:hover {
                background-color: var(--primary-color);
                color: var(--text-color-on-primary);
                cursor: pointer;
            }

            &:disabled {
             
             filter: grayscale(100%) opacity(0.5);
             cursor: not-allowed;
            }
            
        }
    }
}
</style>
<div class="news-list">
    <slot></slot>    
    <div id="listing"></div>

    <div class="pagination row">
        <button class="prev-page" id="prev-page-btn">Edellinen sivu</button>
        <button class="next-page" id="next-page-btn">Seuraava sivu</button>
    </div>
    
</div>
`;

const loadingTemplate = document.createElement('template');
loadingTemplate.innerHTML = `
<style>
    </style>
    <div class="loading">
        Loading news...
    </div>
`;

/**
 * Show a list of news items from the /content/news/ folder
 */


class NewsList extends HTMLElement {

    shadow = null;
    news = [];
    page = 0;
    size = 3;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        const targetSize = this.getAttribute("pagesize") || 3;
        this.size = parseInt(targetSize, 10);

        const targetPage = this.getAttribute("page") || 0;
        this.page = parseInt(targetPage, 10);


        this.loadNews().then(() => {
            this.shadow.removeChild(this.shadow.querySelector('.loading'));
            this.shadow.appendChild(template.content.cloneNode(true));
            this.updateListing();
            this.paginationInit();
        })

        this.shadow.appendChild(loadingTemplate.content.cloneNode(true));
    }

    async loadNews() {
        const res1 = await fetch("content/news/index.json");
        const data = await res1.json();

        this.news = data.filter(item => {
            const pubDate = new Date(item.date || Date.now() + 5000);
            return pubDate <= new Date();
        }).sort((a, b) => {
            const dateA = new Date(a.date || Date.now());
            const dateB = new Date(b.date || Date.now());
            return dateB - dateA;
        });

    }

    updateListing() {
        if (this.news.length === 0) {
            this.shadow.innerHTML = "<div>No news items found.</div>";
            return;
        }


        const temp = this.shadow;
        const listingEl = temp.querySelector('#listing');

        const targetNews = this.news.slice(this.page * this.size, (this.page + 1) * this.size);

        listingEl.innerHTML = '';
        targetNews.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.classList.add('news-item');

            const titleEl = document.createElement('h2');
            titleEl.textContent = item.title || "Untitled";

            const dateEl = document.createElement('div');
            dateEl.classList.add('news-date');
            const pubDate = new Date(item.date || Date.now());
            dateEl.textContent = pubDate.toLocaleDateString();

            itemEl.appendChild(titleEl);
            itemEl.appendChild(dateEl);

            listingEl.appendChild(itemEl);

        });

        // remove loading indicator if it still exists
        const loader = this.shadow.querySelector('.loading');
        if (loader) {
            this.shadow.removeChild(loader);
        }

        // Disable/enable pagination buttons
        const prevBtn = this.shadow.querySelector('#prev-page-btn');
        const nextBtn = this.shadow.querySelector('#next-page-btn');

        if (this.page === 0) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }

        if ((this.page + 1) * this.size >= this.news.length) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }


    }

    paginationInit() {

        this.shadow.querySelector('#prev-page-btn').addEventListener('click', this.prevPage.bind(this));
        this.shadow.querySelector('#next-page-btn').addEventListener('click', this.nextPage.bind(this));

    }

    nextPage() {
        if (this.page + this.size >= this.news.length - 1) {
            return;
        }
        this.page++;
        this.updateListing();
    }

    prevPage() {
        if (this.page > 0) {
            this.page--;
            this.updateListing();
        }

    }
}

customElements.define('news-list', NewsList);
