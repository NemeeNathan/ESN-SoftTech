import { useState, useEffect } from 'react';
import Moment from 'moment';
import Select from 'react-select'
import { Player, ControlBar } from 'video-react';
import career from '../Image/career.mp4';
import '../Css/esncareerstart.css';
const ESNCareerStart =()=>{

  // Date Picker
  const [startDate, setStartDate] = useState(null);
      
  // Option select
  const options = ['0-1 Years', '2-4 Years', '4-6 Years'];
  const onOptionChangeHandler = (event) => {
      console.log("User Selected Value - ", event.target.value)
  }
  const gender = ['Male','Female','Others'];
  const onOptionsChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value)
}

  // Firebase Connection
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    gen: "",
    dob: "",
    mobile: "",
    city: "",
    state: "",
    designation: "",
    experience: "",
});

let name, value;
const postUserData = (event) => {
  name = event.target.name;
  value = event.target.value;

  setUserData({ ...userData, [name]: value });
};

// connect with firebase
const submitData = async (event) => {
event.preventDefault();
const { fname, lname, email, gen, dob, mobile, city, state, designation, experience } = userData;

if (fname && lname && email && gen && dob && mobile && city && state && designation && experience ) {
const res = fetch(
  "https://esn-softtech-in-default-rtdb.firebaseio.com/user_register.json",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        fname, 
        lname, 
        email,
        gen,
        dob,
        mobile,
        city,
        state,
        designation,
        experience,
    }),
  }
);

if (res) {
    setUserData({
        fname: "",
        lname: "",
        email: "",
        gen: "",
        dob: "",
        mobile: "",
        city: "",
        state: "",
        designation: "",
        experience: "",
    });

alert("Data Stored");
} else {
    alert("Please fill out this field ");
}
} else {
    alert("Please fill out this field ");
}
};

  
  // Date and Time Display
    const formatDate = Moment().format('DD-MM-YYYY')
    const [date, setDate] = useState(new Date());
    function refreshClock() {
        setDate(new Date());
      }
      useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
          clearInterval(timerId);
        };
      }, []);

    
      
  return(
  <>
  <div className="top-nav">
    <h1>&nbsp;&nbsp;<i class='fas fa-street-view'></i>&nbsp;ESNCareerStart</h1>
    <p style={{whitespace: "nowrap",direction: "ltr", display: "inline-block",paddingLeft:"340px"}}>
    <i class="fas fa-calendar-alt"></i>&nbsp;{formatDate}&nbsp;<i class="fas fa-clock"></i>&nbsp;{date.toLocaleTimeString()}</p>
  </div>
  <div className="col-main">
  {/* <img className='responsive' src="https://images.businessnewsdaily.com/app/uploads/2022/04/04081912/Mobile-UX-website-design_scyther5_Getty-Images_BDC.png" alt="Career" /> */}
  <video width="100%" height="" className='responsive'   muted autoPlay={"autoplay"}  loop disableTimer={true} controls={false}>
        <source src={career} type="video/mp4" />
        <ControlBar disableCompletely={true} className="my-class" />
        Your browser does not support this video.
      </video>
      {/* <div class="top-right">
        <a href="login" className="button button1">Login</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="" className="button button1">Register</a>
      </div> */}
  <div class="centered">
  <form method="POST">
 <h2 style={{color:"white",fontFamily:"sans-serif"}}>Intake Form !</h2><br/>
 <input type="text"
         className="contact-input"
         placeholder="Enter Your E-Mail Id"  
         id="" 
         name="email"
         value={userData.email}
         onChange={postUserData}
         /><br/>
 <input type="text"
        className="contact-input"
        placeholder="Enter First Name"   
        id="" 
        name="fname"
        value={userData.fname}
        onChange={postUserData}
        />&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text"
         className="contact-input"
         placeholder="Enter Your Last Name"  
         id="" 
         name="lname"
         value={userData.lname}
         onChange={postUserData}
         />&nbsp;&nbsp;&nbsp;&nbsp;
         <select onChanges={onOptionsChangeHandler} 
           className="contact-select"
           placeholder="Select" 
           id=""
           name="gen"
           value={userData.gen}
           onChange={postUserData}
           >
           <option>Select Gender</option>
                    {gender.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select><br/>
        <input type="text"
            className="contact-input"
            placeholder="Enter Your Mobile  No"  
            id="" 
            name="mobile" 
            value={userData.mobile}
            onChange={postUserData}
         />&nbsp;&nbsp;&nbsp;&nbsp;
         <input type="text"
            className="contact-input"
            placeholder="Enter Your City"  
            id="" 
            name="city" 
            value={userData.city}
            onChange={postUserData}
         />&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text"
            className="contact-input"
            placeholder="Enter Your State"  
            id="" 
            name="state" 
            value={userData.state}
            onChange={postUserData}
         /><br/>
         <input type="text"
            className="contact-input"
            placeholder="Enter Your Designation"  
            id="" 
            name="designation"
            value={userData.designation}
            onChange={postUserData}
         />&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="date"
            className="contact-date"
            style={{width:"20%"}}
            placeholder="Enter Your DOB"  
            id="" 
            name="dob"
            value={userData.dob}
            onChange={postUserData}
         />&nbsp;&nbsp;&nbsp;&nbsp;
         <select onChanges={onOptionChangeHandler}
            className="contact-select"
            placeholder="Select"
            id="" 
            name="experience"
            value={userData.experience}
            onChange={postUserData}
          >
          <option>Select</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
          </select><br/>
       
        </form>
            <input type="submit" 
                  className="button-contact button1"
                  onClick={submitData} 
                  value="Submit" 
                  /> 
    </div><br/>
  <div className="career-footer">
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
</div></div>
  </>
  )
}
export default ESNCareerStart;
// https://www.youtube.com/watch?v=paiI1N96EpQ