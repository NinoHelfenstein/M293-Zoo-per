class Animal extends HTMLElement {
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
        <div class="animal">
          <img src="${this.getAttribute("image")}">
          <div class="name-age-wrapper">
            <div><b>${this.getAttribute("name")}</b></div>
            <div>${this.getAttribute("age")}</div>
          </div>
          <div class="desc">
            ${this.getAttribute("description")}
          </div>
        </div>
    `;
  }
}

customElements.define("zoo-per-animal", Animal);
