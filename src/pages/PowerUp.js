import React, { useRef } from 'react';
import Webcam from "react-webcam";

export default function PowerUp() {
    const webcamRef = useRef(null);

    const capture = async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        await sendImageToServer(imageSrc);
    };

    const sendImageToServer = async (base64Image) => {
        const blob = base64ToBlob(base64Image, 'image/jpeg');
        const formData = new FormData();
        formData.append('file', blob, 'image.jpg');

        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData,
            });
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    function base64ToBlob(base64, mime) {
        const byteString = atob(base64.split(',')[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mime });
    }

    return (
        <div>
            <h1>PowerUp</h1>
            <Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
            />
            <button onClick={capture}>Capture photo</button>
        </div>
    );
}
