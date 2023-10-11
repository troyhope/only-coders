"use client";

import { Nav } from "react-bootstrap";

import styles from "../navigation/TopNavBar.module.css";

function NavItem({ children, href }) {
  return (
    <div className={styles.navLinkWrapper}>
      <Nav.Link href={href} className={styles.navLinkText}>
        {children}
      </Nav.Link>
    </div>
  );
}

export default NavItem;
