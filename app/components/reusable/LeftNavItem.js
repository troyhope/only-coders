"use client";

import ListGroup from "react-bootstrap/ListGroup";
import { Tooltip as ReactTooltip } from "react-tooltip";

import styles from "../navigation/LeftNavBar.module.css";

function LeftNavItem({ icon: Icon, path, activePath, onNavigate }) {
  const isActive = activePath === path;
  const tooltipId = `tooltip-${path}`;

  return (
    <ListGroup.Item
      className={styles.outerIcon}
      onClick={() => onNavigate(path)}
      data-tooltip-id={tooltipId}
      data-tooltip-content={path}
    >
      <div className={isActive ? styles.innerIconActive : styles.innerIcon}>
        <Icon
          style={{ color: isActive ? "white" : "#c3c5d8", fontSize: "1.2em" }}
        />
      </div>
      <ReactTooltip id={tooltipId} place="right" />
    </ListGroup.Item>
  );
}

export default LeftNavItem;
