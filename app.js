async function getCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' },
            audio: false
        });
        const videoElement = document.getElementById('webcam');
        
        videoElement.srcObject = stream;

    } catch (err) {
        console.error("Błąd przy dostępie do kamery:", err);
        alert("Nie udało się uzyskać dostępu do kamery. " + err.message);
    }
}

getCamera();