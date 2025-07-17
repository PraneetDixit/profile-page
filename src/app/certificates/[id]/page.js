import Link from "next/link";
import styles from "./styles.module.css";
import certificates from "@/data/certificates";

export default async function Cert({ params }) {
    const { id } = await params;

    const cert = certificates.fest.find((item) => item.id === id)
        ? certificates.fest.find((item) => item.id === id)
        : certificates.events.find((item) => item.id === id);

    return (
        <div id={styles.certContainer}>
            <div id={styles.certHeader}>
                <Link href="/certificates">
                    <button id={styles.back}>←</button>
                </Link>
                <h2>{cert.title} - {cert.name}</h2>
                <span className={styles.spacer}></span>
                <a href="/Assets/certificate.jpg" download>
                    <button id={styles.download}>Download</button>
                </a>
            </div>
            <img src="/Assets/certificate.jpg" alt={`${cert.title} - ${cert.name}`} />
        </div>
    );
}
