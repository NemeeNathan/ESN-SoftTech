import React, { useEffect, useState } from "react";
import '../Css/about.css';
import about from '../Image/about.png';
import about1 from '../Image/about1.png';
import DM from '../Image/DM.png';
import nemee from '../Image/nemee.png';
import jivin from '../Image/jivin.png';
import san from '../Image/san.png';
import tick from '../Image/tick.png';

const About =()=>{
    const [isOpen, setIsOpen] = useState(false);
    return(
<>

<div className="Navbar">
      <a href="#" className="nav-logo">ESN<span>InfoTech</span></a>
      <div className={`nav-items ${isOpen && "open"}`}>
      <a href="services" className="#">Services</a>
      <a href="About" className="#">About Us</a>
      <a href="Careers" className="#">Careers</a>
      {/* <a href="login" className="#"><i class="fas fa-sign-in-alt" style={{color:"#000048"}}></i>&nbsp; Login</a>
      <a href="Register" className="#"><i class='fas fa-user-plus' style={{color:"#000048"}}></i>&nbsp; Register</a> */}
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    {/* <script>
        $(document).ready(function(){
    $(".mobile-nav i").click(function(){
        $(".site-nav-menu").toggleclassName("mobile-menu");
    })
  });
    </script> */}
    <div className="header">
      <img src={about} alt="about us" width="100%" height="552" className="responsive" />
    </div>
    <div className="middle">
      <h2>How it all started</h2>
      <p>This proverb will fit a majority of the start-up stories and we are not any different.</p>
    </div><br/>
    <div className="content-right">
        <img src={DM} alt="Direct Manager" style={{float:"right"}} className="img-responsive" /><br/>
          <p>
          Our Founder,&nbsp;<strong style={{color:"Highlight",fontFamily:"-moz-initial"}}>Manikandan K</strong><br/>
          after 10 years of working as a software 
          consultant in  identified a gap in the availability of necessary 
          tools in the market when it comes to managing and monitoring Server environments.
          </p>
    </div><br/>
    <div className="content-left">
      <h2>Who is behind ESN SoftTech?</h2>
      <p>
      The frugal mindset of managing money and putting profit alongside 
      growth helped us to scale the company organically to this stage.
      We have a clear focus of "only bite off what we can chew" - slow and steady.
      We aim to be a company that is humane, respectful, transparent, inclusive, 
      socially conscious and a good citizen.
      </p>
    </div><br/>&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <div class="team-profile">
    <div class="row">
      <div class="card">
      <img src={nemee} alt="nemee" />
          <div class="content box-1">
              <h3>NEMEENATHAN E.</h3>
              <p>Full Stack Developer</p>
              <p>CEO</p>
              <ul>
                  <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
              </ul>
          </div>
      </div>
      <div class="card">
       <img src={jivin} alt="nemee" />
        <div class="content box-2">
            <h3>JIVIN K I.</h3>
            <p>Data Analytics </p>
            <ul>
                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
            </ul>
        </div>
    </div>
    <div class="card">
    <img src={san} alt="nemee"/>
      <div class="content box-3">
          <h3>SANDHIYA N.</h3>
          <p>HR</p>
          <ul>
              <li><a href="#"><i class="fab fa-facebook"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
          </ul>
      </div>
  </div>
</div>
</div>  */}
  <div className="top-bottom">
    <h2>Building the Future of Business One Relationship at a Time</h2>
    <p>How a healthcare business is improving operational efficiency with ESNST as a development partner.<br/>
      ESN SoftTech was hired as a partner by a national healthcare service provider to transition from a desktop <br/>
      application to a Next Gen Application for mobile devices, bring a new application to marketand migrate to the cloud
    </p>
  </div>
<div className="footer">
    <div className="social">
    <a href=""><i class="fa fa-phone" style={{fontsize:"20px",color:"#fff"}}>&nbsp;&nbsp;+91 9087069114</i></a><br/>
        <a href=""><i class="fab fa-dribbble" style={{fontsize:"20px",color:"#fff"}}>&nbsp;&nbsp;WWW.esnsofttech.com</i></a><br/>
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=esnsofttech@gmail.com&su=SUBJECT&body=BODY&bcc=&tf=cm"><i class="fa fa-envelope" style={{fontsize:"20px",color:"#fff"}}>&nbsp;&nbsp;esnsofttech@gmail.com</i></a>
        <a href="https://www.google.com/maps/@12.215997,79.658851,16.04z"><i class="fas fa-map-marker-alt" style={{fontsize:"20px",color:"#fff"}}>&nbsp;&nbsp;&nbsp;Marakanam&nbsp;Road,Tindivanam&nbsp;604001</i></a><br/>
        
    </div>
    <p className="text"><br/>“If future generations are to remember us more with gratitude than sorrow,<br/>
        we must achieve more than just the miracles of technology.<br/>
        We must also leave them a glimpse of the world as it was created,<br/>
        not just as it looked when we got through with it.”</p>
    <p className="copyright"> 
        Copyright &copy; || ESN SoftTech || All Rights Reserved !
    </p>
</div>
  
        </>
    )

}
export default About;