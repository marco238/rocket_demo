import { html, LitElement, css } from "lit";

export class IngButton extends LitElement {
    static get is() {
        return 'ing-button';
    }

    static get styles() {
      return css`
        button {
          background-color: orange;
          padding: 5px 10px;
          border-radius: 4px;
          border: none;
          color: white;
          cursor: pointer;
        }
      `
    }

    render() {
      return html`
        <button @click=${this._handleClick}>Button</button>
      `;
    }

    _handleClick() {
      console.log('click');
    }
}
