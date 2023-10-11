"use client";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Dropdown } from "react-bootstrap";

import Link from "next/link";

import { FaSearch } from "react-icons/fa";
import { GiCrownedSkull } from "react-icons/gi";
import { FiGrid } from "react-icons/fi";

import Icon from "../reusable/Icon";
import NavItem from "../reusable/NavItem";

import styles from "./TopNavBar.module.css";

function TopNavbar() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className={styles.navbar}
      style={{ zIndex: 2 }}
    >
      <Navbar.Brand
        href="#home"
        style={{ paddingLeft: "10px", paddingTop: "5px" }}
      >
        <Icon icon={GiCrownedSkull} color="white" size="1.5em" />
      </Navbar.Brand>
      <Navbar.Text className={styles.brandText}>Sample Page</Navbar.Text>

      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ marginRight: "5px" }}
      />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.collapsedMenu}>
        <Nav className="align-items-center">
          <span className={styles.gridIcon}>
            <NavItem href="/">
              <Icon icon={FiGrid} color="#8988fb" size="1.5em" />
            </NavItem>
          </span>

          <Link href="/" className={`nav-link ${styles.navLinkText}`}>
            Home
          </Link>
          <Dropdown>
            <Dropdown.Toggle className={styles.dropdownToggle}>
              Features
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Link href="/"></Link>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle className={styles.dropdownToggle}>
              More
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Link href="/"></Link>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Form inline="true" id="search-form" className="mx-auto">
          <InputGroup className={styles.inputGroup}>
            <Form.Control
              name="search"
              type="text"
              placeholder="Enter your search here..."
              className={styles.searchInput}
            />
            <InputGroup.Text className={styles.inputGroupText}>
              <FaSearch />
            </InputGroup.Text>
          </InputGroup>
        </Form>
        <div className={styles.btnContainer}>
          <Button className={styles.loginBtn}>Login</Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNavbar;
