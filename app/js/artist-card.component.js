import {
  LitElement,
  html
} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

export class ArtistCard extends LitElement {
  static get properties() {
    // All of the properties of this component and a type for each (used when converting
    // attributes to property values).
    return { artist: { type: Object } };
  }

  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  image(number) {
    if (number < 0 || number > this.artist.paintings) {
      number = 0;
    }

    let fileFriendlyArtistName = this.artist.name.replace(/\s/gi, '_');
    return `./img/${fileFriendlyArtistName}/${fileFriendlyArtistName}_${number}.jpg`;
  }

  render() {
    return html`
      <style>
        artist-card .card-image figure {
          display: flex;
        }

        artist-card .card-image figure img {
          object-fit: contain;
        }
      </style>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="${this.image(1)}" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">${this.artist.name}</p>
              <p class="subtitle is-6">${this.artist.years}</p>
              <p class="subtitle is-7">(${this.artist.paintings} paintings)</p>
            </div>
          </div>

          <div class="content is-size-7">
            ${this.artist.bio}
            <br />
            <a href="${this.artist.wikipedia}">wikipedia</a>
          </div>
        </div>
      </div>
    `;
  }
}

// Note: Your element must have a hypen in the name (for example, "hello-world"). It's a requirement
// so that our components don't collide with future additions to HTML.
customElements.define('artist-card', ArtistCard);
