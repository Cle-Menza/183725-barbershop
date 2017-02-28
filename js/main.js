var link = document.querySelector('.users_block');
var modal = document.querySelector('.users_block_modal');
var modalClose = document.querySelector('.users_block_close');
var login = modal.querySelector('[name=name]');
var passw = modal.querySelector('[name=password]');
var form = modal.querySelector('form');
var storage = localStorage.getItem('login');
var opacity = document.querySelector('.index_opacity');
var contacts_btn_map = document.querySelector('.contacts_btn_map');
var i_map_modal_open = document.querySelector('.i_map_modal_open');
var map_block_close = document.querySelector('.map_block_close');

link.addEventListener('click', function(event) {
	event.preventDefault()
	modal.classList.add('users_block_modal_show')
	opacity.classList.add('opacity_show')
	if (storage) {
		login.value = storage
		passw.focus()
	} else {
		login.focus()
	};
	console.log('Show modal')
});

modalClose.addEventListener('click', function(event) {
	event.preventDefault();
	modal.classList.remove('users_block_modal_show')
	modal.classList.remove('modal_error')
	opacity.classList.remove('opacity_show')
	console.log('Close modal')
});

map_block_close.addEventListener('click', function(e) {
	e.preventDefault()
	i_map_modal_open.classList.remove('i_map_modal_open_show')
	opacity.classList.remove('opacity_show')
	console.log('Close Map Modal')
});

form.addEventListener('submit', function(event) {
	if (!login.value || !passw.value) {
		event.preventDefault()
		console.log('Form Empty Input')
		if (modal.classList.contains('modal_error')) {
			modal.classList.remove('modal_error')
		} else {
			modal.classList.add('modal_error')
		}
	} else {
		localStorage.getItem('login', login.value)
		console.log('Save login in local storage')
	}
});

window.addEventListener('keydown', function(event) {
	if (event.keyCode === 27) {
		if (i_map_modal_open.classList.contains('i_map_modal_open_show')) {
			i_map_modal_open.classList.remove('i_map_modal_open_show')
			opacity.classList.remove('opacity_show')
			console.log('Close Modal Map ESC')
		}
		if (modal.classList.contains('users_block_modal_show')) {
			modal.classList.remove('users_block_modal_show')
			opacity.classList.remove('opacity_show')
			modal.classList.remove('modal_error')
			console.log('Close Modal Press ESC')
		}
	}
});

opacity.addEventListener('click', function(event) {
	modal.classList.remove('users_block_modal_show')
	opacity.classList.remove('opacity_show')
	i_map_modal_open.classList.remove('i_map_modal_open_show')
	modal.classList.remove('modal_error')
	console.log('Close Modal Click Opacity')
});

contacts_btn_map.addEventListener('click', function(e) {
	e.preventDefault()
	i_map_modal_open.classList.add('i_map_modal_open_show')
	opacity.classList.add('opacity_show')
	console.log('Show Modal Map')
});
