import styles from "./styles.module.css";
import certificates from "@/data/certificates";
import Image from "next/image";
import Link from "next/link";

export default function Certificates() {
    return (
        <div id={styles.certContainer}>
            <h2>Fest and Workshop Certificates</h2>
            <ul className={styles.certGrid}>
                {certificates.fest.map((cert, index) => (
                    <Link href={`/certificates/${cert.id}`} key={index}>
                        <li className={styles.certCard}>
                            <Image
                                src="/Assets/certificate.jpg"
                                alt="Certificate"
                                width={300}
                                height={180}
                            />
                            <h3>{cert.name}</h3>
                            <p>{cert.title}</p>
                        </li>
                    </Link>
                ))}
            </ul>
            <h2>Event Certificates</h2>
            <ul className={styles.certGrid}>
                {certificates.events.map((cert, index) => (
                    <Link href={`/certificates/${cert.id}`} key={index}>
                        <li className={styles.certCard}>
                            <Image
                                src="/Assets/certificate.jpg"
                                alt="Certificate"
                                width={300}
                                height={180}
                            />
                            <h3>{cert.name}</h3>
                            <p>{cert.title}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
