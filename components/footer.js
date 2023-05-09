class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <footer>
            <hr>
            <p>
                Disclaimer: All content on this website is purely fictional and should be regarded as such. Any resemblance to actual persons, places, or events is entirely coincidental.
            <p/>
            <p>
                <small><a href="/src/contact/contact.html">Contact</a></small>
            </p>
        </footer>
      `;
  }
}

customElements.define("zoo-per-footer", Footer);
