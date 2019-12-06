

const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com"
];

const linkContainer = document.querySelector(".js-link-container");

function makeAnchorElement(link) {
    // console.log(link);
    let anchorElement = document.createElement("a");
    anchorElement.href = link;
    anchorElement.textContent = link;
    // console.log(anchorElement);
    return anchorElement;
}

function displayElement(el) {
    // console.log('display element');
    linkContainer.appendChild(el);
}

function displayAnchor(link) {
    // console.log('display anchor');
    let aEl = makeAnchorElement(link);
    displayElement(aEl);
}

addresses.map(displayAnchor);