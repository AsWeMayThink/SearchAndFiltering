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

    this.initializePourOver();
  }

  createRenderRoot() {
    return this;
  }

  initializePourOver() {
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

  toggleGenre(e, genre) {
    if (e.target.checked) {
      // Add the genre to the list of those to include.
      this.collection.filters.genre.unionQuery(genre);
    } else {
      // Remove the genre from the list of those to include.
      this.collection.filters.genre.removeSingleQuery(genre);
    }

    console.log(this.collection.filters.genre);
    this.filter();
  }

  toggleNationality(e, nationality) {
    if (e.target.checked) {
      // Add the nationality to the list of those to include.
      this.collection.filters.nationality.unionQuery(nationality);
    } else {
      // Remove the nationality from the list of those to include.
      this.collection.filters.nationality.removeSingleQuery(nationality);
    }

    this.filter();
  }

  filter() {
    // By default, we want all the artists.
    let matches = this.collection.getAllItems();

    // If we have a current query in the genre filter, AND it with the matches.
    if (
      this.collection.filters.genre.current_query &&
      this.collection.filters.genre.current_query.stack.length
    ) {
      matches = matches.and(this.collection.filters.genre.current_query);
    }

    // If we have a current query in the nationality filter, AND it with the matches.
    if (
      this.collection.filters.nationality.current_query &&
      this.collection.filters.nationality.current_query.stack.length
    ) {
      matches = matches.and(this.collection.filters.nationality.current_query);
    }

    // And mark all the appropriate items for hiding first and then only the items
    // which passed the filters to show.
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
