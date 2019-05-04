import React, { Component } from "react";

// import { Card, Carousel, Navbar, Nav } from "react-bootstrap";

// import { Link, Element } from "react-scroll";
// import { Parallax } from "react-parallax";

import Header from "./Sections/Header/Header.js";
import Showcase from "./Sections/Showcase/Showcase";
import Services from "./Sections/Services/Services";
import Portfolio from "./Sections/Portfolio/Portfolio";
import Testimonial from "./Sections/Testimonial/Testimonial";
import About from "./Sections/About/About";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";

class MainPage extends Component {
	render() {
		return (
			<div className="mainPage">
				<Header />
				<Showcase />
				<Services />
				<Portfolio />
				<Testimonial />
				<About />
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default MainPage;
