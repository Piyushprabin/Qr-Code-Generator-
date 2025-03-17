document.getElementById('generateBtn').addEventListener('click', () => {
    const qrInput = document.getElementById('qrInput').value;
    const qrType = document.getElementById('qrType').value;

    let qrData;
    switch (qrType) {
        case 'website':
            qrData = qrInput; // Assume input is a URL
            break;
        case 'social':
            qrData = `https://socialmedia.com/${qrInput}`; // Example for social media
            break;
        case 'phone':
            qrData = `tel:${qrInput}`; // Format for phone number
            break;
        case 'email':
            qrData = `mailto:${qrInput}`; // Format for email address
            break;
        default:
            qrData = qrInput; // Fallback
    }

    // Generate QR Code
    $('#qrCode').empty(); // Clear previous QR code
    $('#qrCode').qrcode(qrData);
});
