document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Simulate successful login and redirect to home page
    alert(`Login successful! Email: ${email}, Phone: ${phone}`);
    window.location.href = 'home.html';
});
