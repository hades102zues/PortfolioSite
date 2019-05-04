import React, { Component } from "react";
import "./MainPage.css";
import { Card, Carousel, Navbar, Nav } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { Link, Element } from "react-scroll";
import { Parallax } from "react-parallax";

import Header from "./Sections/Header/Header.js";
import Showcase from "./Sections/Showcase/Showcase";
import Services from "./Sections/Services/Services";
import Portfolio from "./Sections/Portfolio/Portfolio";
import Testimonial from "./Sections/Testimonial/Testimonial";
import About from "./Sections/About/About";

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
				{/*Testimonial Section*/}

				<Element name="contact" />
				<section className="sec_padding sec_pop">
					<div className="wrapper">
						<div className="sec_title_space">
							<div className="sec_title_box">
								<h2 style={{ color: "white" }}>Get In Touch</h2>
							</div>
						</div>

						<div className="form_space">
							<div className="form_box">
								<Formik>
									<Form className="form">
										<Field
											className="form_input"
											name="name"
											type="text"
											placeholder="Enter Your Full Name"
										/>
										<Field
											className="form_input"
											name="email"
											type="email"
											placeholder="Enter Your Email Address"
										/>
										<Field
											className="form_input"
											name="subject"
											type="text"
											placeholder="Subject"
										/>
										<Field
											className="form_textarea"
											name="message"
											component="textarea"
											placeholder="Enter Your Message Here!"
										/>
										<div className="form_button_space">
											<div className="form_button_box">
												<button type="submit">
													Send
												</button>
											</div>
										</div>
									</Form>
								</Formik>
							</div>
						</div>
					</div>
				</section>

				<footer className="sec_padding">
					<div className="wrapper">
						<h3 className="footer_text">
							&copy; 2019 Joshua Wiggins. All Rights Reserved.
						</h3>
					</div>
				</footer>
			</div>
		);
	}
}

export default MainPage;
