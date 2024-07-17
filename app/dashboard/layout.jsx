import { Inter } from 'next/font/google';
import styles from './dashboard.module.css';

const { default: Navbar } = require("../ui/dashboard/navbar/navbar");
const { default: Sidebar } = require("../ui/dashboard/sidebar/sidebar");

const inter = Inter({subsets: ['latin']})

export const metaData = {
  title: 'Dashboard (test)',
  description: 'Test dashboard for administrative purposes',
}

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.container}>
          <div className={styles.menu}>
            <Sidebar />
          </div>
          <div className={styles.content}>
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
export default Layout;