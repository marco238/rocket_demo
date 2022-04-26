import { html, LitElement, css } from "lit";

export class IngButton extends LitElement {
    static get is() {
        return 'ing-button';
    }

    static get styles() {
      return css`
        button {
          background-color: orange;
          padding: 10px 15px;
          border-radius: 4px;
          border: none;
          font-size: 18px;
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
