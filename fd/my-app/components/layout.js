// import Navbar from './Navbar'
// import Footer from './Footer'
// import Head from 'next/head';

 
// export default function Layout({ children }) {
//   return (
//     <>
//     <Head>
//        <title>WatchHive</title>
//        <link rel="icon" href="/favicon.ico" />
//     </Head>
//       <Navbar />
//       <main>{children}</main>
//       <Footer />
//     </>
//   )
// }

// components/Layout.js
// import Head from 'next/head';
// import { Sidebar } from './Sidebar';
// import styles from '../styles/Layout.module.css';

// const Layout = ({ children }) => (
//   <div className={styles.container}>
//     <Head>
//     <title>WatchHive</title>
//     <link rel="icon" href="/favicon.ico" />
//     </Head>
//     <Sidebar />
//     <div className={styles.content}>
//       <Navbar />
//       <main className={styles.main}>{children}</main>
//       <Footer />
//     </div>
//     <main className={styles.main}>
//       {children}
//     </main>
//     <Footer />

//   </div>
// );

// export default Layout;


// components/Layout.js
import Head from 'next/head';
import Sidebar from './Sidebar'; // Assuming Sidebar is default exported
import Navbar from './Navbar'; // Assuming Navbar is default exported
import Footer from './Footer'; // Assuming Footer is default exported
import styles from '../styles/Layout.module.css';
import { useState } from 'react';
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';

import { MenuIcon } from '@heroicons/react/outline'; // Import from Heroicons or another icon library



// const Layout = ({ children }) => (
  const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return(
  <div className={styles.container}>
    <Head>
      <title>WatchHive</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className={styles.content}>
      <main className={styles.main}>
      <button onClick={toggleSidebar} className={styles.sidebarToggle}>
      <ArrowCircleLeftIcon className="h-6 w-6 text-gray-500" />
      </button>
        {children}</main>
      {/* <main className={styles.main}>
     {children}
    </main> */}
    </div>
  </div>
);
  };

export default Layout;

