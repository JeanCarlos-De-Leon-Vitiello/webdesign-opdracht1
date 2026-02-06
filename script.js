// zorgt ervoor dat de kaart draait door een class toetevoegen/verwijderen bij een klik
const lijst = document.querySelector("ul")
const kaarten = document.querySelectorAll(".kaart")

const resetKnop = document.querySelector(".reset")

       kaarten.forEach(function (kaart) {
            kaart.addEventListener("click", function () {
                kaart.classList.add("kaartGedraaid")
            })
        })

resetKnop.addEventListener("click", function(){
    kaarten.forEach(function(kaart){
        kaart.classList.remove("kaartGedraaid")
    }) 

    shuffle();
}) 

shuffle();

function shuffle(){
    

    //   set the index to the arrays length
      let aantalKaarten = kaarten.length // aantal kaarten --> 5
      let getal // wordt random getal tussen 0 en 4

    //   create a loop that subtracts everytime it iterates through
      while (--aantalKaarten > 0) {
        //  create a random number and store it in a variable
        getal = Math.floor(Math.random () * (aantalKaarten+1));

        let kaartOmTeVerplaatsen = kaarten[getal]

        console.log(kaartOmTeVerplaatsen)
        
        lijst.appendChild(kaartOmTeVerplaatsen)
      }
  
      
    }

    // naam uit de api halen en in de h1 zetten
    const titel = document.querySelector("h1")

    // functie aanroepen
    tekstInvoegen()

    async function tekstInvoegen (){
      // api url
      const URL = "https://fdnd.directus.app/items/person/293"
      // response opslaan in response variable
      let response = await fetch(URL)
      // de gegevens worden geladen als json en opgeslagen in de variable
      let gegevensPersonen = await response.json()

      console.log(gegevensPersonen.data.name)
      // veranderd de text content van de h1 
      titel.textContent = gegevensPersonen.data.name


    }
