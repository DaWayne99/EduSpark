document.addEventListener('DOMContentLoaded', () => {
    // Retrieve user info from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('username').innerText = user.name;
    } else {
        window.location.href = 'login.html';
    }

    // Logout functionality
    document.getElementById('logout-button').addEventListener('click', () => {
        localStorage.removeItem('user');
        window.location.href = 'login.html';
    });
});
