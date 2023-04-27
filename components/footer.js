class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <hr>
            <p>
                <small><a href="">Imprint</a></small>
                All Rights Reserved
                <small><a href="">Contact</a></small>
                <small><a href="">Data protection regulation</a></small>
            </p>
        </footer>
      `;
    }
}

customElements.define("zoo-per-footer", Footer);
