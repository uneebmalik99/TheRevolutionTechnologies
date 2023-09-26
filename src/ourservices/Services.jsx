import React from 'react';
import './ser.css';
import Static from "../Components/Static";
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Services = () => {
    return (
    <>
          <Static/>

            <div className="containeter-fluid" id='ser-container1'>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="row">
                            <p id='ser-count1-p1'>Services</p>
                            <p id='ser-count1-p2'>We believe the only way to do great work is to love what you do,
                                and we put our heart in whatever job we do.</p>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <img src="images/serimg2.png" id="ser-bg-img" alt="flex img" />

                    </div>
                </div>


            </div>

            


<div class="row BACKING1">
<div class="col-md-6 how-img">
    <img src="images/mypic.png" class=" img-fluid" alt=""/>
</div>
<div class="col-md-6  web_sr">
    <h4>Mobile App Development</h4>
                
<p class="text-muted">Websites for all type of businessesWe built Google friendly websites
 for any industry and users. The sites we built can become the digital HQ for online companies, 
 online shop of individual business owners or studios for young and aspiring artists, creators 
 and users who have something to offer to the world.</p>
</div>
</div>


<div class="row BACKING2">

<div class="col-md-6  web_sr">
    <h4>Web Development</h4>
                
<p class="text-muted">Websites for all type of businessesWe built Google friendly websites
 for any industry and users. The sites we built can become the digital HQ for online companies, 
 online shop of individual business owners or studios for young and aspiring artists, creators 
 and users who have something to offer to the world.</p>
</div>
<div class="col-md-6 how-img">
    <img src="images/jawad1.png" class=" img-fluid" alt=""/>
</div>
</div>

<div class="row BACKING3">
<div class="col-md-6 how-img">
    <img src="images/capture2.png" class=" img-fluid" alt=""/>
</div>
<div class="col-md-6  web_sr">
    <h4>Social Media Marketing</h4>
                
<p class="text-muted">Websites for all type of businessesWe built Google friendly websites
 for any industry and users. The sites we built can become the digital HQ for online companies, 
 online shop of individual business owners or studios for young and aspiring artists, creators 
 and users who have something to offer to the world.</p>
</div>
</div>


<div class="row BACKING2">

<div class="col-md-6  web_sr">
    <h4>UI/UX and Graphics</h4>
                
<p class="text-muted">Websites for all type of businessesWe built Google friendly websites
 for any industry and users. The sites we built can become the digital HQ for online companies, 
 online shop of individual business owners or studios for young and aspiring artists, creators 
 and users who have something to offer to the world.</p>
</div>
<div class="col-md-6 how-img">
    <img src="images/jawad1.png" class=" img-fluid" alt=""/>
</div>
</div>
<div class="how-section1">       
 </div>

{/* Contact US */}

 <div class="container-1">

    <div class="box-1"> 
    <p className='address1'> <LanguageIcon fontSize='large' className='addressicon' />  <h3>Our Address</h3>  Office # 12,Aeies Tower 2nd floor Murree Road,Shamsabad,Rawalpindi </p>
  
    <div class="container-2"> 
    <div class="box-3">
    <p className='Emailus'> <EmailIcon fontSize='large' className='Emailicon' />  <h3>Email Us</h3> info@therevolutiontechnologies.com </p>
    </div>
     <div class="box-4">
    <p className='Contactus'> <AddIcCallIcon fontSize='large' className='contacticon' />  <h3>Contact Us</h3> 0331 7766777 </p>

     </div>
    </div>
    
    
    </div>
    <div class="box-2 "> <h3>Put Your Comment Here</h3>
   < form action="">
      <input type="text" placeholder="Name  " className="contact-input input" /><br></br>
      <input type="text" placeholder="Email" className="contact-input input" /><br></br>
     <textarea name="textbox" id="" cols="" rows="5" placeholder="Message " className="textarea1 contact-input" ></textarea>
    </form>
    </div>

    
     </div>
     
   
     
     
        </>
    );
}
export default Services;