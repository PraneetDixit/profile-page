"use client";

import styles from "./styles.module.css";
import QR from "@/components/QR/QR";
import { useState } from "react";
import DP from "@/components/DP/DP";
import Link from "next/link";

export default function userinfo() {
    const [QRVisible, setQRVisible] = useState(false);

    const copy = async () => {
        await navigator.clipboard.writeText("25-12345");
        const msg = new CustomEvent("msg", {
            detail: {
                message: "Participant ID copied to clipboard!",
                value: "success",
            },
        });
        document.dispatchEvent(msg);
    };

    return (
        <>
            <div id={styles.userContainer}>
                <div id={styles.header}>
                    <div id={styles.upperHeader}></div>
                    <div id={styles.pfp}>
                        <DP width={175} height={175} />
                    </div>
                    <div id={styles.details}>
                        <h2>Praneet Dixit</h2>
                        <div id={styles.userDetails}>
                            <p>
                                Participant ID: 25-12345 <button onClick={copy}>📋</button>
                                <br />
                                SA ID: Not Applicable
                                <br/>
                                <span id={styles.paymentStatus}>Payment Status: Pending</span>
                            </p>
                            <Link href="/userinfo/edit">
                                <button>Edit Picture</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div id={styles.detailSection}>
                    <div id={styles.contact}>
                        <h3>Contact Details</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Email ID</td>
                                    <td>praneetdixit@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Mobile number</td>
                                    <td>9876543210</td>
                                </tr>
                                <tr>
                                    <td>Date of Birth</td>
                                    <td>2006-01-01</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={styles.spacer}></div>
                        <button onClick={() => setQRVisible(true)}>
                            QR Code
                        </button>
                    </div>
                    <div id={styles.education}>
                        <h3>Educational Details</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Educational Level</td>
                                    <td>Undergraduate</td>
                                </tr>
                                <tr>
                                    <td>State</td>
                                    <td>Rajasthan</td>
                                </tr>
                                <tr>
                                    <td>Institute name</td>
                                    <td>IIT Kharagpur</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={styles.spacer}></div>
                        <Link href="/payment">
                            <button>Payment</button>
                        </Link>
                    </div>
                </div>
            </div>
            {QRVisible && <QR toggle={setQRVisible} />}
        </>
    );
}
