function createDivs(size) {
    for (let i = 0; i < size; i++) {
        var wideName = "div" + i
        let wideContent = document.createElement(wideName)
        wideContent.id = "wide"
        container.appendChild(wideContent)
        for (let q = 0; q < size; q++) {
            var tallName = "div" + q
            let tallContent = document.createElement(tallName)
            tallContent.id = 'tall'
            tallContent.classList.add('tall')
            tallContent.style.height = 480 / size + "px"
            tallContent.style.width = 480 / size + "px"
            wideContent.appendChild(tallContent)
        }
    }
}

createDivs(100)
var elements = document.getElementsByClassName('tall')
for (let i = 0; i < elements.length; i++) {
    elements[i].onmouseover = function () {
        elements[i].style.background = 'black'
    }
}