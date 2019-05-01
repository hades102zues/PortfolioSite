import React, { Component } from "react";
import "./MainPage.css";
import { Card, Carousel, Navbar, Nav } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { Link, Element } from "react-scroll";
import { Parallax } from "react-parallax";

import showcase_img from "./assests/paralax1.jpeg";

class MainPage extends Component {
	render() {
		return (
			<div className="mainPage">
				<header>
					<Navbar
						collapseOnSelect
						expand="lg"
						bg="dark"
						variant="dark"
						className="nav_space"
					>
						<div className="container wrapper">
							<Link
								to="showcase"
								activeClass="sec_pop"
								smooth
								duration={1000}
							>
								<Navbar.Brand>
									<span class=" brand">Joshua Wiggins</span>
								</Navbar.Brand>
							</Link>
							<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							<Navbar.Collapse id="responsive-navbar-nav">
								<Nav className="mr-auto" />
								<Nav className="adjust">
									<Link to="services" duration={1000} smooth>
										<Nav.Link href="#">
											<span className="nav_text">
												Serivces
											</span>
										</Nav.Link>
									</Link>

									<Link to="portfolio" duration={1000} smooth>
										<Nav.Link href="#">
											<span className="nav_text">
												Portfolio
											</span>
										</Nav.Link>
									</Link>
									<Link to="about" duration={1000} smooth>
										<Nav.Link href="#">
											<span className="nav_text">
												About
											</span>
										</Nav.Link>
									</Link>

									<Link to="contact" duration={1000} smooth>
										<Nav.Link href="#">
											<span className="nav_text">
												Contact
											</span>
										</Nav.Link>
									</Link>
								</Nav>
							</Navbar.Collapse>
						</div>
					</Navbar>
				</header>

				<Element name="showcase">
					<Parallax
						bgImageAlt="showcase_image"
						bgImage={showcase_img}
						strength={700}
					>
						<section className="showcase ">
							<div className="selling_point_space">
								<div className="selling_point_box">
									<h1>Full-Stack Web Developer</h1>
									<p>
										Producing high quality responsive
										websites.
									</p>
								</div>
							</div>
							<div className="find_out_space">
								<div className="find_out_box">
									<Link to="services" duration={1000} smooth>
										<button>Find out More </button>
									</Link>
								</div>
							</div>
						</section>
					</Parallax>
				</Element>

				<Element name="services" />
				<section className="sec_padding">
					<div className="wrapper">
						<div className="sec_title_space">
							<div className="sec_title_box">
								<h2>Services</h2>
								<div className="sec_title_underline " />
							</div>
						</div>

						<div className="services_space">
							<div className="services_box">
								<article className="service_card">
									<div className="service_img_space">
										<div className="service_img_box">
											<img alt="service_icon" />
										</div>
									</div>
									<div className="service_body">
										<p className="service_title">
											Something
										</p>
										<p className="service_description">
											blah blah blah
										</p>
									</div>
								</article>
								<article className="service_card">
									<div className="service_img_space">
										<div className="service_img_box">
											<img alt="service_icon" />
										</div>
									</div>
									<div className="service_body">
										<p className="service_title">
											Something
										</p>
										<p className="service_description">
											blah blah blah
										</p>
									</div>
								</article>
							</div>
						</div>
					</div>
				</section>

				<Element name="portfolio" />
				<section className="sec_padding sec_grey">
					<div className="wrapper">
						<div className="sec_title_space">
							<div className="sec_title_box">
								<h2>Latest Work</h2>

								<div className="sec_title_underline" />
							</div>
						</div>

						<div className="portfolio_space">
							<div className="portfolio_box">
								<Card className="portfolio_card">
									<div className="portfolio_card_box">
										<Card.Img
											className="portfolio_card_img"
											variant="top"
											src="https://images.pexels.com/photos/2205564/pexels-photo-2205564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
										/>
									</div>

									<Card.Body>
										<Card.Title>Beverty General</Card.Title>
										<Card.Text>Hardware Store</Card.Text>
									</Card.Body>
								</Card>
								<Card className="portfolio_card">
									<div className="portfolio_card_box">
										<Card.Img
											className="portfolio_card_img"
											variant="top"
											src="https://images.pexels.com/photos/2205564/pexels-photo-2205564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
										/>
									</div>

									<Card.Body>
										<Card.Title>Beverty General</Card.Title>
										<Card.Text>Hardware Store</Card.Text>
									</Card.Body>
								</Card>
								<Card className="portfolio_card">
									<div className="portfolio_card_box">
										<Card.Img
											className="portfolio_card_img"
											variant="top"
											src="https://images.pexels.com/photos/2205564/pexels-photo-2205564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
										/>
									</div>

									<Card.Body>
										<Card.Title>Beverty General</Card.Title>
										<Card.Text>Hardware Store</Card.Text>
									</Card.Body>
								</Card>
							</div>
						</div>
					</div>
				</section>

				{/*Testimonial Section*/}
				<section className="sec_padding">
					<div className="wrapper">
						<div className="sec_title_space">
							<div className="sec_title_box">
								<h2>Testimonials</h2>
								<div className="sec_title_underline" />
							</div>
						</div>

						<div className="testimonial_space">
							<div className="testimonial_box">
								<Carousel>
									<Carousel.Item>
										<div className="testimonial">
											<div className="testimonial_img_box">
												<img alt="testimonial_quote_icon" />
											</div>
											<p className="testimonial_name">
												Ginger Spice
											</p>
											<p className="testimonial_body">
												coolest nigaga on the parke
												djfsadkldf loerjalfd fads fdwath
												jtej hell yo
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className="testimonial">
											<div className="testimonial_img_box">
												<img alt="testimonial_quote_icon" />
											</div>
											<p className="testimonial_name">
												Ginger Spice
											</p>
											<p className="testimonial_body">
												coolest nigaga on the parke
												djfsadkldf loerjalfd fads fdwath
												jtej hell yo
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className="testimonial">
											<div className="testimonial_img_box">
												<img alt="testimonial_quote_icon" />
											</div>
											<p className="testimonial_name">
												Ginger Spice
											</p>
											<p className="testimonial_body">
												coolest nigaga on the parke
												djfsadkldf loerjalfd fads fdwath
												jtej hell yo
											</p>
										</div>
									</Carousel.Item>
								</Carousel>
							</div>
						</div>
					</div>
				</section>

				<Element name="about" />
				<section className="sec_padding sec_grey">
					<div className="wrapper">
						<div className="sec_title_space">
							<div className="sec_title_box">
								<h2>About Me</h2>

								<div className="sec_title_underline" />
							</div>
						</div>

						<div className="my_space">
							<div className="my_box">
								<div className="my_img_box">
									<img alt="my_photo" />
								</div>
								<p className="my_name">Joshua Wiggins</p>
								<p className="my_title">
									Full Stack Web Developer
								</p>

								<div className="social_link_space">
									<div className="social_link_box">
										<a href="#">
											<div class="social_link_icon">
												LinkedIn
											</div>
										</a>
										<a href="#">
											<div class="social_link_icon">
												LinkedIn
											</div>
										</a>
									</div>
								</div>

								<p className="my_body">
									Front-end Developer, author of CSS3
									Foundations, and graduate of Internet
									Technology. Ian combines his education with
									10 years commercial experience in front-end
									development to produce high-quality websites
									and exceptional user experience. Lorem sump
									son goku dsnan Iche Ne sa. Watashi wo
									nakudsu gran salma come on a nd jamd
								</p>

								<p className="my_title">Tools</p>
								<div className="tool_box_list">
									<div className="tool_img_box">
										<img alt="tool_item" />
									</div>
									<div className="tool_img_box">
										<img alt="tool_item" />
									</div>
									<div className="tool_img_box">
										<img alt="tool_item" />
									</div>
									<div className="tool_img_box">
										<img alt="tool_item" />
									</div>
									<div className="tool_img_box">
										<img alt="tool_item" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Element name="contact" />
				<section className="sec_padding sec_pop">
					<div className="wrapper">
						<div className="sec_title_space">
							<div className="sec_title_box">
								<h2>Get In Touch</h2>
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
											placeholder="Please Enter Your Full Name."
										/>
										<Field
											className="form_input"
											name="email"
											type="email"
											placeholder="E.g. johndoe@hotmail.com"
										/>
										<Field
											className="form_input"
											name="subject"
											type="text"
											placeholder="E.g. Request For Hire"
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
