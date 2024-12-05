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
    var elements = document.getElementsByClassName('tall')
    for (let i = 0; i < elements.length; i++) {
        elements[i].onmouseover = function () {
            elements[i].style.background = 'black'
        }
    }
}

createDivs(100)


document.getElementById('reset').onclick = function () {
    let size = prompt("How many squares?", 16)
    if (size >= 100) {
        size = 100
    }
    document.getElementById('container').innerHTML = ""
    createDivs(size)
}