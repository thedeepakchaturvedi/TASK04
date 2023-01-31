import { leftPaneData } from "../data/data.js";

class LeftPane {
    constructor() {
        this.leftPaneData = leftPaneData;
        this.profLinkContainerArrayLength = 4;
        this.skillContainerArrayLength = 15;
    }

    render() {
        //create
        const leftPane = document.createElement("div");
        const leftPaneContainer = document.createElement("div");
        const imgContainer = document.createElement("div");
        const imgBox = document.createElement("div");
        const name = document.createElement("div");
        const designation = document.createElement("div");
        const profLinkContainer = document.createElement("div");
        const profLinkContainerArray = [];
        const anchorArray = [];
        const profLinkImageArray = [];
        for(let i = 0; i < this.profLinkContainerArrayLength; i++) {
            let linkElement = document.createElement("div");
            profLinkContainerArray.push(linkElement);
            let anchorElement = document.createElement("a");
            anchorArray.push(anchorElement);
            let imgElement = document.createElement("img");
            profLinkImageArray.push(imgElement);
        }
        
        const skillHead = document.createElement("div");
        const hrLine = document.createElement("div");
        const skillContainer = document.createElement("div");
        const skillContainerArray = [];
        const skillImgArray = [];
        const skillNameArray = [];
        for(let i = 0; i < this.skillContainerArrayLength; i++) {
            let skillElement = document.createElement("div");
            skillContainerArray.push(skillElement);
            let skillImgElement = document.createElement("img");
            skillImgArray.push(skillImgElement);
            let skillNameElement = document.createElement("div");
            skillNameArray.push(skillNameElement);
        }

        //classes and ids
        leftPane.classList.add("left-pane");
        leftPaneContainer.classList.add("left-pane-content");
        imgContainer.classList.add("img-container");
        imgBox.classList.add("img-box");
        name.classList.add("name");
        designation.classList.add("designation");
        profLinkContainer.classList.add("prof-links-container");
        const socialLinksClassName = ["git-container","linkedin-container","instagram-container","whatsapp-container"];
        profLinkContainerArray.forEach((ele) => {
            ele.classList.add("icon-container");
        });
        for(let i = 0; i < profLinkContainerArray.length; i++) {
            profLinkContainerArray[i].classList.add(socialLinksClassName[i]);
        }
        skillHead.classList.add("skill-head");
        hrLine.classList.add("hr-line");
        skillContainer.classList.add("skill-container");
        skillContainerArray.forEach((ele) => {
            ele.classList.add("skill");
        });
        for(let i = 0; i < skillContainerArray.length; i++) {
            let className = "skill-" + (i + 1);
            skillContainerArray[i].classList.add(className);
        }

        //inner-text and values
        name.innerText = leftPaneData.name;
        designation.innerText = leftPaneData.designation;
        for(let i = 0; i < profLinkContainerArray.length; i++) {
            anchorArray[i].href = leftPaneData.profileLinks[i].href;
            profLinkImageArray[i].src = leftPaneData.profileLinks[i].ico;
        }
        skillHead.innerText = leftPaneData.skillBlock.title;
        for(let i = 0; i < skillContainerArray.length; i++) {
            skillImgArray[i].src = leftPaneData.skillBlock.skillsImgs[i].href;
            skillNameArray[i].innerText = leftPaneData.skillBlock.skillsImgs[i].name;
        }

        //append
        leftPane.appendChild(leftPaneContainer);
        leftPaneContainer.appendChild(imgContainer);
        imgContainer.appendChild(imgBox);
        leftPaneContainer.appendChild(name);
        name.appendChild(designation);
        leftPaneContainer.appendChild(profLinkContainer);
        for(let i = 0; i < profLinkContainerArray.length; i++) {
            let tmpContainer = profLinkContainerArray[i];
            profLinkContainer.appendChild(tmpContainer);
            tmpContainer.appendChild(anchorArray[i]);
            anchorArray[i].appendChild(profLinkImageArray[i]);
        }
        leftPaneContainer.appendChild(skillHead);
        leftPaneContainer.appendChild(hrLine);
        leftPaneContainer.appendChild(skillContainer);
        for(let i = 0; i < skillContainerArray.length; i++) {
            let tmpContainer = skillContainerArray[i];
            skillContainer.appendChild(tmpContainer);
            tmpContainer.appendChild(skillImgArray[i]);
            tmpContainer.appendChild(skillNameArray[i]);
        }

        return leftPane;
    }

    mount(el) {
        if(el) {
            el.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render());
    }
}

export {LeftPane};