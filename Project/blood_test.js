document.getElementById('bloodTestForm').addEventListener('input', function(event) {
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;

    const femaleQuestions = document.getElementById('femaleQuestions');

    if (gender === 'female' && age <= 50) {
        femaleQuestions.style.display = 'block';
    } else {
        femaleQuestions.style.display = 'none';
    }
});

document.getElementById('bloodTestForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Form data processing can be added here

    // Redirect to the upload page
    window.location.href = 'upload_report.html';
});

