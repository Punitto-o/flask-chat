if (!localStorage.getItem('username')) {
	alert('You are not logged in.');
	window.location.href = '/';
} else {
	document.addEventListener('DOMContentLoaded', () => {
	    document.querySelector('span').innerHTML = localStorage.getItem('username');
	    var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);

	    socket.on('connect', () => {
	    	socket.emit('user arrival', {'username': localStorage.getItem('username'), 'path': location.pathname});
	    	document.querySelector('button').onclick = () => {
	    		const message = document.querySelector('input').value;
	    		const user = localStorage.getItem('username')
	    		socket.emit('send message', {'message': message, 'user': user, 'path': location.pathname});
	    		document.querySelector('input').value = '';
	    	};
	    });

	    socket.on('announce message', data => {
	    	if (data.path == location.pathname) {
		    	let li = document.createElement('li');
		    	li.innerHTML = `${data.user}: ${data.message}`;
		    	document.querySelector('ul').append(li);
		    }
	    });

	    socket.on('announce arrival', data => {
	    	if (data.path == location.pathname) {
		    	let li = document.createElement('li');
		    	li.innerHTML = `${data.username} has joined the channel.`;
		    	document.querySelector('ul').append(li);
		    }
	    });
	});
}