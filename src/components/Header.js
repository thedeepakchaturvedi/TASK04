import { navBarData } from "../data/data.js";

class Header {
    constructor() {
        this.navBarData = navBarData;
    }

    render () {
        // create
        const navContainer = document.createElement("div");
        const navBar = document.createElement("nav");
        const logo = document.createElement("div");
        const links = document.createElement("div");
        const lin = document.createElement("ul");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const linkAnchor1 = document.createElement("a");
        const linkAnchor2 = document.createElement("a");

        //classes and ids
        navContainer.classList.add("nav-container");
        navBar.classList.add("nav-bar");
        logo.classList.add("logo");
        links.classList.add("links");
        lin.classList.add("lin");

        //inner texts and attr
        logo.innerText = this.navBarData.logo;
        linkAnchor1.href = this.navBarData.links[0].href;
        linkAnchor1.innerText = this.navBarData.links[0].title;
        linkAnchor2.href = this.navBarData.links[1].href;
        linkAnchor2.download = "Deepak_Resume";
        linkAnchor2.innerText = this.navBarData.links[1].title;

        //append
        navContainer.appendChild(navBar);
        navBar.appendChild(logo);
        navBar.appendChild(links);
        links.appendChild(lin);
        lin.appendChild(li1);
        lin.appendChild(li2);
        li1.appendChild(linkAnchor1);
        li2.appendChild(linkAnchor2);

        return navContainer;
    }

    mount(el) {
        if(el) {
            el.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render());
    }
}

export {Header};