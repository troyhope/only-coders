"use client";

import { NavDropdown } from "react-bootstrap";
import styles from "../navigation/TopNavBar.module.css";
import Icon from "./Icon";
import { MdKeyboardArrowDown } from "react-icons/md";

function DropdownItem({ title, href }) {
  return (
    <div className={`${styles.navLinkWrapper} ${styles.navDropdownIcon}`}>
      <NavDropdown
        title={
          <>
            <span className={styles.navLinkText}>{title} &nbsp;</span>
            <Icon icon={MdKeyboardArrowDown} color="white" size="0.8em" />
          </>
        }
        id="basic-nav-dropdown"
        className={styles.navDropdownIcon}
      >
        <NavDropdown.Item href={href} className={styles.navLinkText}>
          Action
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

export default DropdownItem;
