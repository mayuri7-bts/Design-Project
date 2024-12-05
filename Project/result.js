document.addEventListener('DOMContentLoaded', function() {
    const patientName = localStorage.getItem('patientName');
    const patientAge = localStorage.getItem('patientAge');
    const patientGender = localStorage.getItem('patientGender');
    const reportType = localStorage.getItem('reportType');
    const language = localStorage.getItem('language');
    
    document.getElementById('patientName').innerText = patientName;
    document.getElementById('patientAge').innerText = patientAge;
    document.getElementById('patientGender').innerText = patientGender;

    const testResults = analyzeReport(reportType);
    displayResults(testResults, language);

    document.getElementById('downloadBtn').addEventListener('click', function() {
        downloadResult();
    });
});

function analyzeReport(reportType) {
    // Placeholder for actual analysis logic
    if (reportType === 'blood') {
        return {
            hemoglobin: { value: 12.5, stage: 'Low' },
            whiteBloodCells: { value: 9000, stage: 'High' }
			
        };
    } else {
        return {
            protein: { value: 'Normal', stage: 'Normal' },
            glucose: { value: 'Negative', stage: 'Normal' }
        };
    }
}

function displayResults(testResults, language) {
    const translations = {
        english: {
            hemoglobin: 'Hemoglobin',
            whiteBloodCells: 'White Blood Cells',
			
            protein: 'Protein',
            glucose: 'Glucose',
            remedies: 'Natural Remedies'
        },
        tamil: {
            hemoglobin: 'ஹீமோகுளோபின்',
            whiteBloodCells: 'வெள்ளை இரத்த அணுக்கள்',
            protein: 'நுண்ணுயிரி',
            glucose: 'குளுக்கோஸ்',
            remedies: 'இயற்கை மருத்துவங்கள்'
        },
        hindi: {
            hemoglobin: 'हीमोग्लोबिन',
            whiteBloodCells: 'श्वेत रक्त कोशिकाएं',
            protein: 'प्रोटीन',
            glucose: 'ग्लूकोज',
            remedies: 'प्राकृतिक उपचार'
        }
    };

    const testResultsContainer = document.getElementById('testResults');
    testResultsContainer.innerHTML = '<h3>Test Results</h3>';
    for (const key in testResults) {
        const translatedKey = translations[language][key];
        testResultsContainer.innerHTML += `<p><strong>${translatedKey}:</strong> ${testResults[key].value} (${testResults[key].stage})</p>`;
    }

    const remediesContainer = document.getElementById('remedies');
    remediesContainer.innerHTML = `<h3>${translations[language].remedies}</h3>`;
    remediesContainer.innerHTML += getRemedies(language);
}

function getRemedies(language) {
    const remedies = {
        english: 'Drink plenty of water, eat a balanced diet rich in iron.',
        tamil: 'மிகவும் தண்ணீர் குடிக்கவும், இரும்பு நிறைந்த சத்தான உணவை உண்ணவும்.',
        hindi: 'बहुत सारा पानी पिएं, लौह से भरपूर संतुलित आहार लें।'
    };
    return `<p>${remedies[language]}</p>`;
}

function downloadResult() {
    const element = document.createElement('a');
    const file = new Blob([document.documentElement.outerHTML], {type: 'text/html'});
    element.href = URL.createObjectURL(file);
    element.download = 'result.html';
    document.body.appendChild(element);
    element.click();
}
