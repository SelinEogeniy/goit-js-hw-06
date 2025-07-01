function getElementWidth(content, padding, border) {
    padding = parseFloat(padding) * 2;
    border = parseFloat(border) * 2;
    content = parseFloat(content);
    const totalWidth = content + padding + border;
    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200;
