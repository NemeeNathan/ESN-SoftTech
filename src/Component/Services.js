import React, {  useState } from "react";
import '../Css/services.css';
import cloud from '../Image/cloud.png';
import cloudcpu from '../Image/cloudcpu.png';
// const openurl = url => {
//   // window.open(url, '_blank', 'noopener,noreferrer');
//      window.open("http://twitter.com/saigowthamr");
// };
const Services =()=>{
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
    </div> <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<div className="one-footer">
     <div className="container">
          <div className="text">
      {/* <h1 style={{fontfamily:"'Times New Roman', Times, serif",fontsize:"12pt"}}>Best E-commerce Design Company in Tindivanam</h1> */}
               <p style={{fontfamily:"'Times New Roman', Times, serif"}}>
                      They had several priorities in the
                      areas of transition from a desktop
                      application to a Next Gen
                      Application for mobile devices,
                      bring a new application to market
                      and migrate to the cloud that were
                      waiting to begin. In addition, they
                      had other projects that had started
                      but could not be completed without
                      additional skills and project
                      oversight.
                 </p>
            </div>
                    <div className="image">
                    <img className="responsive" src="https://www.angularminds.com/site_data/images/ecommerce-development/ecommerce-bg.png" alt="innovation" />
                    </div>
        </div>
    </div>
        <div class="row">
              <div class="column">
                <div class="services-card">
                  <i class='fab fa-gg' style={{color:"red",fontsize:"20pt"}}></i>
                  <h3>Strategy</h3><br/>
                  <p>We get to know about your business and advocate a customized game plan.</p>
                </div>
      </div>

              <div class="column">
                      <div class="services-card">
                      <i class='fab fa-jsfiddle' style={{color:"red",fontsize:"20pt"}}></i><br/>
                        <h3>Technology</h3><br/>
                        <p>We provide a high-end user experience by combining technology with your brands.</p>
                      </div>
              </div>
  
                <div class="column">
                      <div class="services-card">
                      <i class='fab fa-gitter' style={{color:"red",fontsize:"14pt"}}></i><br/>
                        <h3>Sales Growth</h3><br/>
                        <p>We get the desired results for your brand with our result-oriented consultants.</p>
                      </div>
                 </div>
 </div>

        <div className="second-content">
              <img src={cloud} alt="services"  width="320px"  height="320px" style={{float:"right"}}  /><br/>
              <h1>OUR Soft Tech SERVICES ENGAGEMENT MODEL</h1><br/>
              <p>
                  Building a solid client 
                  relationship and creating an excellent customer experience is the 
                  foundation of every long-lasting business. Your business, to become 
                  highly profitable, will need reliable servers, application security, 
                  developers, networks and storage to form the bedrock that’ll last a lifetime.
                  With TechIntelli, take advantage of Microsoft Azure to increase customer engagement 
                  and improve conversion rates all through cloud computing. You’ll benefit from one of 
                  the top cloud computing providers to completely run your business successfully.
                </p>
         </div><br/>
<div className="one-footer">
<div className="container">
<div className="image">
      <img className="responsive" src="https://assets.entrepreneur.com/content/3x2/2000/20191204192951-GettyImages-1136784792.jpeg?auto=webp&quality=95&crop=16:9&width=675" alt="innovation" />
      </div>
      <div className="text">
      <h2 style={{fontfamily:"'Times New Roman', Times, serif",fontsize:"12pt"}}>Belief Powers Business</h2>
      <p style={{fontfamily:"'Times New Roman', Times, serif"}}>
      ESN SoftTech started as a project
      partner to help get a mobile
      application off the ground and soon
      evolved into an engineering partner
      helping the company efficiently
      identify, manage and execute their
      technology and development
      priorities.
      </p>
      </div>
      </div>
    </div><br/>   
    <div className="second-content-left">
        <img src={cloudcpu} alt="services"  width="320px"  height="320px" style={{float:"right"}}  /><br/>
          <h1>OUR CORE BELIEF</h1><br/>
          <p>
            We earn our client’s business every day
            & partner with our clients through innovative & flexible engagement models.
            A number of years ago at our annual kick-off meeting my partners and I presented 
            a set of practices that we measure ourselves against and continue, 
            to the best of our abilities, to live out on a daily basis. 
            These are not platitudes that we published once, these are 
            guiding principles that we use as we deal with clients, hire new employees,
            take into our vendor relationships and use as we work as an executive team.
          </p>
          <h1>LET’S GET STARTED</h1>
          <p>
              Request a call back from our expert now
              and see what the most client centric organization can do for you
              A critical step in starting a business requires developing aquality logo. 
              Unfortunately, not all of us are adept at such tasks.
          </p>
   </div><br/>
<div className="end-footer">
<div className="footer">
    <div className="social">
          <a href=""><i class="fa fa-phone" style={{fontsize:"20px",color:"#fff"}}>&nbsp;&nbsp;+91 9087069114</i></a><br/>
          <a href=""><i class="fab fa-dribbble" style={{fontsize:"20px",color:"#fff"}}>&nbsp;&nbsp;WWW.esnsofttech.com</i></a><br/>
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=esnsofttech@gmail.com&su=SUBJECT&body=BODY&bcc=&tf=cm"><i class="fa fa-envelope" style={{fontsize:"20px",color:"#fff"}}>&nbsp;&nbsp;esnsofttech@gmail.com</i></a>
          <a href="https://www.google.com/maps/@12.215997,79.658851,16.04z"><i class="fas fa-map-marker-alt" style={{fontsize:"20px",color:"#fff"}}>&nbsp;&nbsp;&nbsp;Marakanam&nbsp;Road,Tindivanam&nbsp;604001</i></a><br/>
    </div>
    <p className="text"><br/>
       “If future generations are to remember us more with gratitude than sorrow,<br/>
        we must achieve more than just the miracles of technology.<br/>
        We must also leave them a glimpse of the world as it was created,<br/>
        not just as it looked when we got through with it.”
    </p>
    <p className="copyright"> 
        Copyright &copy; || ESN SoftTech || All Rights Reserved !
    </p>
</div>

</div>


</>
    )

}
export default Services;


  