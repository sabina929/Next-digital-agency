import Image  from "next/image";
import styles from '../styles/AboutSection.module.css'

const AboutSection = () => {
    return (
        <section id={styles.about}>
            <div className={styles.aboutHeading}>
                <h2>About</h2>
            </div>
                
            <div className={styles.aboutContent}>
                <p>
                    Sed id semper risus in hendrerit gravida rutrum. Gravida arcu tortor dignissim convallis aenean. At volutpat diam ut venenatis tellus in. Donec ultrices tincidunt arcu non sodales neque sodales ut. Eu integer vitae justo eget magna fermentum. Tristique aliquet enim at auctor. Lectus duis ultrices conva convallis tellus id.

                </p>
                <div className={styles.illustration}>
                    <img src='/about-illustration.png' alt="illustration of geometric shapes"/>
                </div>
            </div>
        </section>
    )
}

export default AboutSection