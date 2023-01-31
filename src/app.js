import { Header } from "./components/Header.js";
import { ContentBox } from "./components/ContentBox.js";
import { LeftPane } from "./components/LeftPane.js";
import { RightPane } from "./components/RightPane.js";
import { Footer } from "./components/Footer.js";

// header

const header = new Header();
header.mount();

// contentbox

const contentBox = new ContentBox();
contentBox.mount();

// left-pane

const contentComponent = document.querySelector(".content-box");
const leftPane = new LeftPane();
leftPane.mount(contentComponent);

// right-pane
const rightPane = new RightPane();
rightPane.mount(contentComponent);

//footer
const footer = new Footer();
footer.mount();
