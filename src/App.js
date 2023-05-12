import React from "react";
import "./components/Navbar.css";
import Navbar from "./components/Navbar";
import {Routes, Route } from "react-router-dom";
import { H1 } from "./components/Pages/H1";
const Home = () => {
  return (
    <>
      <Navbar />
      <H1 />
    </>
  );
};

const Services = () => {
  return (
    <>
      <Navbar />
      <section className='section'>
            <p>Hello</p>
            <h1>Welcome to <br /> Services Page</h1>
        </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className='section'>
            <p>Hello</p>
            <h1>Welcome to <br /> About Page</h1>
        </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className='section'>
            <p>Hello</p>
            <h1>Welcome to <br /> Contact Page</h1>
        </section>
    </>
  );
};
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />

      <Route exact path="/Services" element={<Services/>} />

      <Route exact path="/About" element={<About/>} />

      <Route exact path="/Contact" element={<Contact/>} />

    </Routes>
  );
};
export default App;

