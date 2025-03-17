// Include the QRCode.js library in your HTML file for this to work
document.getElementById('generateBtn').addEventListener('click', function() {
    const qrInput = document.getElementById('qrInput').value;
    const qrCodeContainer = document.getElementById('qrCode');
    $(qrCodeContainer).empty(); // Clear previous QR code

    if (qrInput) {
        const pixelSize = document.getElementById('pixelSize').value; // Get pixel size from slider
        $(qrCodeContainer).qrcode({
            text: qrInput,
            width: pixelSize, // Use pixel size from slider
            height: pixelSize, // Use pixel size from slider
        });

        document.getElementById('downloadBtn').style.display = 'block';
        document.getElementById('downloadBtn').onclick = function() {
            const canvas = qrCodeContainer.querySelector('canvas');
            const fileFormat = document.getElementById('fileFormat').value; // Get selected file format
            const link = document.createElement('a');
            link.href = canvas.toDataURL(`image/${fileFormat}`); // Set the correct format
            link.download = `qr_code.${fileFormat}`; // Set the file name with the selected format
            link.click();
        };
    } else {
        alert('Please enter a value to generate a QR code.');
    }
});

// Update pixel value display dynamically
document.getElementById('pixelSize').addEventListener('input', function() {
    document.getElementById('pixelValue').textContent = this.value; // Update displayed pixel value
});
