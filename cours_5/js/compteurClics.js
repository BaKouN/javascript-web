let boutonElt = document.getElementById("clic");
let desactiverElt = document.getElementById("desactiver")

let compteurElt = document.getElementById("compteurClics");
let compteur = Number(compteurElt.textContent);

function clic()
{
    compteur++;
    compteurElt.textContent = compteur;
}

    boutonElt.addEventListener("click", clic );

    desactiverElt.addEventListener("click", function () {
        boutonElt.removeEventListener("click", clic)
    });



