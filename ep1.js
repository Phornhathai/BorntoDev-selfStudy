function changeText() {
    document.getElementById("myText").innerHTML = "Text change"
    document.getElementById("test").style.color = "red"
}

function addElement(){
    const newElement = document.createElement("p")
    newElement.innerHTML = "new Element"
    document.getElementById("myText").appendChild(newElement)
}

function removeElement() {
    const elementToRemove = document.getElementById("removeMe")
    elementToRemove.parentNode.removeChild(elementToRemove)
}

function addClass(){
    document.getElementById("example5").classList.add("highlight")
}

function removeClass(e){
    document.getElementById("example5").classList.remove("highlight")
    
}


