import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Form from './Form';
import Solution from './Solution';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Expert from './Expert';
import Test from './Test';
import Introduce from './Introduce';
import Leads from './Leads';
import Services from './Services';
import Header from './Header';



ReactDOM.render(
  <>
  <Header/>,
<Services/>,
  <Leads/>,
  <Introduce/>,
  <Test/>,
  <Expert/>,
  <Solution/>,
  <Form/>,
  <Footer/>
  </>

  ,document.getElementById('root')
);

