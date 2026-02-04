// zorgt ervoor dat de kaart draait door een class toetevoegen/verwijderen bij een klik
const kaart = document.querySelector(".kaart")

kaart.addEventListener("click", function () {
    kaart.classList.toggle("kaartGedraaid")
})

const kaartVerplaatsen = document.querySelector("ol li:nth-of-type(1)")

kaartVerplaatsen.addEventListener("click", function () {
    kaartVerplaatsen.classList.toggle("kaartVerplaatst")
})