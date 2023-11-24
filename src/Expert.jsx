
import React, { useState } from 'react';
import './expert.css';

const Expert = () => {
    const [activeButton, setActiveButton] = useState('values');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const renderContent = () => {
       
        if (activeButton === 'values') {
            return (
                
                <div className="row rowlast" >

                                    <div className=" col-sm-12 col-md-2 col-lg-2">
                
                                        <div className=" card exp-card cardimg1 card-colr1 expertbox N1">
                                             <div className="imgcir">
                                                 <img src="images/flexbility.png" className='cardimg' alt="flex img" />
                                         </div>
                                             <p className='pclr'>Flexbility</p>
                
                                     </div>
                
                                 </div>
                                 <div className=" col-sm-12 col-md-2 col-lg-2  ">
                                     <div className="card cardimg1 card-colr2 expertbox N2">
                                         <div className="imgcir2">
                                             <img src="images/exp2.png" className='cardimg2' alt="flex img" />
                                         </div>
                                         <p className='pclr'>EMPOWEMENT</p>
                
                                     </div>
                
                
                                 </div>
                                 <div className=" col-sm-12 col-md-2 col-lg-2 ">
                                 <div className="card cardimg1 card-colr2 N3">
                                         <div className="imgcir2">
                                             <img src="images/exp3.png" className='cardimg2' alt="flex img" />
                                 </div>
                                         <p className='pclr'>INCLUSIVITY</p>
                
                                     </div>
                                      
                                 </div>
                                 <div className=" col-sm-12 col-md-2 col-lg-2 ">
                                 <div className="card cardimg1 card-colr2 N4">
                                         <div className="imgcir2">
                                             <img src="images/exp4.png" className='cardimg2' alt="flex img" />
                                         </div>
                                             <p className='pclr'>DISCIPLINE</p>
                
                                         </div>
                                       
                                     </div>
                                     <div className="  col-sm-12 col-md-2 col-lg-2 ">
                                     <div className="card cardimg1 card-colr2 N5">
                                             <div className="imgcir2">
                                                 <img src="images/exp5.png" className='cardimg2' alt="flex img" />
                                             </div>
                                             <p className='pclr'>GROWYHMINDSET</p>
                
                                         </div>
                                      
                                     </div>
                
                
                
                                 </div>
                    
            );
        } else if (activeButton === 'technologies') {
            return (
                 <div className="background" >
    <div className="row" >
        <div className="col-md-6">
            <div className="t1">
                It was nice working with your team because <br />
                no matter what ideas we come with, you <br />
                guys know how to implement them! Great <br />
                work, guys! Our app has never looked <br />
                better, ever. <br />
                Thank you.
            </div>
        </div>
        <div className=" col-md-6 ">
            <img src="images/g9.png" className="img-fluid" alt="Team" style={{height:"90%", width:"80%" }} />
        </div>
    </div>
</div>
            );
        } else if (activeButton === 'industries') {
            return (
                <div className='container1'>
<div className="row rowlast1">

<div className=" col-sm-12 col-md-2 col-lg-2">

    <div className="card exp-card cardimg1 card-colr1 expertbox N1">
        <div className="imgcir">
            <img src="images/F1.png" className='cardimg' alt="flex img" />
        </div>
        <p className='pclr'>ECOMMERCE</p>

    </div>

</div>
<div className="  col-sm-12 col-md-2 col-lg-2">
    <div className="card cardimg1 card-colr2 expertbox N2">
        <div className="imgcir2">
            <img src="images/F2.png" className='cardimg2' alt="flex img" />
        </div>
        <p className='pclr'>BEAUTY & WELLNESS</p>

    </div>


</div>
<div className=" col-sm-12 col-md-2 col-lg-2">
<div className="card cardimg1 card-colr2 N3">
        <div className="imgcir2">
            <img src="images/F3.png" className='cardimg2' alt="flex img" />
        </div>
        <p className='pclr'>HEALTH</p>

    </div>
  
</div>
<div className=" col-sm-12 col-md-2 col-lg-2">
<div className="card cardimg1 card-colr2 N4">
        <div className="imgcir2">
            <img src="images/F4.png" className='cardimg2' alt="flex img" />
        </div>
        <p className='pclr'>REAL ESTATE</p>

    </div>
   
</div>
<div className="  col-sm-12 col-md-2 col-lg-2">
<div className="card cardimg1 card-colr2 N5">
        <div className="imgcir2">
            <img src="images/F5.png" className='cardimg2' alt="flex img" />
        </div>
        <p className='pclr'>ON DEMAND SERVICES</p>

    </div>
  
</div>



</div>

 <div className="row rowlast1">

<div className=" col-sm-12 col-md-2 col-lg-2">

    <div className="card exp-card cardimg1 card-colr1 expertbox N1">
        <div className="imgcir">
            <img src="images/F6.png" className='cardimg' alt="flex img" />
        </div>
        <p className='pclr'>FINANCE</p>

    </div>

</div>
<div className="  col-sm-12 col-md-2 col-lg-2">
    <div className="card cardimg1 card-colr2 expertbox N2">
        <div className="imgcir2">
            <img src="images/F7.png" className='cardimg2' alt="flex img" />
        </div>
        <p className='pclr'>INDUSTRIALS</p>

    </div>


</div>
<div className=" col-sm-12 col-md-2 col-lg-2">
<div className="card cardimg1 card-colr2 N3">
        <div className="imgcir2">
            <img src="images/F8.png" className='cardimg2' alt="flex img" />
        </div>
        <p className='pclr'>TRAVEL AND TOURISM</p>

    </div>
  
</div>
<div className=" col-sm-12 col-md-2 col-lg-2">
<div className="card cardimg1 card-colr2 N4">
        <div className="imgcir2">
            <img src="images/F9.png" className='cardimg2' alt="flex img" />
        </div>
        <p className='pclr'>AVAITION</p>

    </div>
   
</div>
<div className="  col-sm-12 col-md-2 col-lg-2">
<div className="card cardimg1 card-colr2 N5">
        <div className="imgcir2">
            <img src="images/F10.png" className='cardimg2' alt="flex img" />
        </div>
        <p className='pclr'>EDUCATION</p>

    </div>
  
</div>
</div>


</div>
            );
        }
    };

    return (
        <>
           <div className="container">
  <div className="row">
    <p className='expert-p1'>Why The Revolution Technologies Experts</p>
  </div>
  <div className="row justify-content-center">
    <div className={`f1 col-sm-12 col-md-4 col-lg-1 ${activeButton === 'values' ? 'active' : ''}`} style={{backgroundColor: activeButton === 'values' ? '#fed557' :'white'}}>
      <button className='btn btn-block' onClick={() => handleButtonClick('values')}>Values</button>
    </div>
    <div className={`f2 col-sm-12 col-md-4 col-lg-2 ${activeButton === 'technologies' ? 'active' : ''}`} style={{backgroundColor: activeButton === 'technologies' ? '#fed557' :'white'}}>
      <button className='btn btn-block' onClick={() => handleButtonClick('technologies')}>Technologies</button>
    </div>
    <div className={`f3 col-sm-12 col-md-4 col-lg-2 ${activeButton === 'industries' ? 'active' : ''}`} style={{backgroundColor: activeButton === 'industries' ? '#fed557' :'white'}}>
      <button className='btn btn-block' onClick={() => handleButtonClick('industries')}>Industries</button>
    </div>
  </div>
  <div className="row">
    <p className='expert-p2'>We go the extra mile to ensure everyone feels safe, valued, and motivated in the workspace</p>
  </div>
</div>


            <div className="background">
                <div className="container">
                    <div className="row">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </>
    );
}



export default Expert;