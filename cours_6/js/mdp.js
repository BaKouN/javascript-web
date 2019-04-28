var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	let mdp1 = form.elements.mdp1.value;
	let mdp2 = form.elements.mdp2.value;
	let message = 'Mot de passe OK !';

	if (mdp1 === mdp2) {
		if (mdp1.length >= 6) {
			let regMdp = /\d+/;
			if (regMdp.test(mdp1)) {
			} else {
				message = 'Le mot de passe ne contient aucun chiffre';
			}
		} else {
			message = 'Le mot de passe doit faire 6 caractères de longeuur';
		}
	} else {
		message = 'Les deux mots de passe ne sont pas identique';
	}

	document.getElementById('infoMdp').textContent = message;
	e.preventDefault();
});
