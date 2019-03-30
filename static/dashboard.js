if (!localStorage.getItem('username')) {
	alert('You are not logged in.');
	window.location.href = '/';
} else {
	document.addEventListener('DOMContentLoaded', () => {
	    document.querySelector('span').innerHTML = localStorage.getItem('username');
	    document.querySelector('#join').onclick = () => {
	    	window.location.href = '/channel';
	    }
	    document.querySelector('#create').onclick = () => {
	    	window.location.href = '/create-channel';
	    }
	});
}