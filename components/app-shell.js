import { LitElement, html } from '../node_modules/lit-element';
import './dataService';
import './tracks-list';

class AppShell extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <tracks-list></tracks-list>
      <data-service></data-service>
    `;
  }

}

customElements.define('app-shell', AppShell);