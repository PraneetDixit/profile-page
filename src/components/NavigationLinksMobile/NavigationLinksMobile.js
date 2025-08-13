"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavigationLinksMobile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faCertificate,
    faCalendar,
} from "@fortawesome/free-solid-svg-icons";

const NavigationLinksMobile = () => {
    const pathname = usePathname();

    const links = [
        { href: "/userinfo", text: "User Info", icon: faUser },
        { href: "/events", text: "Events and GL", icon: faCalendar },
        { href: "/certificates", text: "Certificates", icon: faCertificate },
    ];

    return (
        <div id={styles.wrapper}>
            <ul className={styles.nav}>
                {links.map((link) => {
                    const isActive = pathname.includes(link.href);
                    return (
                        <li key={link.href}>
                            <Link href={link.href}>
                                <div
                                    className={`${styles.sideChip} ${
                                        isActive ? styles.activeLink : ""
                                    }`}
                                >
                                    <FontAwesomeIcon icon={link.icon} />
                                    <span>{link.text}</span>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default NavigationLinksMobile;
