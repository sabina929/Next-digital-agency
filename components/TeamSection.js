// import teamTwitter from '../images/team-twitter.png'
// import teamLinkedin from '../images/team-linkedin.png'
// import teamFacebook from '../images/team-facebook.png'
// import avatar from '../images/avatar.png'
import Image  from "next/image";

import styles from '../styles/TeamSection.module.css'

const TeamSection = () => {
    return (
        <section id={styles.team}>
            <div className={styles.teamHeading}>
                <h2>Team</h2>
            </div>
            <div className={styles.teamContent}>
                
            <div className={`${styles.memberOne} ${styles.member}`}>
                    <div className={styles.memberAvatar}>
                    <img src='/avatar.png' alt="avatar icon"/>
                    </div>
                    <h3>Name Surname</h3>
                    <p>Job Title</p>
                    <div className={styles.socialLinks}>
                    <img src='/team-linkedin.png' alt="linkedin icon"/>
                    <img src='/team-twitter.png' alt="twitter icon"/>
                    <img src='/team-facebook.png' alt="facebook icon"/>          
                    </div> 
                </div>
                <div className={`${styles.memberTwo} ${styles.member}`}>
                    <div className={styles.memberAvatar}>
                    <img src='/avatar.png' alt="avatar icon"/>
                    </div>
                    <h3>Name Surname</h3>
                    <p>Job Title</p>
                    <div className={styles.socialLinks}>
                    <img src='/team-linkedin.png' alt="linkedin icon"/>
                    <img src='/team-twitter.png' alt="twitter icon"/>
                    <img src='/team-facebook.png' alt="facebook icon"/>                      
                    </div> 
                </div>
                <div className={`${styles.memberThree} ${styles.member}`}>
                    <div className={styles.memberAvatar}>
                    <img src='/avatar.png' alt="avatar icon"/>
                    </div>
                    <h3>Name Surname</h3>
                    <p>Job Title</p>
                    <div className={styles.socialLinks}>
                    <img src='/team-linkedin.png' alt="linkedin icon"/>
                    <img src='/team-twitter.png' alt="twitter icon"/>
                    <img src='/team-facebook.png' alt="facebook icon"/>                       
                    </div> 
                </div>
                <div className={`${styles.memberFour} ${styles.member}`}>
                    <div className={styles.memberAvatar}>
                    <img src='/avatar.png' alt="avatar icon"/>
                    </div>
                    <h3>Name Surname</h3>
                    <p>Job Title</p>
                    <div className={styles.socialLinks}>
                    <img src='/team-linkedin.png' alt="linkedin icon"/>
                    <img src='/team-twitter.png' alt="twitter icon"/>
                    <img src='/team-facebook.png' alt="facebook icon"/>                        
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default TeamSection