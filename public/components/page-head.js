

const template = document.createElement('template');
template.innerHTML = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>#title#</title>
    <meta name="description" content="#description#">
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles/pico.min.css">
    <link rel="stylesheet" href="../styles-alt.css">
</head>
`;


class PageHead extends HTMLElement {


    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const titleText = this.getAttribute("title") || "Coralia";
        const descriptionText = this.getAttribute("description") || "Coralia - Data-driven solutions for healthcare";

        const temp = template.content.cloneNode(true);
        temp.innerHTML = temp.innerHTML.replace('#title#', titleText);
        temp.innerHTML = temp.innerHTML.replace('#description#', descriptionText);

        shadow.appendChild(temp);
    }
}
customElements.define('page-head', PageHead);