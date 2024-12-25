import React, { useEffect } from "react";
import Header from "./Header";
import Services from "./Services";
// import Leads from "./Leads";
import Test from "./Test";
import Expert from "./Expert";

import Form from "./Form";
// import WhyUs from "./whyUs";
import Showproject from "./Showproject";
const Home = ({ title }) => {
  useEffect(() => {
    document.title = `${title} - The Revolution Technologies`;
  }, [title]);
  return (
    <>
      <Header />
      <Services />
      <Showproject />
      {/* <Leads /> */}
      <Test />
      {/* <WhyUs /> */}
      <Expert />
      <Form />
    </>
  );
};
export default Home;
