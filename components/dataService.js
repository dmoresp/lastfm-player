import { LitElement } from 'lit-element'; 
import { ARTISTS } from '../config/initial';
import Api from './api';

class DataService extends LitElement {
  constructor() {
    super();
    this.config = {
      artists: ARTISTS
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    this.getTopTracks();
  }

  async getTopTracks() {
    let { toptracks } = await Api.byArtist(this.config.artists[0], 'getTopTracks');
    let topTracksLoaded = new CustomEvent('top-tracks-loaded', {
      bubbles: true,
      composed: true,
      detail: {
        data: toptracks
      }
    });
    this.dispatchEvent(topTracksLoaded); 
  }
}

customElements.define('data-service', DataService);
