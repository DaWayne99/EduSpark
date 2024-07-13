document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Save user data to local storage
    const userData = { name, email, password };
    localStorage.setItem('userData', JSON.stringify(userData));

    // Redirect to dashboard
    window.location.href = 'dashboard.html';
});
