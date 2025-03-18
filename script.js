document.getElementById('generateBtn').addEventListener('click', () => {
    const qrInput = document.getElementById('qrInput').value;
    let qrData = qrInput; // Set qrData to the user input

    // Generate QR Code
    $('#qrCode').empty(); // Clear previous QR code
    $('#qrCode').qrcode(qrData);

    // Make the download button visible
    document.getElementById('downloadBtn').style.display = 'block';
});

// Add event listener for the download button
document.getElementById('downloadBtn').addEventListener('click', () => {
    const canvas = document.querySelector('#qrCode canvas'); // Get the QR code canvas
    const link = document.createElement('a'); // Create a link element
    link.href = canvas.toDataURL('image/png'); // Convert canvas to data URL
    link.download = 'qr_code.png'; // Set the download filename
    link.click(); // Trigger the download
});
