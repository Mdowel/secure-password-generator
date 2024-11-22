const includeLetters = document.getElementById("include-letters")
const includeNumbers = document.getElementById("include-numbers")
const includeSymbols = document.getElementById("include-symbols")
const charNumber = document.getElementById("char-number")
const generateBtn = document.getElementById("generate-btn")
let passOne = document.getElementById("password-one")
let passTwo = document.getElementById("password-two")

let characters = [];
let n = 15;
// const result = []

// if (charNumber.value < 1){
//     charNumber.style.display
// }

function getCharacters(){

    if (includeLetters.checked){
        characters.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
    } else {
        characters = characters.filter(char => !"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".includes(char))
    }

    if (includeNumbers.checked){
        characters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
    } else {
        characters = characters.filter(char => !"0123456789".includes(char))
    }
    
    if (includeSymbols.checked){
        characters.push("~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
        "/")
    } else {
        characters = characters.filter(char => !"~`!@#$%^&*()_-+={[}],|:;<>.?/".includes(char))
    }

    return characters
}

function reset() {
    passOne.innerText = ""
    passTwo.innerText = ""
    characters = []
}

function generatePasswords() {
    reset()
    getCharacters()

    if (characters.length > 0) {
        n = charNumber.value
        for(i = 0; i < n; i++){
            let randomIndex1 = Math.floor(Math.random() * characters.length)
            let randomIndex2 = Math.floor(Math.random() * characters.length)
            passOne.textContent += characters[randomIndex1]
            passTwo.textContent += characters[randomIndex2]
        }
    }    

    console.log(characters)
}