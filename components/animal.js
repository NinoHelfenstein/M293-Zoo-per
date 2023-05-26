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
        <img src="../../assets/flog.png" alt="Flog, Flamingo Dog">
        <div class="name-age-wrapper">
          <div>
            <b class="name">Flog</b></div>
            <div class="age">
              1.5 Years
            </div>
          </div>
        <div class="desc">
          Flog, the extraordinary Flamingo Dog, is a captivating canine companion that effortlessly merges the grace of a flamingo with the loyalty of a dog. With its slender legs, vibrant feathers, and playful nature, Flog stands out as a truly remarkable and enchanting companion. Whether gracefully striding or engaging in playful antics, Flog brings a touch of whimsy and joy to every moment, capturing the hearts of all who encounter its unique charm. Its remarkable appearance and endearing personality make Flog an extraordinary addition to any family seeking a loyal and fascinating four-legged friend.
        </div>
      </div>
    `;
  }
}

customElements.define("zoo-per-animal", Animal);
