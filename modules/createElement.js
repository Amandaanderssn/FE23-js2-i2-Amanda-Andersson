export function createAndAppend(parent, tagName, textContent) {

    const element = document.createElement(tagName);
    if (tagName != 'div') element.innerText = textContent;
    parent.append(element);
    return element;
};