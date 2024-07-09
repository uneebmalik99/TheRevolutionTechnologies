import "./ourteam.css";
import Static from "../Components/Static";
import { useEffect } from "react";

const Team = ({ title }) => {
  useEffect(() => {
    document.title = `${title} - The Revolution Technologies`;
  }, [title]);
  const ourTeam = [
    {
      image: "./images/haseeb.png",
      title: "Haseeb Malik",
      designation: "MD",
      alt: "Haseeb Malik",
      icon: "./images/md.png",
    },
    {
      image: "./images/uneeb.png",
      title: "Uneeb Ghazanfer",
      designation: "CEO",
      alt: "Uneeb Ghazanfer",
      icon: "./images/ceo.png",
    },
    {
      image: "./images/awais.png",
      title: "Awais",
      designation: "Bussiness Developer",
      alt: "Awais",
      icon: "./images/bd.png",
    },
    {
      image: "./images/saqib.png",
      title: "Saqib",
      designation: "SEO",
      alt: "Saqib",
      icon: "./images/seo.png",
    },
    {
      image: "./images/rimsha.png",
      title: "Rimsha Javid",
      designation: "UX/UI & Graphic Designer",
      alt: "Rimsha Javid",
      icon: "./images/graphic.png",
    },
    {
      image: "./images/jawad.png",
      title: "Jawad Khan",
      designation: "UX/UI & Graphic Designer",
      alt: "Jawad Khan",
      icon: "./images/graphic.png",
    },
    {
      image: "./images/falak.png",
      title: "Falak Maraj Mughal",
      designation: "Web Developer",
      alt: "Falak Maraj Mughal",
      icon: "./images/web_developer.png",
    },
    {
      image: "./images/umera.png",
      title: "Umme Umera",
      designation: "Content Writer",
      alt: "Umme Umera",
      icon: "./images/content_writer.png",
    },
    {
      image: "./images/aamir_yasin.png",
      title: "Aamir Yasin",
      designation: "Web Developer",
      alt: "Aamir Yasin",
      icon: "./images/web_developer.png",
    },
    {
      image: "./images/usama.png",
      title: "Muhammad Usama",
      designation: "Web Developer",
      alt: "Muhammad Usama",
      icon: "./images/web_developer.png",
    },
    {
      image: "./images/ayesha.png",
      title: "Ayesha Zia",
      designation: "Content Writer",
      alt: "Ayesha Zia",
      icon: "./images/content_writer.png",
    },
    {
      image: "./images/hamid.png",
      title: "Hamid Nasir",
      designation: "Bussiness Developer",
      alt: "Hamid Nasir",
      icon: "./images/bd.png",
    },
    {
      image: "./images/ayesha.png",
      title: "Waqas",
      designation: "Content Writer",
      alt: "Waqas",
      icon: "./images/content_writer.png",
    },
  ];

  return (
    <>
      <Static />
      <div className="container-fluid " id="team-container">
        <div id="team-right">
          <div id="teaminner">
            <div className="row">
              <h2 id="team-heading">Meet Our Team</h2>
            </div>
            <p id="team-para">
              We are conversation starters and trend-setters. Let’s discover,
              build and grow your digital business
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid" id="team-container2">
        <div className="row">
          <h1>Our Team</h1>
          <h4 id="ourteamclr">Get To Know Us</h4>
        </div>

        <div className="container-fluid teams">
          <div className="row container">
            {ourTeam &&
              ourTeam.map((item, index) => (
                <div className="col-sm-12 col-md-4 col-lg-4" key={index}>
                  <div className="card teamcard">
                    <div className="teamcard1">
                      <div>
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="teamimag"
                          style={{ borderRadius: "80%" }}
                        />
                      </div>
                      <h3>{item.title}</h3>
                    </div>
                    <div className="row team-row-web">
                      <img
                        src={item.icon}
                        alt={item.alt}
                        className="teamwebimg"
                      />
                    </div>
                    <div className="row">
                      <h4>{item.designation}</h4>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
