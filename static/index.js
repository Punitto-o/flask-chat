if (!localStorage.getItem('username')) {
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelector('button').onclick = () => {
        const username = document.querySelector('input').value;
        localStorage.setItem('username', username);
        alert('Thanks for joining us, ' + localStorage.getItem('username'));
        window.location.href = '/dashboard';
      }
    });
} else {
  alert('Welcome back, ' + localStorage.getItem('username'));
  window.location.href = '/dashboard';
}
