class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Soto Gonzalez Liu Kevin.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
