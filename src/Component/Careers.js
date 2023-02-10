/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import '../Css/career.css';
const Careers =()=>{

// Search Bar
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});

  const handleSearch =  async e => {
    e.preventDefault();
    if(search === '') return;


    const endpoint = 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}';
      //  const endpoint ='https://google.com=${search}';
      // https://mydomain/user/123?format=json
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    setResults(json.query.search);
    setSearchInfo(json.query.searchinfo);

  }

// header nave link
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
     <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<br/>
 <div className="container">
    <div className="column-2 box">
        <h1 style={{textAlign: "center",fontfamily:"Times New Roman', Times, serif",fontsize:"pt",color: "#fff"}}>Working at ESN SoftTech</h1><br/>
        <p style={{textAlign: "center",fontfamily:"Times New Roman', Times, serif",color: "#fff",lineheight: "3vh"}}>
            We are people-centric and highly collaborative. Prioritizing longevity, 
            we believe we are on a marathon and not on a sprint, 
            so we focus on work-life balance and happiness at the workplace.
        </p>
    </div>
    <div className="column-2 box">
        <h1 style={{textAlign: "center",fontfamily:"Times New Roman', Times, serif",color: "#fff"}}>Growth opportunity</h1><br/>
        <p style={{textAlign: "center",fontfamily:"Times New Roman', Times, serif",color: "#fff",lineheight: "3vh"}}>
            If you have the potential, we will make sure to bring them out.
            We are proud and happy that our people prefer to continue with us for many years. 
            Pretty much a high retention rate in a highly volatile technology sector.
            This is only possible when the employees truly believe that the company takes care of them.
        </p>
    </div>
</div><br/>
<div className="one-footer">
    <div className="container">
      <div className="text">
      <h1>Greater futures through innovation</h1>
        <p>Watching the world of next-tech unfold? It's time to be part of it.
           Explore challenging and exciting opportunities across the globe.
           One of the biggest contributors to our industry-leading talent retention 
           is our long-standing policy of preferring internal candidates for new leadership positions.</p>
      </div>
      <div className="image">
      <img className="responsive" src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/03/SimplyHired_vs_Indeed_-_article_image.jpg" alt="innovation" />
      </div>
    </div>
    </div>
    <div className="career-apply">
      <h1>Click Job Seeker &nbsp;<i class="fas fa-arrow-circle-down" style={{color: "red",fontsize:"15px"}} aria-hidden="true"></i></h1><br/>
      <a href="ESNCareerStart">Click Now</a>
      <p>Guided search will enable you to find job opportunities across functions and experience levels.</p><br/>
      <div className="">
        <form onSubmit={handleSearch}>
      <input type="search"
             className="search-text" 
             placeholder="search...."
             value={search}
             onChange={e => setSearch(e.target.value)}
      />
  
      </form>
      {(searchInfo.totalhits) ? <p>Search Result: {searchInfo.totalhits}</p> : ''}
    
      </div>
    <div className="results">
      { results.map((result, i) => {
        const url = 'https://en.wikipedia.org/?curid=${result.pageid}';
        return (
          <div className="result" key={i}>
          <h3>{ result.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: result.snippet }}>
      
          </p>
          <a href={url} target="_blank" rel="nofollow">Click here</a>
        </div>

        )
      })

      }
     
    </div>

    </div><br/>
  
  <div className="esn-softtech-career">
  <div class="team-profile">
    <div class="row">
      <div class="card">
      <img src="https://images.prop24.com/278791917" alt="Impact" />
          <div class="content box-1">
              <h4>Leading with purpose</h4><br/>
              <p>Through the application of innovation and our contextual knowledge, 
                we give associates the opportunity to deliver transformative outcomes 
                that benefit society at large and prove that anything is possible.</p><br/>
                <h4>Impact</h4>
          </div>
      </div>
      <div class="card">
       <img src="https://www.randstad.ca/s3fs-media/ca/public/styles/blog_article/public/migration/Ugc/Img/Blog-Image/Summer-Dress-Code-At-Work_0.Jpg?itok=rNEjW3z5" alt="Support" />
        <div class="content box-2">
            <h4>Support</h4><br/>
            <p>Through upskilling and reskilling, and with opportunities to move across the business, our people, 
              regardless of age or stage of their career, 
              are supported to discover and become the professionals they were meant to be.</p><br/>
              <h4>Support</h4>
        </div>
    </div>
    <div class="card">
    <img src="https://www.salesforce.org/wp-content/uploads/2022/03/blog-key-enrollment-indicators-feature.jpg?w=1060&h=706&crop=1" alt="Development"/>
      <div class="content box-3">
          <h4>Continuous learning</h4><br/>
          <p>We equip our associates to deliver innovative solutions, 
            by providing them with opportunities to access and learn from the vast collective experience that exists within TCS.
            We ensure they remain at the cutting edge of change.</p><br/>
            <h4>Development</h4>
      </div>
  </div>
</div>
</div>

  </div><br/>
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
export default Careers;