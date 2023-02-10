import React, {  useState } from "react";
import '../Css/home.css';
import banner from '../Image/banner.png';
import banner1 from '../Image/banner1.png';

const Home =()=>{
    const [isOpen, setIsOpen] = useState(false);
    return(
<>

<div className="Navbar">
      <a href="#" className="nav-logo">ESN<span>SoftTech</span></a>
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
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script><br />
        <img src={banner} alt="nemee" width="100%" height="552" className="responsive" /><br/>
        <h3 style={{color: "red",textAlign:"center",fontStyle:"oblique"}}>WHAT WE DO</h3>
        <h2 style={{textAlign:"center",color: "#272B36",fontsize: "30px",fontweight: "600",lineheight: "48px",fontfamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",fontstyle: "italic",letterspacing: "-1px"}}>Software engineers that understand business priorities.<br/>
            Business leaders that understand development decisions.</h2><br/>
        <div className="row-n">
            <div className="column-n">
                <div className="card-n">
                    <h3 style={{fontfamily: "Courier New', Courier, monospace"}}>PARTNER</h3><br/>
                    <i className='far fa-handshake' style={{fontsize:"36px",color:"red"}}></i>
                    <p style={{fontfamily: "Times New Roman', Times, serif;font-size:20px"}}>We start with your objectives and align the experience with the project management, 
                    development expertise, and talent resources needed to extend your team and reach your goals.</p>    
                </div>
            </div>
            <div class="column-n">
        <div class="card-n">
           <h3 style={{fontfamily: "Courier New', Courier, monospace"}}>CREATE</h3><br/>
          <i class='far fa-address-card' style={{fontsize:"36px",color:"red"}}></i>
          <p style={{fontfamily:"Times New Roman', Times, serif",fontsize:"20px"}}>Give life to the idea or project that you have been thinking about with the confidence that our expert engineers will deliver on time,
             on-budget and on-target.</p>
        </div>
      </div>

    <div class="column-n">
    <div class="card-n">
            <h3 style={{fontfamily: "Courier New', Courier, monospace"}}>TRANSFORM</h3><br/>
            <i class='fas fa-cloud' style={{fontsize:"36px",color:"red"}}></i>
            <p style={{fontfamily:"Times New Roman', Times, serif",fontsize:"20px"}}>Don’t settle for going through the motions.
               Transform the experience of your employees and customers with a modern software experience designed with purpose.</p>
    </div>
    </div>
    <div class="column-n">
        <div class="card-n">
                <h3 style={{fontfamily: "Courier New', Courier, monospace"}}>PERFORM</h3><br/>
                <i class='fas fa-poll' style={{fontsize:"36px",color:"red"}}></i>
                <p style={{fontfamily:"Times New Roman', Times, serif",fontsize:"20px"}}>Project is the opportunity for a Scout to demonstrate leadership of others while performing a project for the benefit of any religious institution, 
                    any school, or his community.</p>
        </div>
        </div>
        </div><br/>
        <h1 style={{textAlign:"center",color: "crimson",fontsize: "16pt",fontfamily:"Verdana, Geneva, Tahoma, sans-serif"}}>Life at ESN SoftTech</h1>
        <p style={{textAlign: "center",fontsize: "17pt",color: "black",fontfamily:"Times New Roman', Times, serif"}}>Work Hard! Play Hard! <strong>“Technology is best when it brings people together.”</strong></p><br/>
        <img src={banner1} alt="nemee" width="100%" height="552" className="responsive" />

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

{/* <div className="popup">
    <button  id="close">&times;</button>
    &nbsp;
    <img src={tick} alt="nemee" className="responsive" />
    <p>
        Web development is the building and maintenance of websites; 
        it's the work that happens behind the scenes to make a website look great,
        work fast and perform well with a seamless user experience. 
        Web developers, or 'devs', do this by using a variety of coding languages.
    </p>
    <a href="#">Let's Go</a>
</div>
<script>
window.addEventListener("load", function(){
setTimeout(
    function open(event){
        document.querySelector(".popup").style.display = "block";
    },
    2000 
)
});
document.querySelector("#close").addEventListener("click", function(){
document.querySelector(".popup").style.display = "none"
});
</script> */}
</>
    )

}
export default Home;