class Nav extends HTMLElement {
  constructor(attributes) {
    super();
    if (attributes) {
      Object.keys(attributes).forEach((attr) => {
        this.setAttribute(attr, attributes[attr]);
      });
    }
  }

  connectedCallback() {
    this.innerHTML = `
        <nav>
            <a href="${this.getAttribute("root")}index.html"><img alt="Logo" src="/assets/logo.png" height="70"></a>
            <ul>
                <li><a href="${this.getAttribute("root")}screens/about/about.html">About</a></li>
                <li><a href="${this.getAttribute("root")}screens/tickets/tickets.html">Tickets</a></li>
                <li><a href="${this.getAttribute("root")}screens/animals/animals.html">Animals</a>
                    <ul>
                        <li><a href="${this.getAttribute("root")}screens/animals/animals.html">View all Animals</a></li>
                        <li><a href="${this.getAttribute("root")}screens/animals/flog.html">Flog</a></li>
                        <li><a href="${this.getAttribute("root")}screens/animals/flecko.html">Flecko</a></li>
                        <li><a href="${this.getAttribute("root")}screens/animals/usain-blob.html">Usain Blob</a></li>
                        <li><a href="${this.getAttribute("root")}screens/animals/rooster-coleman.html">Rooster Coleman</a></li>
                        <li><a href="${this.getAttribute("root")}screens/animals/emaeaehnuel-lasker.html">Emäähnuel Lasker</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
      `;
  }
}

customElements.define("zoo-per-nav", Nav);
