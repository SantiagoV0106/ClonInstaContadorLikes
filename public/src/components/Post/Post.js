

class MyPost extends HTMLElement {
    static get observedAttributes(){
    return['username','fotoperfil', 'post','desc','date','comment']
    }
    
    constructor(){
        super()
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(prop, oldValue, newValue){
        this[prop]= newValue
        this.render();
    }
    
    render (){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/Post/styles.css">
        <section class="frame">
        <image class="mipost"src="${this.post}"></image>
        <image class="perfil"src="${this.fotoperfil}"></image>        
        <h1 class= "desc"> ${this.desc}</h1>
        <h1 class= "comments"> ${this.comment}</h1>
        <h1 class= "date"> ${this.date}</h1>
        <h1 class= "username"> ${this.username}</h1>        
        <image class="like" src="./elementos/Like.png"></image>
        <image class="Cicon" src="./elementos/Commenticon.png"></image>
        <image class="share" src="./elementos/Share.png"></image>
        <image class="save" src="./elementos/save2.jpeg"></image>
        <image class="parriba" src="./elementos/puntosarriba.jpeg"></image>
        <image class="puntitos" src="./elementos/puntitos.jpeg"></image>        
        </section>        
            `;

}

 
}
customElements.define('my-post', MyPost); 
export default MyPost;