import { LitElement, html } from 'lit-element';
import './dataService';
import './app-header';
import './track-list';
import './customScroll';

class AppShell extends LitElement {
  constructor() {
    super();
    this.data = {
      more: {
        title: null,
        subtitle: null,
        coverImage: null
      },
      track: null
    };
  }

  static get properties() {
    return {
      data: Object
    };
  }

  firstUpdated() {
    super.firstUpdated();
    const dataServiceRef = this.shadowRoot.getElementById('data-service');
    dataServiceRef.addEventListener('top-tracks-loaded', this.dataEventHandler.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    const dataServiceRef = this.shadowRoot.getElementById('data-service');
    dataServiceRef.removeEventListener('top-tracks-loaded', this.dataEventHandler.bind(this));
  }

  dataEventHandler(event) {
    this.data = Object.assign(this.data, event.detail);
    this.requestUpdate();
  }

  render() {
    return html`
      <app-header 
        title=${this.data.more.title}
        subtitle=${this.data.more.subtitle}
        cover-image="${this.data.more.coverImage || ''}"></app-header>
      <track-list .track=${this.data.track}></track-list>
      <custom-scroll></custom-scroll>
      <data-service id="data-service"></data-service>
    `;
  }

}

customElements.define('app-shell', AppShell);