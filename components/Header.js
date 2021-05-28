import {useState} from "react";
import Link  from "next/link";
import Image  from "next/image";
import styles from '../styles/Header.module.css'

const Header = ()=> {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
    return (
      <header id={styles.header}>
            <div className={styles.headerLogo}>
                  <Link href="/">
                    {/* <Image src='/main-logo.png' alt="Let's Build logo" width={100} height={20}/> */}
                    {/* <a>Logo</a> */}
                    <img src="/main-logo.png" alt="Let's Build logo" />
                  </Link>
                  
                  
            </div>

            <nav className={styles.bigScreen}>
                <ul className={styles.navLinks}>
                    <li>
                        <Link href="/about" scroll={true}><a>About</a></Link>
                    </li>
                    <li>
                        <Link href="/services" scroll={true}><a>Services</a></Link>
                    </li>
                    <li>
                        <Link href="/works" scroll={true}><a>Works</a></Link>
                    </li>
                    <li>
                        <Link href="/team" scroll={true}><a>Team</a></Link>
                    </li>
                    <li>
                        <a href="#contact">Contact Us</a>
                    </li>
                </ul>
            </nav>
            <div className={`${isOpen ? `${styles.navBtn} ${styles.close}` : `${styles.navBtn}`}`} onClick={handleToggle}>
              <span className={styles.navIcon}></span>
            </div>
            <nav className={`${isOpen ? `${styles.smallScreen} ${styles.open}` : `${styles.smallScreen}`}`}>
              <ul className={styles.navLinks}>
                    <li>
                        <Link href="/about" scroll={true}><a>About</a></Link>
                    </li>
                    <li>
                        <Link href="/services" scroll={true}><a>Services</a></Link>
                    </li>
                    <li>
                        <Link href="/works" scroll={true}><a>Works</a></Link>
                    </li>
                    <li>
                        <Link href="/team" scroll={true}><a>Team</a></Link>
                    </li>
                    <li>
                        <a href="#contact">Contact Us</a>
                    </li>
                </ul>
            </nav>
      
            </header>
    )
  
}

export default Header