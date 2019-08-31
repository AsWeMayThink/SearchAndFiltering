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

    this.selectedGenres = new Set();
    this.selectedNationalities = new Set();

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

    this.collection = new PourOver.Collection(GreatArtists);

    let genresFilter = PourOver.makeInclusionFilter('genre', this.allGenres);
    let nationalitiesFilter = PourOver.makeInclusionFilter(
      'nationality',
      this.allNationalities
    );

    this.collection.addFilters([genresFilter, nationalitiesFilter]);

    this.filter();
  }

  createRenderRoot() {
    return this;
  }

  toggleGenre(e, genre) {
    if (e.target.checked) {
      // Add the genre to the list of those to include.
      this.selectedGenres.add(genre);
    } else {
      // Remove the genre from the list of those to include.
      this.selectedGenres.delete(genre);
    }

    this.filter();
  }

  toggleNationality(e, nationality) {
    if (e.target.checked) {
      // Add the nationality to the list of those to include.
      this.selectedNationalities.add(nationality);
    } else {
      // Remove the nationality from the list of those to include.
      this.selectedNationalities.delete(nationality);
    }

    this.filter();
  }

  filter() {
    let matches = this.collection.getAllItems();

    // Go through all the genres and OR together their filter results.
    if (this.selectedGenres.size) {
      let genres = Array.from(this.selectedGenres).reduce((filter, genre) => {
        if (!filter) {
          return this.collection.filters.genre.getFn(genre);
        } else {
          return filter.or(this.collection.filters.genre.getFn(genre));
        }
      }, null);

      matches = matches.and(genres);
    }

    // Then do the same for the nationalities.
    if (this.selectedNationalities.size) {
      let nationalities = Array.from(this.selectedNationalities).reduce(
        (filter, nationality) => {
          if (!filter) {
            return this.collection.filters.nationality.getFn(nationality);
          } else {
            return filter.or(
              this.collection.filters.nationality.getFn(nationality)
            );
          }
        },
        null
      );

      matches = matches.and(nationalities);
    }

    // And mark all the appropriate items.
    GreatArtists.forEach(artist => (artist.show = false));
    matches.cids.forEach(cid => (GreatArtists[cid].show = true));

    this.requestUpdate();
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
                    <input
                      type="checkbox"
                      name="answer"
                      @change="${e => this.toggleGenre(e, genre)}"
                    />
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
                    <input
                      type="checkbox"
                      name="answer"
                      @change="${e => this.toggleNationality(e, nationality)}"
                    />
                    ${nationality}
                  </label>
                `
              )}
            </div>
          </div>

          <div class="columns is-multiline is-mobile">
            ${GreatArtists.map(artist => {
              if (artist.show) {
                return html`
                  <div class="column is-one-quarter">
                    <artist-card .artist="${artist}"></artist-card>
                  </div>
                `;
              } else {
                return html``;
              }
            })}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('filter-page', FilterPage);
