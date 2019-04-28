divElts = document.querySelectorAll('div');

document.addEventListener('keypress', function(e) {
	switch (String.fromCharCode(e.charCode).toUpperCase()) {
		case 'R':
			for (elt of divElts) {
				elt.style.background = 'red';
			}
			break;

		case 'J':
			for (elt of divElts) {
				elt.style.background = 'yellow';
			}
			break;

		case 'V':
			for (elt of divElts) {
				elt.style.background = 'green';
			}
			break;

		case 'B':
			for (elt of divElts) {
				elt.style.background = 'white';
			}
			break;
	}
});
