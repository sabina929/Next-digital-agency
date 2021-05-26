import { useEffect} from 'react'

import Image  from "next/image";
import styles from '../styles/Services.module.css'
function Services() {
//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [])
  return (
    <main className={styles.servicesPage}>
            <div className={styles.servicesHeading}>
                <h1>Services</h1>
            </div>
            <div className={styles.servicesContent}>
                
                <div className={`${styles.optionOne} ${styles.option}`}>
                    <img src='/service-1.png' alt="illustration of geometric shapes and phone"/>
                    <div className={styles.serviceName}>
                        <h3>Lorem Ipsum</h3>
                    </div>
                    <div className={styles.services}>
                        <div className={styles.checked}>
                        <img src='/checked-m.png' alt="checked icon"/>
                        <p>Adipiscing</p>
                        </div>
                        <div className={styles.checked}>
                        <img src='/checked-m.png' alt="checked icon"/>
                        <p>Consectetur</p>
                        </div>
                        <div className={styles.checked}>
                        <img src='/checked-m.png' alt="checked icon"/>
                        <p>Voluptate</p>
                        </div>
                    </div>
                    <p>$400</p>
                </div>
                <div className={`${styles.optionTwo} ${styles.option}`}>
                    <img src='/service-2.png' alt="illustration of geometric shapes and world web"/>
                    <div className={styles.serviceName}>
                        <h3>Adipiscing Elit</h3>
                    </div>
                    <div className={styles.services}>
                        <div className={styles.checked}>
                        <img src='/checked-y.png' alt="checked icon"/>
                        <p>Adipiscing</p>
                        </div>
                        <div className={styles.checked}>
                        <img src='/checked-y.png' alt="checked icon"/>
                        <p>Consectetur</p>
                        </div>
                        <div className={styles.checked}>
                        <img src='/checked-y.png' alt="checked icon"/>
                        <p>Voluptate</p>
                        </div>
                    </div>
                    <p>$800</p>
                </div>
                <div className={`${styles.optionThree} ${styles.option}`}>
                    <img src='/service-3.png' alt="illustration of geometric shapes and lock"/>
                    <div className={styles.serviceName}>
                        <h3>Facere possima</h3>
                    </div>
                    <div className={styles.services}>
                        <div className={styles.checked}>
                        <img src='/checked-c.png' alt="checked icon"/>
                        <p>Adipiscing</p>
                        </div>
                        <div className={styles.checked}>
                        <img src='/checked-c.png' alt="checked icon"/>
                        <p>Consectetur</p>
                        </div>
                        <div className={styles.checked}>
                        <img src='/checked-c.png' alt="checked icon"/>
                        <p>Voluptate</p>
                        </div>
                    </div>
                    <p>$1200</p>
                </div>
            </div>
    </main>
  )
}

export default Services;