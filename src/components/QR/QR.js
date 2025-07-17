"use client";
import { useRef, useEffect } from "react";

import styles from "./QR.module.css";

export default function QR({ toggle }) {
    const canvasRef = useRef(null);
    const data = "25-12345"; // Your QR text
    const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=200x200`;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const fontSize = 32;
        const padding = 20;

        const img = new Image();
        img.crossOrigin = "anonymous";

        img.onload = () => {
            const width = img.width;
            const totalHeight = img.height + fontSize + padding*4;

            canvas.width = width + padding * 4;
            canvas.height = totalHeight;

            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "black";
            ctx.font = `${fontSize}px sans-serif`;
            ctx.textAlign = "center";
            ctx.fillText(data, width / 2 + padding*2, fontSize + padding);

            ctx.drawImage(img, padding*2, fontSize + padding*2);
        };

        img.src = qrImageUrl;
    }, [data, qrImageUrl]);

    const downloadImage = (canvas) => {
        const link = document.createElement("a");
        link.download = "qr-code.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    }

    return (
        <div id={styles.QRContainer}>
            <div id={styles.QRCard}>
                <canvas ref={canvasRef} />
                <div id={styles.buttons}>
                    <button onClick={() => downloadImage(canvasRef.current)}>Download</button>
                    <button onClick={() => toggle(false)}>Close</button>
                </div>
            </div>
        </div>
    );
}
