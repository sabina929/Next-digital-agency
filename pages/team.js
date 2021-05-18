import {useEffect} from 'react'
// import teamTwitter from '../images/team-twitter.png'
// import teamLinkedin from '../images/team-linkedin.png'
// import teamFacebook from '../images/team-facebook.png'
// import avatar from '../images/avatar.png'
import Image  from "next/image";

function Team() {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])
  return (
    <main className="teampage">
            <div className="teamHeading">
                <h1>Team</h1>
            </div>
            <div className="teamContent">
                
                <div className="memberOne member">
                    <div className="memberAvatar">
                    <Image src='/avatar.png' alt="avatar icon" width={20} height={20}/>
                    </div>
                    <h3>Name Surname</h3>
                    <p>Job Title</p>
                    <div className="socialLinks">
                    <Image src='/team-linkedin.png' alt="linkedin icon" width={20} height={20}/>
                    <Image src='/team-twitter.png' alt="twitter icon" width={20} height={20}/>
                    <Image src='/team-facebook.png' alt="facebook icon" width={20} height={20}/>                    
                    </div> 
                </div>
                <div className="memberTwo member">
                    <div className="memberAvatar">
                    <Image src='/avatar.png' alt="avatar icon"  width={20} height={20}/>
                    </div>
                    <h3>Name Surname</h3>
                    <p>Job Title</p>
                    <div className="socialLinks">
                    <Image src='/team-linkedin.png' alt="linkedin icon" width={20} height={20}/>
                    <Image src='/team-twitter.png' alt="twitter icon" width={20} height={20}/>
                    <Image src='/team-facebook.png' alt="facebook icon" width={20} height={20}/>                    
                    </div> 
                </div>
                <div className="memberThree member">
                    <div className="memberAvatar">
                    <Image src='/avatar.png' alt="avatar icon"  width={20} height={20}/>
                    </div>
                    <h3>Name Surname</h3>
                    <p>Job Title</p>
                    <div className="socialLinks">
                    <Image src='/team-linkedin.png' alt="linkedin icon" width={20} height={20}/>
                    <Image src='/team-twitter.png' alt="twitter icon" width={20} height={20}/>
                    <Image src='/team-facebook.png' alt="facebook icon" width={20} height={20}/>                    
                    </div> 
                </div>
                <div className="memberFour member">
                    <div className="memberAvatar">
                    <Image src='/avatar.png' alt="avatar icon"  width={20} height={20}/>
                    </div>
                    <h3>Name Surname</h3>
                    <p>Job Title</p>
                    <div className="socialLinks">
                    <Image src='/team-linkedin.png' alt="linkedin icon" width={20} height={20}/>
                    <Image src='/team-twitter.png' alt="twitter icon" width={20} height={20}/>
                    <Image src='/team-facebook.png' alt="facebook icon" width={20} height={20}/>                    
                    </div> 
                </div>
               
                
            </div>
    </main>

  )
}

export default Team;