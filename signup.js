document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = signupForm.name.value;
        const email = signupForm.email.value;
        const password = signupForm.password.value;

        const user = {
            name,
            email,
            password
        };

        // Save user data in local storage
        localStorage.setItem('user', JSON.stringify(user));

        // Clear the form
        signupForm.reset();

        // Redirect to another page or show a success message
        alert('User registered successfully!');
        window.location.href = 'dashboard.html'; // Redirect to home page
    });
});
