var b_template = document.createElement("template"); //<template><template>
b_template.innerHTML = `
<h1>banner</h1>
<style>
h1{
    color: aqua;
}
</style>
`;

class TheBanner extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.shadowRoot.appendChild(c_template.content.cloneNode(true));
    }
}

customElements.define("the-banner", TheBanner);