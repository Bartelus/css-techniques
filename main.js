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


let nameCheck = document.getElementById("navn") 

let ageCheck = document.getElementById("alder")
let ageValue = ageCheck.value

idCheck.addEventListener("click")

function idkontroll() {
}


let alderbekreftelse = createElement("p")
alderbekreftelse.text = ageValue

let denied = true

if (ageValue < 18) {
    denied = true
    console.log = ("Du er for liten")
}

else

{
    denied = false

    console.log = ("Du er gammel nok!")
}


if (denied = true) {
    alderbekreftelse.text = ("Du er for liten")
}