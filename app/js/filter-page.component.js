import {
  LitElement,
  html
} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

import { GreatArtists } from './artists.js';

import './artist-card.component.js';

export class FilterPage extends LitElement {
  static get properties() {
    // All of the properties of this component and a type for each (used when converting
    // attributes to property values).
    return { name: { type: String } };
  }

  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      ${GreatArtists.map(
        artist =>
          html`
            <artist-card .artist="${artist}"></artist-card>
          `
      )}
    `;
  }
}

customElements.define('filter-page', FilterPage);
