import { rightPaneData } from "../data/data.js";

class RightPane {
    constructor() {
        this.rightPaneData = rightPaneData;
        this.achListArraySize = this.rightPaneData.achBlock.contentBlock.achList.length;
        this.hobListArraySize = this.rightPaneData.hobBlock.hobList.length;
    }

    render() {
        //create
        const rightPane = document.createElement("div");
        const heyImg = document.createElement("img");
        const contentHeader = document.createElement("h2");
        const contentIntro = document.createElement("div");
        const contentSubIntro = document.createElement("div");
        const profHead = document.createElement("h2");
        const profContent = document.createElement("p");
        const achHead = document.createElement("h2");
        const achContent = document.createElement("div");
        const achList = document.createElement("ul");
        const achListArray = [];
        for(let i = 0; i < this.achListArraySize; i++) {
            achListArray.push(document.createElement("li"));
        }
        const hobHead = document.createElement("h2");
        const hobContent = document.createElement("div");
        const hobList = document.createElement("ul");
        const hobListArray = [];
        for(let i = 0; i < this.hobListArraySize; i++) {
            hobListArray.push(document.createElement("li"));
        }
        const hobIconsArray = [];
        for(let i = 0; i < this.hobListArraySize; i++) {
            hobIconsArray.push(document.createElement("div"));
        }
        // ids and classes
        rightPane.classList.add("right-pane");
        heyImg.classList.add("hey");
        contentHeader.classList.add("content-header");
        contentIntro.classList.add("content-intro");
        contentSubIntro.classList.add("content-subintro");
        profHead.classList.add("prof-head");
        profContent.classList.add("prof-content");
        achHead.classList.add("ach-head");
        achContent.classList.add("ach-content");
        hobHead.classList.add("hob-head");
        hobContent.classList.add("hob-content");
        hobIconsArray.forEach((ele) => {
            ele.classList.add("ico");
        });
        for(let i = 0; i < this.hobListArraySize; i++) {
            hobIconsArray[i].classList.add(this.rightPaneData.hobBlock.hobList[i].ico);
        }

        //inner text and values
        heyImg.src = this.rightPaneData.hiImgSrc;
        contentHeader.innerHTML = this.rightPaneData.introBlock.title;
        contentIntro.innerText = this.rightPaneData.introBlock.content;
        contentSubIntro.innerText = this.rightPaneData.introBlock.subintro;
        profHead.innerText = this.rightPaneData.profBlock.title;
        profContent.innerHTML = this.rightPaneData.profBlock.content;
        achHead.innerText = this.rightPaneData.achBlock.title;
        let startContent = this.rightPaneData.achBlock.contentBlock.startContent;
        let achListData = this.rightPaneData.achBlock.contentBlock.achList;
        let endContent = this.rightPaneData.achBlock.contentBlock.endContent;
        achContent.innerHTML = startContent;
        for(let i = 0; i < achListArray.length; i++) {
            achListArray[i].innerText = achListData[i];
        }
        achListArray.forEach((el) => {
            achList.appendChild(el);
        });
        
        achContent.appendChild(achList);
        
        achContent.innerHTML += endContent;
        
        let hobListData = this.rightPaneData.hobBlock.hobList;
        hobHead.innerText = this.rightPaneData.hobBlock.title;
        for(let i = 0; i < hobListArray.length; i++) {
            hobListArray[i].innerText = hobListData[i].title;
            hobListArray[i].appendChild(hobIconsArray[i]);
        }
        hobListArray.forEach((el) => {
            hobList.appendChild(el);
        });
        hobContent.appendChild(hobList);

        //append
        rightPane.appendChild(heyImg);
        rightPane.appendChild(contentHeader);
        rightPane.appendChild(contentIntro);
        rightPane.appendChild(contentSubIntro);
        rightPane.appendChild(profHead);
        rightPane.appendChild(profContent);
        rightPane.appendChild(achHead);
        rightPane.appendChild(achContent);
        rightPane.appendChild(hobHead);
        rightPane.appendChild(hobContent);

        return rightPane;
    }

    mount(el) {
        if(el) {
            el.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render());
    }
}

export {RightPane};