"use client";

import { useRouter, usePathname } from "next/navigation";

import { Tooltip as ReactTooltip } from "react-tooltip";

import ListGroup from "react-bootstrap/ListGroup";
import LeftNavItem from "../reusable/LeftNavItem";

import {
  HiOutlineUser,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineLightningBolt,
  HiOutlineDatabase,
  HiOutlineStar,
  HiOutlineShoppingBag,
  HiOutlineChatAlt,
  HiOutlineNewspaper,
  HiOutlineInbox,
  HiOutlineDesktopComputer,
} from "react-icons/hi";

import styles from "./LeftNavBar.module.css";

function LeftNavbar() {
  const router = useRouter();
  const pathname = usePathname();

  const navItemsData = [
    { icon: HiOutlineDesktopComputer, path: "/dashboard" },
    { icon: HiOutlineUser, path: "/dashboard/profile" },
    { icon: HiOutlineUserGroup, path: "/dashboard/settings" },
    { icon: HiOutlineAcademicCap, path: "/dashboard/settings" },
    { icon: HiOutlineLightningBolt, path: "/dashboard/settings" },
    { icon: HiOutlineDatabase, path: "/dashboard/settings" },
    { icon: HiOutlineStar, path: "/dashboard/settings" },
    { icon: HiOutlineShoppingBag, path: "/dashboard/settings" },
    { icon: HiOutlineChatAlt, path: "/dashboard/settings" },
    { icon: HiOutlineNewspaper, path: "/dashboard/settings" },
    { icon: HiOutlineInbox, path: "/dashboard/settings" },
  ];

  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.navbar}>
          <ListGroup className={styles.groupContainer}>
            {navItemsData.map((itemData, index) => (
              <LeftNavItem
                key={index}
                icon={itemData.icon}
                path={itemData.path}
                activePath={pathname}
                onNavigate={(path) => router.push(path)}
              />
            ))}
          </ListGroup>
        </div>
        <ReactTooltip />
      </div>
    </>
  );
}

export default LeftNavbar;
