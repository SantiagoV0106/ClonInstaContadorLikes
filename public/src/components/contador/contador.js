class MyCounter extends HTMLElement {
    static get observedAttributes() {
        return ["like"]
    }

    attributeChangedCallback(prop, oldValue, newValue) {
        this[prop] = newValue;
        this.render();
        this.addEventListener();
    }

    constructor(){
        super()
        this.attachShadow({mode:'open'})
        this.increaseLikes = this.increaseLikes.bind(this)
    }
    
    connectedCallback() {
        this.render();
        this.addEventListener();
    }
    dissconnectedCallback() {
        this.removeEventListener();
    }
    
    
    addEventListener() {
        const button = this.shadowRoot.querySelector("button")
        button.addEventListener("click", this.increaseLikes)
    }
    removeEventListeners() {
        const button = this.shadowRoot.querySelector("button")
        button = this.removeEventListener("click", this.increaseLikes)
    }
   
    increaseLikes(){
        const LikesValue = Number (this.getAttribute("like"))
        this.setAttribute("like", LikesValue + 1)
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/Post/styles.css">
        <section class = "boton">

        <button id="Like"><image src="./elementos/Like.png" width=20px></button>
        <h3 id="Likes">${this.like || 0} likes</h3>

        </section>
        `
    }
}


customElements.define("my-counter", MyCounter);
export default MyCounter;