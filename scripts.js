const notesContainer = document.querySelector(".notes-container")
const createBtn = document.querySelector(".btn")
let notes ;

function saveNote(){

    localStorage.setItem("notes", notesContainer.innerHTML)
}

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}

showNotes()

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p")
    let image = document.createElement("img")
    inputBox.className = "input-box"
    inputBox.setAttribute("contenteditable", "true")
    image.src = "images/delete.png"
    notesContainer.appendChild(inputBox).appendChild(image)
    // saveNote()
})

notesContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        saveNote()
    }

    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt => {
            nt.onkeyup = function(){
                saveNote()
            }
        });
    }
})


document.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak")
        e.preventDefault()
    }
})

document.addEventListener("keydown", (e)=>{
    if(e.key ==="Backspace"){
        saveNote()
    }
})

