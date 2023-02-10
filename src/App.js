import React from "react";
import { Switch,Route } from 'react-router-dom';
import Home from './Component/Home';
import Services from './Component/Services'; 
import About from './Component/About';  
import Careers from './Component/Careers';
import ESNCareerStart from './Component/ESNCareerStart';
// import login from "./Application/login";
// import Register from "./Application/Register";
// import resetpass from "./Application/resetpass";
// import Dashboard from "./Application/Dashboard";
// import { AuthContextProvider } from './context/AuthContext';
const App=()=>{
  return(
    <>
   
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/Services" component={Services}/>
      <Route path="/About" component={About}/>
      <Route path="/Careers" component={Careers}/>
      <Route path="/ESNCareerStart" component={ESNCareerStart} />
      {/* <AuthContextProvider>
      <Route path="/login" component={login} />
      <Route path="/Register" component={Register} />
      <Route path="/resetpass" component={resetpass} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      </AuthContextProvider> */}
    </Switch>
    </>
  )
}
export default App;