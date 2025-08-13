"use client";

import styles from "./SideBar.module.css";
import NavigationLinks from "../NavigationLinks/NavigationLinks";
import DP from "@/components/DP/DP";
import { usePathname } from "next/navigation";
import NavigationLinksMobile from "../NavigationLinksMobile/NavigationLinksMobile";

export default function SideBar() {
    const pathname = usePathname();

    return pathname.includes("payment") ? null : ( // Hide sidebar on payment page
        <div id={styles.outerSide}>
            <div id={styles.sideBar}>
                <DP width={100} height={100} />
                <div id={styles.name}>Praneet Dixit</div>
                <div id={styles.regDetails}>
                    Participant ID: 25-142324
                    <br />
                    SA ID: Not Applicable
                </div>
                <NavigationLinks />
                <button id={styles.logout}>Logout</button>
            </div>
            <div id={styles.miniNav}>
                <NavigationLinksMobile />
            </div>
        </div>
    );
}
