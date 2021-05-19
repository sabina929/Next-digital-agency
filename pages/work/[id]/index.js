import {useState, useEffect} from 'react'
// import Link from 'next/link'
import {useRouter} from 'next/router'
// import Navbar from '../../../containers/Navbar'
// import { useWorkContext } from '../components/WorkContext'
// import Image from "next/image";
import works from '../../../components/data'
import styles from '../styles/Work.module.css'

const article = ({id}) => {
    // const {works} = useWorkContext()
    const [work, setWork] = useState({})
    

    // const router = useRouter()
    // const workID = parseInt(router.query.id)

    const workID = parseInt(id)
    
    const findWork = (id)=>{
        const filteredWorks = works.filter(work => {
            // console.log(workID, work.id)
            return work.id === id
        })
        // console.log(filteredWorks)
        // console.log(typeof workID)
        setWork(filteredWorks[0])
    }
    
    useEffect(() => {        
        findWork(workID)
      }, [workID])

      useEffect(()=>{
        window.scrollTo(0, 0)
      },[])
      
    return (
        <>

            <section id={styles.work}>
            <div className={`${styles.work}-${work.id} ${styles.work}`}>
                <img src={work.imgSrc} alt="project"/>
                {/* <div className="overlay"></div> */}
                <h3>{work.projectName}</h3>
                <p>{work.largeDescription}</p>
            </div>

        </section>
    </>
    )
}

article.getInitialProps = async ({ query }) => {
    const {id} = query
  
    return {id}
  }
export default article