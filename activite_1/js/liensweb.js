var listeLiens = [
	{
		titre: 'So Foot',
		url: 'http://sofoot.com',
		auteur: 'yann.usaille'
	},
	{
		titre: "Guide d'autodéfense numérique",
		url: 'http://guide.boum.org',
		auteur: 'paulochon'
	},
	{
		titre: "L'encyclopédie en ligne Wikipedia",
		url: 'http://wikipedia.org',
		auteur: 'annie.zette'
	}
];

function ajoutLien(e) {
	e.preventDefault();
	// let monLien = {                                       Technique Procédurale
	// 	titre: document.getElementById('titre').value,
	// 	auteur: document.getElementById('auteur').value,
	// 	url: document.getElementById('url').value
	// };
	let monLien = {};
	let objets = Array.prototype.slice.call(
		document.getElementsByTagName('input')
	);
	for (objet of objets) {
		monLien[objet.id] = objet.value;
	}
	listeLiens.push(monLien);
    afficherLien();
    document.getElementById('formLien').innerHTML="";
    addBtn.style.display = 'block';
}

function creerBoutton(contenu, id, parentElt, position, fonction) {
	let btn = document.createElement('button');
	btn.textContent = contenu;
	btn.id = id;
	btn.style.margin = '5px';
	parentElt[position](btn);
	btn.addEventListener('click', fonction);
	return btn;
}

function creerInput(name, pholder) {
	let addInput = document.createElement('input');
	addInput.type = 'text';
	addInput.id = name;
	addInput.name = name;
	addInput.required = 'true';
	addInput.placeholder = pholder;
	addInput.style.margin = '5px';

	document.getElementById('formLien').appendChild(addInput);
}

function afficherLien() {
	divLiens.innerHTML = '';
	for (lien of listeLiens) {
		// Boucle For permettant d'ajouter chaque lien à la liste
		let divLien = document.createElement('div');
		divLien.classList.add('lien');

		let aLien = document.createElement('a');
		aLien.textContent = lien.titre;
		aLien.href = lien.url;
		aLien.style.color = '#428bca';
		aLien.style.textDecoration = 'none';

		let spanLien = document.createElement('span');
		spanLien.textContent = ' ' + lien.url;

		let pLien = document.createElement('p');
		pLien.appendChild(aLien);
		pLien.appendChild(spanLien);

		let spanAuteur = document.createElement('span');
		spanAuteur.textContent = 'Ajouté par ' + lien.auteur;

		divLien.appendChild(pLien);
		divLien.appendChild(spanAuteur);

		divLiens.appendChild(divLien);
	}
}

let divContenu = document.getElementById('contenu');
let divLiens = document.createElement('div');
divContenu.appendChild(divLiens);

let addBtn = creerBoutton('Ajouter un Lien','btn', divContenu, 'prepend', function(e) {
		addBtn.style.display = 'none';
		let addForm = document.createElement('form');
		addForm.id = 'formLien';
		addForm.style.marginBottom = '10px';
		divContenu.prepend(addForm);

		creerInput('auteur', 'Inserez votre nom');
		creerInput('titre', 'Nom du site');
		creerInput('url', 'URL du site');
		creerBoutton('Ajouter', 'applyBtn', addForm, 'append', ajoutLien);
	}
);


afficherLien();
