class Footer extends HTMLElement {
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
        <footer>
            <hr>
            <p>
                Disclaimer: All content on this website is purely fictional and should be regarded as such. Any resemblance to actual persons, places, or events is entirely coincidental.
            <p/>
            <p>
                <small><a href="${this.getAttribute(
                  "root"
                )}screens/contact/contact.html">Contact</a></small>
            </p>
        </footer>
      `;
  }
}

customElements.define("zoo-per-footer", Footer);
