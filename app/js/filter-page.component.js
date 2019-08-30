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
      <div class="container">
        <div class="notification">
          <div class="columns is-multiline is-mobile">
            ${GreatArtists.map(
              artist =>
                html`
                  <div class="column is-one-quarter">
                    <artist-card .artist="${artist}"></artist-card>
                  </div>
                `
            )}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('filter-page', FilterPage);
