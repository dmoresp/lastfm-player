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
    this.getTopTracks(this.config.artists[0]);
  }

  async getTopTracks(artist) {
    let { toptracks } = await Api.byArtist(artist, 'getTopTracks');
    let topTracksLoaded = new CustomEvent('top-tracks-loaded', {
      bubbles: true,
      composed: true,
      detail: {
        more: { 
          title: artist,
          subtitle: 'Top Tracks'
        },
        track: toptracks.track || []
      }
    });
    this.dispatchEvent(topTracksLoaded); 
  }
}

customElements.define('data-service', DataService);
