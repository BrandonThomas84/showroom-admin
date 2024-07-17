import React from "react";
import styles from './sidebar.module.css';
import Image from "next/image";
import { MdDashboard, MdLogout, MdOutlineVerifiedUser, MdTableChart } from 'react-icons/md';
import MenuItem from "./menuItem";

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
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="/noavatar.png" alt="User" width={40} height={40} className={styles.userImage} />
        <div className={styles.userDetail}>
          <p className={styles.userName}>John Doe</p>
          <p className={styles.userRole}>Administrator</p>
        </div>
      </div>
      {menuItems.map((item, index) => (
        <div key={index}>
          <h3 className={styles.menuSectionTitle}>{item.title}</h3>
          <ul className={styles.list}>
            {item.list.map((menuItem, index) => (
              <MenuItem index={index} item={menuItem} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
export default Sidebar;