
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <header className={styles.header}>
    <nav>
      <ul className={styles.navList}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/add">Add Movie</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
