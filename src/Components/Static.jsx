import React, { useState } from "react";

const Static=()=>{
    const [show, setShow] = useState(false);

    const handleButton = () => {
        setShow(!show)
    }

    return(
        <>
         {/* <div className="fixed">
                       <div id="pos-inq" style={{zIndex : "5"}}>
                     inqurie now.      
                      
                       </div>

                        <button className="btn  port-btn" onClick={handleButton} > + </button>

                        {
                            show == true &&

                            <div>
                                <a href="www.facebook.com" target={"_blank"}><img src="./images/fb_icon_325x325.png" className="port-btn2 " alt="faceook" srcset="" /></a>
                                <a href="www.facebook.com" target={"_blank"}><img src="./images/count55img.png" className="port-btn3" alt="faceook" srcset="" /></a>
                                <a href="www.facebook.com" target={"_blank"}><img src="./images/instagram.png"className="port-btn4" alt="instagram" srcset="" /></a>
                            </div>


                        }

                       

                    </div> */}
        
        </>
    )
}
export default Static;