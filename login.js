document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = loginForm.email.value;
        const password = loginForm.password.value;

        // Retrieve user data from local storage
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            // Login successful
            alert('Login successful!');
            window.location.href = 'dashboard.html'; // Redirect to dashboard page
        } else {
            // Login failed
            alert('Invalid email or password. Please try again.');
        }
    });
});
