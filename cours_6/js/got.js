// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
	{
		code: 'ST',
		nom: 'Stark'
	},
	{
		code: 'LA',
		nom: 'Lannister'
	},
	{
		code: 'BA',
		nom: 'Baratheon'
	},
	{
		code: 'TA',
		nom: 'Targaryen'
	}
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
	switch (codeMaison) {
		case 'ST':
			return ['Eddard', 'Catelyn', 'Robb', 'Sansa', 'Arya', 'Jon Snow'];
		case 'LA':
			return ['Tywin', 'Cersei', 'Jaime', 'Tyrion'];
		case 'BA':
			return ['Robert', 'Stannis', 'Renly'];
		case 'TA':
			return ['Aerys', 'Daenerys', 'Viserys'];
		default:
			return [];
	}
}

var listeMaisons = document.getElementById('maison');

for (maison of maisons) {
	let newMaison = document.createElement('option');
	newMaison.value = maison.code;
	newMaison.textContent = maison.nom;

	listeMaisons.appendChild(newMaison);
}

var listePersonnages = document.getElementById('persos');

listeMaisons.addEventListener('change', function(e) {
	listePersonnages.innerHTML = '';

	let codeMaison = e.target.value;
	let personnages = getPersonnages(codeMaison);

	for (personnage of personnages) {
		let newPersonnage = document.createElement('li');
		newPersonnage.textContent = personnage;

		listePersonnages.appendChild(newPersonnage);
	}
});
