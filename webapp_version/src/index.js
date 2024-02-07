import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-webgpu';

import * as tfjsWasm from '@tensorflow/tfjs-backend-wasm';

tfjsWasm.setWasmPaths(
    `https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm@${
        tfjsWasm.version_wasm}/dist/`);

import * as faceDetection from '@tensorflow-models/face-detection';

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


