import "./components/index.js"
import data from "./components/data.js"
import "./components/contador/contador.js"


class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const compts = data.map(({ username, comments, desc, post, fotoperfil, fecha }) =>
            `<my-post
            post="${post}"
            fotoperfil="${fotoperfil}"
            desc="${desc}"
            comment="${comments}"
            date="${fecha}"
            username="${username}"
            ></my-post>
            <my-counter></my-counter>`)
        console.log(compts)
        this.shadowRoot.innerHTML = compts.join("")
    }

}

customElements.define('app-container', AppContainer);
