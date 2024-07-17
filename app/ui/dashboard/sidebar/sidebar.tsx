'use client';

import React from "react";
import styles from './sidebar.module.css';
import Image from "next/image";
import { MdArrowLeft, MdArrowRight, MdDashboard, MdLogout, MdOutlineVerifiedUser, MdTableChart } from 'react-icons/md';
import MenuItem from "./menuItem";
import Button from "../../components/button";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
      },
      {
        title: "Projects",
        path: "/dashboard/projects",
        icon: <MdTableChart />
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdOutlineVerifiedUser />
      },
      {
        title: "Logout",
        path: "/logout",
        icon: <MdLogout />
      }
    ]
  }
]

const Sidebar = () => {

  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuClick = () => {
    console.log('Menu clicked');
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={styles.container}>
      <div className={styles.toggle}>
        <Button onClick={handleMenuClick} className={styles.toggleButton}>
          {/* if menu ios open use the left pointing arrow if not use the right */}
          {menuOpen ? <MdArrowLeft /> : <MdArrowRight />}
        </Button>
      </div>
      <div className={styles.user}>
        <Image src="/noavatar.png" alt="User" width={40} height={40} className={styles.userImage} />
        <div className={styles.userDetail}>
          <p className={styles.userName}>John Doe</p>
          <p className={styles.userRole}>Administrator</p>
        </div>
      </div>
      {menuItems.map((item, index) => (
        <div key={index}>
          <p className={styles.menuSectionTitle}>{item.title}</p>
          <ul className={styles.list}>
            {item.list.map((menuItem, index) => (
              <MenuItem key={index} item={menuItem} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default Sidebar;