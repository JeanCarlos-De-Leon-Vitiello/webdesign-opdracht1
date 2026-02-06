// zorgt ervoor dat de kaart draait door een class toetevoegen/verwijderen bij een klik
const kaarten = document.querySelectorAll(".kaart")

kaarten.forEach(function (kaart) {
    kaart.addEventListener("click", function () {
        kaart.classList.add("kaartGedraaid")
    })
})

// zorgt ervoor dat de kaart terug draait door een class te verwijderen bij een klik
