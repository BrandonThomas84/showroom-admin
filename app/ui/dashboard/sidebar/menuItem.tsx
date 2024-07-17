import React from 'react';
import styles from './menuItem.module.css'
import Link from 'next/link';

type MenuItemProps = {
  item: {
    path: string;
    icon: React.ReactNode;
    title: string;
  }
}

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <li className={styles.item}>
      <Link href={item.path} className={styles.link}>
        <div className={styles.itemIcon}>
          {item.icon}
        </div>
        <div className={styles.linkText}>
          {item.title}
        </div>
      </Link>
    </li>
  )
}

export default MenuItem;