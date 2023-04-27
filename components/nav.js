class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav>
            <a href="/src/index/index.html"><img alt="Logo" src="/assets/logo.png" height="70"></a>
            <ul>
                <li><a href="/src/about/about.html">About</a></li>
                <li><a href="/src/tickets/tickets.html">Tickets</a></li>
                <li><a href="/src/animals/animals.html">Animals</a>
                    <ul>
                        <li><a href="/src/animals/animals.html">View all Animals</a></li>
                        <li><a href="/src/animals/flog.html">Flog</a></li>
                        <li><a href="/src/animals/flecko.html">Flecko</a></li>
                        <li><a href="/src/animals/usain-blob.html">Usain Blob</a></li>
                        <li><a href="/src/animals/rooster-coleman.html">Rooster Coleman</a></li>
                        <li><a href="/src/animals/emaeaehnuel-lasker.html">Emäähnuel Lasker</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
      `;
    }
}

customElements.define("zoo-per-nav", Nav);
