"use client";

import styles from "./ImagePicker.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useImageContext } from "@/context/ImageContext";

export default function ImagePicker() {
    const [DP, setDP] = useState(1);
    const { value, updateImageValue } = useImageContext();
    const router = useRouter();

    useEffect(() => {
        setDP(value || 1); // Default to 1 if value is not set
    }, [value]);

    const closeModal = () => {
        router.back();
    };

    const save = () => {
        updateImageValue(DP);
        const msg = new CustomEvent("msg", {
            detail: {
                message: "Profile picture updated successfully!",
                value: "success",
            },
        });
        document.dispatchEvent(msg);
        closeModal();
    };

    return (
        <div id={styles.imageContainer}>
            <div id={styles.imageCard}>
                <h2>Edit Profile Picture</h2>
                <div id={styles.imageGrid}>
                    {[1, 2, 3, 4, 5, 6].map((image) => (
                        <div
                            className={`${styles.imageItemContainer} ${
                                DP === image ? styles.selected : ""
                            }`}
                            key={image}
                        >
                            <Image
                                src={`/Assets/dp/${image}.png`}
                                className={styles.imageItem}
                                onClick={() => {
                                    setDP(image);
                                }}
                                width={160}
                                height={160}
                                alt={`Profile Picture ${image}`}
                            />
                        </div>
                    ))}
                </div>
                <div id={styles.buttonContainer}>
                    <button onClick={save}>Save Changes</button>
                    <button onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    );
}
