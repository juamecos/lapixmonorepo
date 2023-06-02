import React from 'react';
import styles from './page.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
