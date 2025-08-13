"use client";

import styles from "./styles.module.css";
import { useState } from "react";

export default function Payment() {
    const [activeTab, setActiveTab] = useState(0);
    const [optionsExpanded, setOptionsExpanded] = useState(false);
    const [size, setSize] = useState(null);
    const [checked, setChecked] = useState(false);

    const handleSize = (selectedSize) => {
        setSize(selectedSize);
        setOptionsExpanded(false);
    }

    const validate = () => {
        if (!size) {
            const msg = new CustomEvent("msg", {
                detail: {
                    message: "Please select a T-Shirt size.",
                    type: "error",
                },
            });
            document.dispatchEvent(msg);
            return;
        }
        if (!checked) {
            const msg = new CustomEvent("msg", {
                detail: {
                    message: "Please agree to the terms and conditions.",
                    type: "error",
                },
            });
            document.dispatchEvent(msg);
            return;
        }
        const msg = new CustomEvent("msg", {
            detail: {
                message: "Proceeding to payment...",
                type: "success",
            },
        });
        document.dispatchEvent(msg);
    }

    return (
        <>
        <div id={styles.paymentContainer}>
            <div id={styles.rules}>
                <div
                    className={`${styles.ruleContainer} ${
                        activeTab === 0 ? styles.expanded : ""
                    }`}
                    onClick={() => {
                        setActiveTab(0);
                    }}
                >
                    <button>›</button>
                    <h2>
                        <span>NSSC-25 Pass</span>
                    </h2>
                    <ul>
                        <li>
                            The Participants willing to attend the fest are
                            required to pay a nominal fee of INR 1299/-
                        </li>
                        <li>
                            After the transactions are completed, the status
                            will be updated on the profile within 48 hours.
                        </li>
                        <li>
                            Accommodation for 3 days and 2 nights (8th November
                            to 10th November) in IIT Kharagpur Campus.
                        </li>
                        <li>
                            Includes complementary official merchandise of NSSC
                            2025.
                        </li>
                        <li>
                            Access to exciting events like Liftoff, Hoverpod,
                            Maze Runner, and entrance to the Arena with
                            mesmerizing exhibitions and amazing activities.
                        </li>
                        <li>
                            Access to exhibition of real-life scaled-down models
                            of ISRO rockets and satellites.
                        </li>
                        <li>
                            Free entrance to exciting Guest Lectures and
                            Webinars by renowned scientists.
                        </li>
                        <li>
                            Certificate of Participation will be given to all
                            those who attend the Guest Lectures / Webinar.
                        </li>
                        <li>
                            Physical participation in events or participation in
                            online events (Space Art and Astrophotography) will
                            earn you Certificates of Participation/Merit for
                            those individual events.
                        </li>
                    </ul>
                </div>
                <div
                    className={`${styles.ruleContainer} ${
                        activeTab === 1 ? styles.expanded : ""
                    }`}
                    onClick={() => {
                        setActiveTab(1);
                    }}
                >
                    <button>›</button>
                    <h2>
                        <span>Rules and Guidelines</span>
                    </h2>
                    <ul>
                        <li>
                            Students from Indian Institute of Technology,
                            Kharagpur can participate free of cost. (Any
                            transactions if made is non refundable.)
                        </li>
                        <li>
                            You can use any of the following payment methods to
                            pay - Google Pay, PayTM, Net Banking, Credit/Debit
                            Card.
                        </li>
                        <li>
                            Participants are requested to wait for 48 hours for
                            confirmation of payment status. In case the payment
                            status does not reflect, contact us at
                            anushesh.nssc@gmail.com
                        </li>
                        <li>
                            Participants are responsible for their belongings.
                            Organising team will not be responsible for any
                            losses or damages to their belongings.
                        </li>
                        <li>
                            In case of any damage to Institute property,
                            participants will be liable to the damages.
                        </li>
                        <li>
                            In case of any violation of rules and regulations,
                            participants will face disqualification and may be
                            asked to leave the premises.
                        </li>
                        <li>
                            Organising team will not intervene in any case
                            arising due to violation of rules and regulation
                            laid down by Institute.
                        </li>
                    </ul>
                </div>
                <div
                    className={`${styles.ruleContainer} ${
                        activeTab === 2 ? styles.expanded : ""
                    }`}
                    onClick={() => {
                        setActiveTab(2);
                    }}
                >
                    <button>›</button>
                    <h2>
                        <span>Accomodation Rules and Regulations</span>
                    </h2>
                    <ul>
                        <li>
                            All individuals are required to visibly wear their
                            ID cards at all times and only college students are
                            allowed to get accomodation inside the campus.
                        </li>
                        <li>
                            Preservation of hall (hostel) property is mandatory,
                            and any damage will result in strict disciplinary
                            measures.
                        </li>
                        <li>
                            Please refrain from causing disturbances to boarders
                            and fellow hall residents.
                        </li>
                        <li>
                            The use or possession of narcotics and intoxicants
                            is strictly prohibited; the premises may be subject
                            to inspection by the Narcotics Control Bureau (NCB).
                        </li>
                        <li>
                            Maintain respectful conduct towards all team members
                            and participants.
                        </li>
                        <li>
                            Take necessary precautions to secure your personal
                            belongings. The management is not liable for any
                            losses.
                        </li>
                        <li>Access to other halls is restricted.</li>
                        <li>Usage of the hall mess is not permitted.</li>
                        <li>
                            Attendance in all scheduled activities is required
                            for every participant.
                        </li>
                        <li>
                            As a safety measure, accommodation rooms will be
                            secured and locked during certain Fest activities.
                        </li>
                        <li>
                            All participants are expected to be in their
                            accommodation rooms by 12 AM. Exceptions may apply
                            to participants involved in certain events - they
                            should promptly return to their accommodation rooms
                            after concluding their respective events.
                        </li>
                        <li>
                            Post-midnight, personal safety is the individual&apos;s
                            responsibility, and any incidents that occur
                            thereafter are at the participant&apos;s own risk.
                        </li>
                    </ul>
                </div>
            </div>
            <div id={styles.form}>
                <div id={styles.innerForm}>
                    <p>T-Shirt Size</p>
                    <div
                        id={styles.sizePicker}
                        className={optionsExpanded ? styles.activeDropdown : ""}
                    >
                        <div
                            onClick={() => {
                                setOptionsExpanded(!optionsExpanded);
                            }}
                        >
                            <p>{size ? size : "Select"}</p>
                            <button>›</button>
                        </div>
                        <ul
                            className={styles.sizeWrapper}
                        >
                            {["S", "M", "L", "XL", "XXL"].map((size) => (
                                <li key={size} onClick={() => handleSize(size)}>{size}</li>
                            ))}
                        </ul>
                    </div>
                    <div id={styles.checkBoxWrapper}>
                        <input type="checkbox" name="agree" checked={checked} onChange={() => setChecked(!checked)} />
                        <label htmlFor="agree">
                            I agree to the <span>terms and conditions</span>
                        </label>
                    </div>
                    <button id={styles.proceedButton} onClick={validate}>
                        Proceed to Payment
                    </button>
                </div>
                <p id={styles.addLinks}>
                    <span>Privacy Policy</span> | <span>Refund Policy</span> |{" "}
                    <span>Contact Us</span>
                </p>
            </div>
            </div>
        </>
    );
}
