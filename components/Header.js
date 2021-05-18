import {useState} from "react";
import Link  from "next/link";
import Image  from "next/image";
import styles from '../styles/Header.module.css'

const Header = ()=> {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setState(!isOpen)
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
            <div className={`${styles.navBtn} ${isOpen ? styles.close : 'null'}`} onClick={handleToggle}>
              <span className="navIcon"></span>
            </div>
            <nav className={`${styles.smallScreen} ${isOpen ? styles.open : 'null'}`}>
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