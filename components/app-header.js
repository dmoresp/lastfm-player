import { LitElement, html, css } from 'lit-element';

class AppHeader extends LitElement {
  constructor() {
    super();
    this.coverImage = { text: null, url: null };
  }

  static get properties() {
    return {
      title: String,
      subtitle: String,
      coverImage: Object,
      monthlyListeners: Number
    };
  }
  
  static get styles() {
    return css`
      :host {
        --cover-image-size: var(--img-size-small);
        --cover-image-url: var('../assets/img/playing-flute.jpg');
      }
      :host .header-background {
        background-position: 50%;
        background-repeat: norepeat;
        background-size: cover;
        filter: blur(5px);
        height: 60%;
        position: absolute;
        width: 100%;
        z-index: -1;
      }
      :host .app-header {
        text-align: center;
        padding-bottom: 1em;
        position: relative;
      }
      :host .app-header__title, .app-header__subtitle {
        font-family: var(--heading-font-family);
        font-size: var(--h1-font-size);
        font-weight: var(--heading-font-weight);
      }
      :host .app-header__title {
        margin-block-end: 0;
      }
      :host .app-header__subtitle {
        margin-block-start: 0;
      }
      :host .app-header__title:after {
        display: block;
        content: "\\1F65F";
      }
      :host .cover-image__container {
        margin: 0 auto;
        max-width: var(--conver-image-size, 280px);
      }
      :host .cover-image__item {
        border-radius: 50%;
        height: auto;
        max-width: 100%;
      }
    `;
  }

  render() {
    return html`
      <header class="app-header">
        <div class="header-background" style="background-image: url('${this.coverImage.url ? this.coverImage.url : './assets/img/playing-flute.jpg'}');"></div>
        <div class="cover-image__container">
          <img class="cover-image__item" 
               alt="${this.coverImage.text || 'not-found'}" 
               src="${this.coverImage.url || './assets/img/playing-flute.jpg'}" />
        </div>
        <h1 class="app-header__title">${this.title}</h1>
        <h2 class="app-header__subtitle">${this.subtitle}</h2>
      </header>
    `;  
  }
}

customElements.define('app-header', AppHeader);
