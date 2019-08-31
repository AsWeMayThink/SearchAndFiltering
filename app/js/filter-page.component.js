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
    return {};
  }

  constructor() {
    super();

    this.allGenres = new Set();
    this.allNationalities = new Set();

    GreatArtists.forEach(artist => {
      // Break the years apart into separate fields.

      // Split the genres into an array of separate tags and then add them all to a set
      // of all genres.
      artist.genre = artist.genre.split(',');
      artist.genre.forEach(genre => this.allGenres.add(genre));

      // Split the list of nationalities into an array of separate tags. As above, create
      // a set of all nationalities.
      artist.nationality = artist.nationality.split(',');
      artist.nationality.forEach(nationality =>
        this.allNationalities.add(nationality)
      );
    });

    this.allGenres = Array.from(this.allGenres);
    this.allNationalities = Array.from(this.allNationalities);
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="container">
        <div class="notification">
          <div class="field">
            <label class="label">Search Text</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Search within the names and bios"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Genre</label>
            <div class="control">
              ${this.allGenres.map(
                genre => html`
                  <label class="radio">
                    <input type="radio" name="answer" />
                    ${genre}
                  </label>
                `
              )}
            </div>
          </div>
          <div class="field">
            <label class="label">Nationality</label>
            <div class="control">
              ${this.allNationalities.map(
                nationality => html`
                  <label class="radio">
                    <input type="radio" name="answer" />
                    ${nationality}
                  </label>
                `
              )}
            </div>
          </div>

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
