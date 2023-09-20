import React from "react";
import './Servicesoffer.css'
// const Servicesoffer=()=>{
//     return(
//         <>
//             <h4 style={{justifyContent:"center", alignItems:"center", display:"flex"}}>Services we Offer</h4>
//             <div className="servicesoffer col-12 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            
// <div className="col-4 first">
// <img src="./images/icon1.png"/>
// <h4>
// Web Development</h4>
// <p>We carry more than just good coding skills. Our experience makes us stand out form other web development </p>
// </div>
// <div className="col-4 second">
// <img src="./images/i2.png"/>
// <h4>Mobile App Development</h4>
// <p>We carry more than just good coding skills. Our experience makes us stand out form other web development </p>
// </div>
// <div className="col-4 third">
// <img src="./images/i3.png"/>
// <h4>UI/UX</h4>
// <p>We carry more than just good coding skills. Our experience makes us stand out form other web development </p>
// </div>
//             </div>
//             <div className="servicesoffer1 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
// <div className="col-4 first">
// <img src="./images/i4.png"/>
// <h4>Pey per call</h4>
// <p>We carry more than just good coding skills. Our experience makes us stand out form other web development </p>
// </div>
// <div className="col-4 second">
// <img src="./images/i2.png"/>
// <h4>
// Pay per Aquisition</h4>
// <p>We carry more than just good coding skills. Our experience makes us stand out form other web development </p>
// </div>
// <div className="col-4  third">
// <img src="./images/i3.png"/>
// <h4>
// Lead Gerenation</h4>
// <p>We carry more than just good coding skills. Our experience makes us stand out form other web development </p>
// </div>
//             </div>
//         </>
//     );

// }

// export default Servicesoffer
const ServicesOffer = () => {
    return (
        <>
        <div className="container1">
            <h4 className="text-center mt-4 mb-4">Services we Offer</h4>
            <div className="container">
                <div className="row">
                    <div className="mainy col-md-6 col-lg-4 mb-4">
                        <div className="service-card text-center p-4">
                            <img src="./images/icon1.png" alt="Web Development" />
                            <h4>Web Development</h4>
                            <p>We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
                        </div>
                    </div>
                    <div className=" mainy col-md-6 col-lg-4 mb-4">
                        <div className="service-card text-center p-4">
                            <img src="./images/i2.png" alt="Mobile App Development" />
                            <h4>Mobile App Development</h4>
                            <p>We carry more than just good coding skills. Our experience makes us stand out from other mobile app development.</p>
                        </div>
                    </div>
                    <div className=" mainy col-md-6 col-lg-4 mb-4">
                        <div className="service-card text-center p-4">
                            <img src="./images/i3.png" alt="UI/UX" />
                            <h4>UI/UX</h4>
                            <p>We carry more than just good coding skills. Our experience makes us stand out from other UI/UX design.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className=" mainy col-md-6 col-lg-4 mb-4">
                        <div className="service-card text-left p-4">
                            <img src="./images/i4.png" alt="Pay per Call" />
                            <h4>Pay per Call</h4>
                            <p>We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
                        </div>
                    </div>
                    <div className=" mainy col-md-6 col-lg-4 mb-4">
                        <div className="service-card text-left p-4">
                            <img src="./images/i2.png" alt="Pay per Acquisition" />
                            <h4>Pay per Acquisition</h4>
                            <p>We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
                        </div>
                    </div>
                    <div className=" mainy col-md-6 col-lg-4 mb-4">
                        <div className="service-card text-left p-4">
                            <img src="./images/i3.png" alt="Lead Generation" />
                            <h4>Lead Generation</h4>
                            <p>We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default ServicesOffer;
