document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    usernameError.style.color = '';
    emailError.style.color = '';
    passwordError.style.color = '';
    confirmPasswordError.style.color = '';

    let valid = true;

    if (username.value.length < 3 || username.value.length > 25) {
        usernameError.textContent = 'Username must be between 3 and 25 characters.';
        usernameError.style.color = 'red';
        valid = false;
    }

    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.value)) {
        emailError.textContent = 'Invalid email.';
        emailError.style.color = 'red';
        valid = false;
    }

    if (password.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        passwordError.style.color = 'red';
        valid = false;
    }

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordError.style.color = 'red';
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
    }
});
