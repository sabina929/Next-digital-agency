// import arrow from "../images/arrow.png";
// import footerTwitter from "../images/footer-twitter.png";
// import footerLinkedin from "../images/footer-linkedin.png";
// import footerInstagram from "../images/footer-instagram.png";
// import footerFacebook from "../images/footer-facebook.png";
import Image  from "next/image";

import styles from '../styles/Footer.module.css'

const Footer = () => {
  
    return (
        <footer id={styles.contact}>
            <div className={styles.slogan}>
                  <h2>LET'S BUILD</h2>
                  <p>An Awesome Project</p>
            </div>
            <a href="#header" className={styles.upArrow}>
                  <img src='/arrow.png' alt="up arrow"/>
            </a>

            <div className={styles.numberMailSocial}>
                <div className={styles.numberMail}>
                    <p>+(0000) 012 345 67 89</p>
                    <p>hello@domain</p>
                </div>
                <div className={styles.social}>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src='/footer-linkedin.png' alt="linkedin icon" /></a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><img src='/footer-twitter.png' alt="twitter icon" /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src='/footer-instagram.png' alt="instagram icon" /></a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src='/footer-facebook.png' alt="facebook icon" /></a>
                </div>
            </div>
            <div className={styles.addressCopyright}>
                <div className={styles.address}>
                    <p>Street address,</p>
                    <p>City, state, Zip Code</p>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; Copyright, 2021</p>
                    <p>Company Name</p>
                </div>
            </div>
      
        </footer>
    )
}

export default Footer