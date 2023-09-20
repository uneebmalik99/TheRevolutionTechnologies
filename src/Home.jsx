import React from "react";
import Header from './Header';
import Services from './Services';
import Leads from './Leads';
import Introduce from './Introduce';
import Test from './Test';
import Expert from './Expert';
import Solution from './Solution';
import Form from './Form';
import Servicesoffer from './Servicesoffer'

const Home=()=>{

    return(
        <>
   
  <Header/>,
  <Servicesoffer/>,
<Services/>,
  <Leads/>,
  <Introduce/>,
  <Test/>,
  <Expert/>,
  <Solution/>,
  <Form/>,
  
        
        </>

    );
        


    
}
export default Home;