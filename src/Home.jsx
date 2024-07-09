import React from "react";
import Header from './Header';
import Services from './Services';
import Leads from './Leads';
import Test from './Test';
import Expert from './Expert';
import Form from './Form';
import WhyUs from "./whyUs";
import Showproject from "./Showproject";

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <Showproject />
            <Leads />
            <Test />
            <WhyUs />
            <Expert />
            <Form />
        </>
    );
}
export default Home;