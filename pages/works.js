import {useEffect} from 'react'
import Link from 'next/link'
// import { useWorkContext } from '../components/WorkContext'
import works from '../components/data'
import styles from '../styles/Works.module.css'

function Works() {
//   const {works} = useWorkContext()

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])
  return (
    <main className={styles.worksPage}>
      <div className={styles.worksHeading}>
        <h1>Works</h1>
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
    </main>



  )
}

export default Works;