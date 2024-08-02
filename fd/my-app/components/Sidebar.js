// components/Sidebar.js
import Link from 'next/link';
import { useState } from 'react';
import { ArrowCircleRightIcon } from '@heroicons/react/outline';
import { MenuIcon } from '@heroicons/react/outline'; // Import from Heroicons or another icon library
import styles from '../styles/Sidebar.module.css';

    const Sidebar = ({ isOpen, toggleSidebar }) => {

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.toggleButton} onClick={toggleSidebar}>
        <ArrowCircleRightIcon className="h-6 w-6 text-gray-500" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><Link href="/library">Search</Link></li>
          
          <li><Link href="/watchlist">Your WatchList</Link></li>
          <li><Link href="/favourites">Favourites</Link></li>
          <li><Link href="/releases">Releases</Link></li>
        <li><Link href="/edit">Edit</Link></li>

          <li><Link href="/">Home</Link></li>
          {/* Add more sidebar links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
