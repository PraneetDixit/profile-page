"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavigationLinks.module.css";
const NavigationLinks = () => {
  const pathname = usePathname();
  
  const links = [
    { href: "/userinfo", text: "User Info" },
    { href: "/events", text: "Events and GL" },
    { href: "/certificates", text: "Certificates" },
  ];

  return (
    <div id={styles.wrapper}>
        <div id={styles.follower} style={{top: links.findIndex(link => pathname.includes(link.href)) * 56}}>&nbsp;</div>
    <ul className={styles.nav}>
      {links.map((link) => {
        const isActive = pathname.includes(link.href);
        return (
          <li key={link.href} className={`${styles.navLinks} ${isActive ? styles.activeLink : ""}`}>
            <Link 
              href={link.href}
            >
              {link.text}
            </Link>
          </li>
        );
      })}
    </ul>
    </div>
  );
};

export default NavigationLinks;