document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const reportType = document.getElementById('reportType').value;
    const reportFile = document.getElementById('reportFile').files[0];
    const language = document.getElementById('language').value;

    // Store patient and test information in localStorage
    localStorage.setItem('patientName', 'Yash '); // You can get this dynamically
    localStorage.setItem('patientAge', 23); // You can get this dynamically
    localStorage.setItem('patientGender', 'Male'); // You can get this dynamically
    localStorage.setItem('reportType', reportType);
    localStorage.setItem('language', language);

    if (!reportFile) {
        alert('Please upload a file.');
        return;
    }

    // Simulate file analysis and redirect to the result page
    alert('Report uploaded successfully! Analyzing...');
    window.location.href = 'result.html';
});
