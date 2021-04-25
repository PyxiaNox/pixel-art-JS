var penColor = "#39424e"

function setPixelColor(pixel){
    pixel.style.backgroundColor = penColor
}

function setPenColor(pen){
    penColor = pen
}

var childDiv = document.getElementById("art").getElementsByTagName("div")
function resetGrid(){
    for(i = 0; i < childDiv.lenght; i++){
        childDiv[i].style.backgroundColor = "white"
    }
}