import { LitElement, html, css } from 'lit-element';

class TrackList extends LitElement {
  constructor() {
    super();
    this._track = [];
    this.headline = 'Track List';
    this.limit = 12;
  }

  static get properties() {
    return {
      _track: Array,
      headline: String,
      limit: Number
    };
  }

  set track(value) {
    if (value) {
      let oldVal = this._track;
      this._track = value;
      this.requestUpdate('track', oldVal);
    }  
  }
  get track() { return this._track; }

  static get styles() {
    return css`
      :host .track-list {
        display: flex;
        flex-direction: column;
        margin: 2em auto;
        max-width: 560px;
      }
      :host .track-list__element {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: .2em 0;
      }

      :host h3 {
        font-family: var(--heading-font-family);
        font-weight: var(--heading-font-weight);
      }

      :host h3 {
        font-size: var(--h3-font-size);
      }
    `;
  }

  render() {
    if (this.track && this.track.length > 0) {
      return html`
      <section class="track-list">
        ${this.track.map(track => html`
          <article class="track-list__element">
            <span>${track.name}</span>
            <img alt="${track.name.trim().replace(' ', '-')}"
                 src="${track.image.filter(image => image.size === 'small')[0]['#text']}" />
          </article>
        `).splice(0, this.limit)}
      </section>`;
    } else {
      return html`<section class="track-list"></section>`;
    }
  }
}

customElements.define('track-list', TrackList);