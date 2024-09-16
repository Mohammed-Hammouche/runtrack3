document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');

    function loadLoginForm() {
        content.innerHTML = `
            <h2>Login</h2>
            <form id="loginForm">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" required>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        `;

        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // Implement login logic here
            console.log('Login attempted');
        });
    }

    function loadRegisterForm() {
        content.innerHTML = `
            <h2>Register</h2>
            <form id="registerForm">
                <div class="mb-3">
                    <label for="name" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="name" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" required>
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
        `;

        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // Implement registration logic here
            console.log('Registration attempted');
        });
    }

    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        loadLoginForm();
    });

    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        loadRegisterForm();
    });

    // Load login form by default
    loadLoginForm();
});