let myText = document.getElementById("my-text")
let p = document.getElementById("char")
myText.addEventListener("input", () => {
    let count = (myText.value).length
    p.innerHTML = count
})  
