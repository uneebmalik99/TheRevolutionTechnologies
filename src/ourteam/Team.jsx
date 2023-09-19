import react from 'react';
import './ourteam.css';
import Static from "../Components/Static";


const Team = () => {

  return (
    <>
     <Static/>
      <div className="container-fluid " id='team-container'>
        <div id="team-right">
          <div id="teaminner">
            <div className="row">
              <h2 id='team-heading'>Meet Our Team</h2>
            </div>

            <p id='team-para'>We are conversation starters and trend-setters. Let’s discover, build and grow your digital business</p>
          </div>

        </div>

      </div>

      <div className="container-fluid" id='team-container2'>
        <div className="row">
          <h4>Our Team</h4>
          <h4 id='ourteamclr'>Get To Know Us</h4>
        </div>

        <div className="container-fluid teams " id='team-count3'>

          <div className="row  container  ">
            <div className="col-sm-12 col-md-4 col-lg-4 ">
              <div className="card teamcard " >
                <div className=" teamcard1">
                  <div>
                    <img src="./images/teamcir2.png" alt="image" srcset="" className='teamimag' />
                  </div>
                  <h3>Adam jonson</h3>
                </div>
                <div className="row team-row-web">
                  <img src="./images/teamweb1.png" alt="image" srcset="" className='teamwebimg' />
                </div>
                <div className="row">

                  <h4>Web Developer</h4>
                </div>

              </div>

            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
              <div className="card teamcard" >
                <div className=" teamcard1">
                  <div>
                    <img src="./images/teamcir2.png" alt="image" srcset="" className='teamimag' />
                  </div>
                  <h3>Adam jonson</h3>
                </div>
                <div className="row team-row-web">
                  <img src="./images/teamweb1.png" alt="image" srcset="" className='teamwebimg' />
                </div>
                <div className="row">

                  <h4>Web Developer</h4>
                </div>


              </div>

            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="card teamcard" >
                <div className=" teamcard1">
                  <div>
                    <img src="./images/teamcir3.png" alt="image" srcset="" className='teamimag' />
                  </div>
                  <h3>Adam jonson</h3>
                </div>
                <div className="row team-row-web">
                  <img src="./images/teamweb1.png" alt="image" srcset="" className='teamwebimg' />
                </div>
                <div className="row">

                  <h4>Web Developer</h4>
                </div>

              </div>

            </div>
          </div>
          {/* //2nd row */}
          <div className="row container ">
            <div className="col-sm-12 col-md-4 col-lg-4 mb-5">
            <div className="card teamcard" >
                <div className=" teamcard1">
                  <div>
                    <img src="./images/teamcir4.png" alt="image" srcset="" className='teamimag' />
                  </div>
                  <h3>Adam jonson</h3>
                </div>
                <div className="row team-row-web">
                  <img src="./images/teamweb1.png" alt="image" srcset="" className='teamwebimg' />
                </div>
                <div className="row">

                  <h4>Web Developer</h4>
                </div>

              </div>

            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card teamcard" >
                <div className=" teamcard1">
                  <div>
                    <img src="./images/teamcir4.png" alt="image" srcset="" className='teamimag' />
                  </div>
                  <h3>Adam jonson</h3>
                </div>
                <div className="row team-row-web">
                  <img src="./images/teamweb1.png" alt="image" srcset="" className='teamwebimg' />
                </div>
                <div className="row">

                  <h4>Web Developer</h4>
                </div>

              </div>

            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card teamcard" >
                <div className=" teamcard1">
                  <div>
                    <img src="./images/teamcir4.png" alt="image" srcset="" className='teamimag' />
                  </div>
                  <h3>Adam jonson</h3>
                </div>
                <div className="row team-row-web">
                  <img src="./images/teamweb1.png" alt="image" srcset="" className='teamwebimg' />
                </div>
                <div className="row">

                  <h4>Web Developer</h4>
                </div>

              </div>

            </div>
            {/* end of 2nd row */}
          </div>

        </div>

      </div>
    </>

  );
}

export default Team;