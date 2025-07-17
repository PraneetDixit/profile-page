"use client";

import { useEffect, useState } from "react";
import styles from "./Dialog.module.css";

export default function Dialog() {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("info");

    useEffect(() => {
        document.addEventListener("msg", (msg) => {
            setMessage(msg.detail.message);
            setType(msg.detail.type);
            setVisible(true);
            setTimeout(()=>{
                setVisible(false);
            },3500);
        });
    }, []);

    return (
        <div className={`${styles.dialog} ${visible ? styles.visible : ""}`}>
            <div className={styles.dialogContent}>
                <p>{message}</p>
                <div id={styles.bar} style={{ "--accent": type === "info" ? "blue" : type === "error" ? "red" : "green", width: visible ? "100%" : "0" }}></div>
            </div>
        </div>
    );
}
