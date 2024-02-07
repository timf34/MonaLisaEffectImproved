async function startCamera() {
    try {
        const videoElement = document.getElementById('video');
        if (navigator.mediaDevices.getUserMedia) {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoElement.srcObject = stream;
        } else {
            console.log("getUserMedia not supported.");
        }
    } catch (error) {
        console.error("Error accessing the camera:", error);
    }
}

document.addEventListener('DOMContentLoaded', startCamera);
