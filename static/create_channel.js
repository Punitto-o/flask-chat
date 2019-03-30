document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('button').onclick = () => {
		var channel_name = document.querySelector('input').value;
		window.location.href = '/' + channel_name
	}
});