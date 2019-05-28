import { LitElement, html } from '../node_modules/lit-element';
import './dataService';
import './tracks-list';

class AppShell extends LitElement {

  static get properties() {
    return {
      data: {
        type: Array,

      }
    };
  }

  constructor() {
    super();
    this.data = [];
  }

  handlerDataEvent(event) {
    this.data = [...event.detail.data.track];
  }

  firstUpdated() {
    super.firstUpdated();
    let dataService = this.shadowRoot.getElementById('data');

    dataService.addEventListener('top-tracks-loaded', this.handlerDataEvent.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    let dataService = this.shadowRoot.getElementById('data');

    dataService.removeEventListener('top-tracks-loaded', this.handlerDataEvent.bind(this));
  }

  render() {
    return html`
      <h1>Hello world</h1>
      <tracks-list .tracks=${this.data}></tracks-list>
      <data-service id="data"></data-service>
    `;
  }

}

customElements.define('app-shell', AppShell);