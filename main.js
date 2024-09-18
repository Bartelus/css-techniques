function fargemodus() {
    // logic for fargemodus
    console.log("Du har trykket på modus knappen")

    // Finn data-theme i HTML element
let htmlKilde = document.querySelector("html")
console.log (htmlKilde.dataset.theme)

let aktivModus = htmlKilde.dataset.theme
    // Les gjeldene verdi for data-theme


    // Hvis gjeldende data-theme er "dark", then "light"
    if (aktivModus === "dark"){
htmlKilde.dataset.theme = "light"
    } else {
        
        // else data-theme "dark"
htmlKilde.dataset.theme = "dark"
    }


}

// Find the button that should trigger the function
let modusKnapp = document.getElementById("modus")
modusKnapp.addEventListener("click", fargemodus)



function idkontroll() {
    
    
    let idAlder = document.getElementById("alder")
    let ageValue = idAlder.value

    if (!validateValue(ageValue)) {
        return}
    
 let wrapper = document.createElement("li")
  let nameoutput = document.createElement("p")
  let ageoutput = document.createElement("p")
  nameoutput.textContent = nameValue
  ageoutput.textContent = ageValue

  wrapper.append(nameoutput)
  wrapper.append(ageoutput)
}

let idCheck = document.getElementById("Commit")
idCheck.addEventListener("click", idkontroll)

let denied = true

if (idAlder < 18) {
    denied = true
    console.log = ("Du er for liten")
}

else

{
    denied = false

    console.log = ("Du er gammel nok!")
}