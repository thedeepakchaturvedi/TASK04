class ContentBox {
    constructor() {

    }

    render() {
        //create
        const outerBox = document.createElement("div");
        const contentBox = document.createElement("div");

        //classes and ids
        outerBox.classList.add("outer-box");
        outerBox.id = "content-id";
        contentBox.classList.add("content-box");

        //append
        outerBox.appendChild(contentBox);

        return outerBox;
    }

    mount(el) {
        if(el) {
            el.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render());
    }
}

export {ContentBox};