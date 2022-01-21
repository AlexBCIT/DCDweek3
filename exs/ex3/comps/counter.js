var c_template = document.createElement("template"); //<template><template>
c_template.innerHTML = `
<style>
#counter {
    background-color: rgba(183, 209, 193, 0.533);
    display: flex;
    border: 5px solid black;
}

#counter > button {
    width: 30px;
    height: 30px;
    background-color: rgb(201, 180, 278);
    border: none;
    border-radius: 5px;
    margin: 20px;
}

#counter div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
#bar {
    width: 0px;
    height: 15px;
    background-color: #675;
}
</style>
<div id="counter">
<button id="d_but">-</button>
<div id="number">1</div>
<button id="i_but">+</button>
</div>
<div id="bar"></div>
`;

class TheCounter extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.num = 1;
    }

    connectedCallback(){
        this.shadowRoot.appendChild(c_template.content.cloneNode(true));
        this.shadowRoot.querySelector("#i_but").onclick = () => this.inc(); 
        this.shadowRoot.querySelector("#d_but").onclick = () => this.dec(); 
    }

    dec(){
        this.num = this.num - 1; 
        this.shadowRoot.querySelector("#number").innerText = this.num;
        this.shadowRoot.querySelector("#bar").style.width = (this.num*10)+"px";
    }

    inc(){
        this.num = this.num + 1; 
        this.shadowRoot.querySelector("#number").innerText = this.num;
        this.shadowRoot.querySelector("#bar").style.width = (this.num*10)+"px";
    }
}

customElements.define("the-counter", TheCounter);