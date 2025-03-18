document.getElementById('generateBtn').addEventListener('click', () => {
    const qrInput = document.getElementById('qrInput').value;
    const pixelSize = document.getElementById('pixelSize').value; // Get pixel size from dropdown
    const fileFormat = 'png'; // Default file format


    let qrData = qrInput; // Set qrData to the user input

    // Generate QR Code with specified pixel size
    $('#qrCode').empty(); // Clear previous QR code
    $('#qrCode').qrcode({
        text: qrData,
        width: pixelSize,
        height: pixelSize
    });

    // Make the download button visible
    document.getElementById('downloadBtn').style.display = 'block';
});


document.getElementById('downloadBtn').addEventListener('click', () => {
    const canvas = document.querySelector('#qrCode canvas'); // Get the QR code canvas
    const link = document.createElement('a'); // Create a link element
    console.log(`Selected format: ${format}`); // Debugging statement
    console.log(`Canvas data URL before download: ${canvas.toDataURL(`image/${format}`)}`); // Debugging statement

    console.log(`Selected format: ${format}`); // Debugging statement
    console.log(`Canvas data URL: ${link.href}`); // Debugging statement

    const format = document.getElementById('imageFormat').value; // Get selected format
    link.href = canvas.toDataURL(`image/${format}`); // Convert canvas to data URL based on selected format
    link.download = `qr_code.${format}`; // Set the download filename based on selected format
    link.click(); // Trigger the download
});
