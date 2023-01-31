import { footerData } from "../data/data.js";

class Footer {
    constructor() {
        this.footerData = footerData;
    }

    render() {
        //create
        const footer = document.createElement("div");
        const footerContent = document.createElement("div");
        const first = document.createElement("div");
        const imgHTML = document.createElement("img");
        const andTextDiv = document.createElement("div");
        const imgCSS = document.createElement("img");

        //classes and ids
        footer.classList.add("footer");
        footerContent.classList.add("footer-content");
        first.classList.add("first");
        andTextDiv.classList.add("div");

        //inner text and values
        first.innerHTML = this.footerData.title;
        imgHTML.src = this.footerData.html;
        andTextDiv.innerHTML = "&";
        imgCSS.src = this.footerData.css;

        //append values
        footer.appendChild(footerContent);
        footerContent.appendChild(first);
        footerContent.appendChild(imgHTML);
        footerContent.appendChild(andTextDiv);
        footerContent.appendChild(imgCSS);

        return footer;
    }

    mount(el) {
        if(el) {
            el.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render());
    }
}

export {Footer};