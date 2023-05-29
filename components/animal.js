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
          <img src="${this.getAttribute("image")}" alt="${this.getAttribute("alt")}">
          <div class="name-age-wrapper">
            <div><b class="name">${this.getAttribute("name")}</b></div>
            <div class="age">${this.getAttribute("age")}</div>
          </div>
          <div class="desc">
            ${this.getAttribute("description")}
          </div>
        </div>
    `;
  }
}

customElements.define("zoo-per-animal", Animal);
