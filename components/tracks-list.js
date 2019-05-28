import { LitElement, html } from 'lit-element';

class TracksList extends LitElement {
  constructor() {
    super();
    this._tracks = [];
    this._isLoaded = false;
  }

  static get properties() {
    return {
      isLoaded: { type: Boolean },
      tracks: {
        type: Array
      },
      artists: {
        type: Array
      }
    };
  }
  get isLoaded() {
    return this._isLoaded;
  }

  set isLoaded(isLoaded) {
    let oldVal = this.isLoaded;
    this._isLoaded = isLoaded;
    this.requestUpdate('isLoaded', oldVal);
  }

  set tracks(val) {
    let oldVal = this.tracks;
    this._tracks = val;
    this.requestUpdate('tracks', oldVal);
  }

  get tracks() {
    return this._tracks;
  }

  tracksHandler(event) {
    this.isLoaded = true;
    this.tracks = event.detail.data;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('top-tracks-loaded', this.tracksHandler.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('top-tracks-loaded');
  }

  render() {
    if (this.isLoaded) {
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