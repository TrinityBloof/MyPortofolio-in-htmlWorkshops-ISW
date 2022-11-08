const USERSKEY = 'users';

function insertUser() {
	const name = document.getElementById('name').value;
	const last = document.getElementById('last').value;
    const tel = document.getElementById('tel').value;
	let currentKey = localStorage.getItem('userLastInsertedId');

	if (!currentKey) {
		localStorage.setItem('userLastInsertedId', 1);
		currentKey = 1;
	} else {
		currentKey = parseInt(currentKey) + 1;
		localStorage.setItem('userLastInsertedId', currentKey);
	}

	const user = {
		name,
		last,
        tel,
		id: currentKey
	};

	let users = JSON.parse(localStorage.getItem(USERSKEY));
	if (users && users.length > 0) {
		users.push(user);
	} else {
		users = [];
		users.push(user);
	}
	localStorage.setItem(USERSKEY, JSON.stringify(users));

	clearFields();
}

function clearFields() {
	document.getElementById('name').value = '';
	document.getElementById('last').value = '';
    document.getElementById('tel').value = '';
}

function bindEvents() {
	jQuery('#btn-save').bind('click', function (element) {
		insertUser();
	});
}

bindEvents();