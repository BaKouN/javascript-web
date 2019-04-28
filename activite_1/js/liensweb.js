/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web
let divContenu = document.getElementById('contenu');

for (lien of listeLiens)
{
    let divLien = document.createElement('div');
    divLien.classList.add('lien');

    let aLien = document.createElement('a');
    aLien.textContent = lien.titre;
    aLien.href = lien.url;
    aLien.style.color = "#428bca";
    aLien.style.textDecoration = "none";

    let spanLien = document.createElement('span')
    spanLien.textContent = " " + lien.url;

    let pLien = document.createElement('p')
    pLien.appendChild(aLien);
    pLien.appendChild(spanLien);

    let spanAuteur = document.createElement('span')
    spanAuteur.textContent = "Ajouté par " + lien.auteur;

    divLien.appendChild(pLien);
    divLien.appendChild(spanAuteur);

    divContenu.appendChild(divLien);
}

