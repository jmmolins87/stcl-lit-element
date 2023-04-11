import { LitElement, html } from "lit-element";
import './table.js';
import './record.js';

class Home extends LitElement {
    static get properties() {
        return {
            list: {type: Array}
        }
    }
    constructor() {
        super();
        this.list = [
            { name: "Juanma", surname: "Molins", age: 35 },
            { name: "Carolina", surname: "Pérez", age: 38 },
            { name: "Luis", surname: "Molins", age: 30 }
        ];
    }
    addToList(event) {
        let newList = Object.assign([], this.list);
        newList.push(event.detail);
        this.list = newList;
    }
    render() {
        return html`
            <wc-record @savePerson="${this.addToList}"></wc-record>
            <wc-table .list="${this.list}"></wc-table>
        `;
    }
}

window.customElements.define('wc-home', Home);