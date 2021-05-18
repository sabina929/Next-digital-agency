import {useEffect} from 'react'
import Link from 'next/link'
// import { useWorkContext } from './WorkContext'
import works from './data'

import styles from '../styles/WorksSection.module.css'

const WorksSection = () => {
    // const {works} = useWorkContext()
    return (
        <section id={styles.works}>
            <div className={styles.worksHeading}>
                <h2>Works</h2>
            </div>
                
            <div className={styles.worksContent}>

                {
                    works.map(work => {
                        // console.log(work.imgSrc)
                        return (
                            <Link href={`/work/${work.id}`} key={work.id}>
                            
                                <div className={`${styles.work}-${work.id} ${styles.work}`}>
                                    <img src={work.imgSrc} alt="project"/>
                                    <div className={styles.overlay}></div>
                                    <h3>{work.projectName}</h3>
                                    <p>{work.shortDescription}</p>
                                </div>
                            </Link>
                        )
                    })
                }
               
               
            </div>
        </section>
    )
}

export default WorksSection