"use client";

import DashboardBanner from "../reusable/DashboardBanner";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import styles from "./DashboardContainer.module.css";

const DashboardContainer = ({
  bannerTitle,
  bannerBlurb,

  children,
}) => {
  return (
    <div className={styles.container}>
      <DashboardBanner title={bannerTitle} blurb={bannerBlurb} />
      <Container className={styles.noPadding} fluid>
        <Row className="gx-2">{children}</Row>
      </Container>
    </div>
  );
};

export default DashboardContainer;
