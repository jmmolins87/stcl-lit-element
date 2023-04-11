import { LitElement, html } from 'lit-element';

class Record extends LitElement {
    static get properties() {
        return {
            nombre: { type: String },
            apellidos: { type: String },
            edad: { type: Number }
        };
    }
    constructor() {
        super();
        this.nombre = this.apellidos = this.edad = "";
    }
    driving(item) {
        return ((event) => {
            let valor = event.target.value;
            this[item] = valor;
        }) 
    }
    save() {
        let detail = {
            nombre: this.nombre,
            apellidos: this.apellidos,
            edad: this.edad
        }
        let opciones = {
            detail: detail,
            bubble: true,
            composed: true
        }
        this.dispatchEvent(new CustomEvent('savePerson', opciones));
    }
    render() {
        return html`
            <form>
                <label>Nombre:
                    <input @input="${this.driving("nombre")}" .value="${this.nombre}"/>
                </label>
                <label>Apellidos:
                    <input @input="${this.driving("apellidos")}" .value="${this.apellidos}"/>
                </label>
                <label>Edad:
                    <input @input="${this.driving("edad")}" .value="${this.edad}"/>
                </label>
                <button @click="${ this.save }" type="button">Guardar</button>
            </form>
        `;
    }
}

window.customElements.define('wc-record', Record);