// Function to switch between pages
function nextPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Function to show uploaded image
function showImage() {
    const image = document.getElementById('uploadedImage');
    const file = document.getElementById('imageUpload').files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        image.src = e.target.result;
        image.style.display = 'block';
    };
    
    if (file) {
        reader.readAsDataURL(file);
    }
}

// Function to display results on the result page
function displayResults() {
    const resultText = document.getElementById('resultText');
    const precautionText = document.getElementById('precautionText');
    const doctorText = document.getElementById('doctorText');
    
    // Placeholder prediction logic
    resultText.textContent = "You are at risk of oral cancer.";
    precautionText.textContent = "Precautions: Stop tobacco use, maintain good oral hygiene.";
    doctorText.textContent = "Nearby doctors: Dr. John Doe - Specialist in Oral Cancer.";
}

// Call this when the upload page is submitted
displayResults();