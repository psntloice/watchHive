// components/Footer.js
import styles from '../styles/Footer.module.css';
import Link from 'next/link';


const Footer = () => (
  <footer className={styles.footer}>
        <li><Link href="/">Settings</Link></li>
        </footer>
);

export default Footer;

