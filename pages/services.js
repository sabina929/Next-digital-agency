import { useEffect} from 'react'
// import checkedOne from '../images/checked-m.png'
// import checkedTwo from '../images/checked-y.png'
// import checkedThree from '../images/checked-c.png'
// import serviceOne from '../images/service-1.png'
// import serviceTwo from '../images/service-2.png'
// import serviceThree from '../images/service-3.png'

import Image  from "next/image";

function Services() {
//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [])
  return (
    <main className="servicesPage">
            <div className="servicesHeading">
                <h1>Services</h1>
            </div>
            <div className="servicesContent">
                
                <div className="optionOne option">
                    {/* <Image src='/service-1.png' alt="illustration of geometric shapes and phone" width={40} height={40}/> */}
                    <img src='/service-1.png' alt="illustration of geometric shapes and phone"/>
                    <div className="service-name">
                        <h3>Lorem Ipsum</h3>
                    </div>
                    <div className="services">
                        <div className="checked">
                        {/* <Image src='/checked-m.png' alt="checked icon" width={40} height={40}/> */}
                        <img src='/checked-m.png' alt="checked icon"/>
                        <p>Adipiscing</p>
                        </div>
                        <div className="checked">
                        {/* <Image src='/checked-m.png' alt="checked icon" width={40} height={40}/> */}
                        <img src='/checked-m.png' alt="checked icon"/>
                        <p>Consectetur</p>
                        </div>
                        <div className="checked">
                        {/* <Image src='/checked-m.png' alt="checked icon" width={40} height={40}/> */}
                        <img src='/checked-m.png' alt="checked icon"/>
                        <p>Voluptate</p>
                        </div>
                    </div>
                    <p>$400</p>
                </div>
                <div className="optionTwo option">
                    <img src='/service-2.png' alt="illustration of geometric shapes and world web"/>
                    <div className="service-name">
                        <h3>Adipiscing Elit</h3>
                    </div>
                    <div className="services">
                        <div className="checked">
                        {/* <Image src='/checked-y.png' alt="checked icon" width={40} height={40}/> */}
                        <img src='/checked-y.png' alt="checked icon"/>
                        <p>Adipiscing</p>
                        </div>
                        <div className="checked">
                        {/* <Image src='/checked-y.png' alt="checked icon" width={40} height={40}/> */}
                        <img src='/checked-y.png' alt="checked icon"/>
                        <p>Consectetur</p>
                        </div>
                        <div className="checked">
                        {/* <Image src='/checked-y.png' alt="checked icon" width={40} height={40}/> */}
                        <img src='/checked-y.png' alt="checked icon"/>
                        <p>Voluptate</p>
                        </div>
                    </div>
                    <p>$800</p>
                </div>
                <div className="optionThree option">
                    {/* <Image src='/service-3.png' alt="illustration of geometric shapes and lock"  width={20} height={20}/> */}
                    <img src='/service-3.png' alt="illustration of geometric shapes and lock"/>
                    <div className="service-name">
                        <h3>Facere possima</h3>
                    </div>
                    <div className="services">
                        <div className="checked">
                        {/* <Image src='/checked-c.png' alt="checked icon" width={40} height={40}/> */}
                        <img src='/checked-c.png' alt="checked icon"/>
                        <p>Adipiscing</p>
                        </div>
                        <div className="checked">
                        {/* <Image src='/checked-c.png' alt="checked icon" width={40} height={40}/> */}
                        <img src='/checked-c.png' alt="checked icon"/>
                        <p>Consectetur</p>
                        </div>
                        <div className="checked">
                        {/* <Image src='/checked-c.png' alt="checked icon" width={40} height={40}/> */}
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