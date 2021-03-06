// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
	{
		enonce: 'Combien font 2+2 ?',
		reponse: '2+2 = 4'
	},
	{
		enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
		reponse: '1492'
	},
	{
		enonce:
			"On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
		reponse: 'La lettre N'
	}
];

divContenu = document.getElementById('contenu');

questionElt = document.createElement('div');
enonceElt = document.createElement('p');
enonceElt.textContent = questions[0].enonce;
buttonElt = document.createElement('button');
buttonElt.textContent = 'Afficher la réponse';

questionElt.appendChild(enonceElt);
questionElt.appendChild(buttonElt);

reponseElt = document.createElement('p');
reponseElt.textContent = questions[0].reponse;

divContenu.appendChild(questionElt);

buttonElt.addEventListener('click', function() {
	buttonElt = divContenu.replaceChild(reponseElt, buttonElt);
});
