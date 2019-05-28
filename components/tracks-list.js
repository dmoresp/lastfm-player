import { LitElement, html } from 'lit-element';

class TracksList extends LitElement {

  static get properties() {
    return {
      tracks: {
        type: Array
      },
      artists: {
        type: Array
      }
    };
  }

  render() {
    if (!this.tracks || this.tracks.length === 0) {
      return html`<section class="tracks"></section>`;
    } else {
      return html`<section class="tracks">
        ${this.tracks.map(track => html`${track}`)}
      </section>
    `;
    }
  }
}

customElements.define('tracks-list', TracksList);