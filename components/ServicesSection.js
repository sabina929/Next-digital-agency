// import checkedOne from '../images/checked-m.png'
// import checkedTwo from '../images/checked-y.png'
// import checkedThree from '../images/checked-c.png'
// import serviceOne from '../images/service-1.png'
// import serviceTwo from '../images/service-2.png'
// import serviceThree from '../images/service-3.png'
// import Image from "next/image";

import styles from '../styles/ServicesSection.module.css'

const ServicesSection = () => {
    return (
        <section id={styles.services}>
            <div className={styles.servicesHeading}>
                <h2>Services</h2>
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
        </section>
    )
}

export default ServicesSection