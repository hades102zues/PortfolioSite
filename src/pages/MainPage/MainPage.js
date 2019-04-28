import React from "react";
import "./MainPage.css";
import { Card } from "react-bootstrap";
import { Formik, Form, Field } from "formik";

const mainPage = () => {
	return (
		<div className="mainPage">
			<header>
				<div className="container">
					<div className="header_orderer">
						<div className="logo_space">
							<div className="logo_box">P</div>
						</div>
						<div className="nav_space">
							<nav className="nav_box">
								<ul>
									<li>Logo</li>
									<li>Services</li>
									<li>Contact</li>
								</ul>
							</nav>
							<div className="hamburger_box">
								<div className="hamburger">
									<div className="hamburger__slice" />
									<div className="hamburger__slice" />
									<div className="hamburger__slice" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<section className="showcase sec_pop">
				<div className="selling_point_space">
					<div className="selling_point_box">
						<h1>Need A Web Presence</h1>
						<p>Offlaa</p>
					</div>
				</div>
				<div className="find_out_space">
					<div className="find_out_box">P</div>
				</div>
			</section>

			<section className="sec_padding">
				<div className="container">
					<div className="sec_title_space">
						<div className="sec_title_box">
							<h2>Services</h2>
							<p>
								Producing high quality responsive websites and
								exceptional user experience. DIs Lorem is sum
								ispumoke peache son.
							</p>
							<div className="sec_title_underline" />
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
									<p className="service_title">Something</p>
									<p className="service_description">
										blah blah blah
									</p>
								</div>
							</article>
						</div>
					</div>
				</div>
			</section>

			<section className="sec_padding sec_grey">
				<div className="container">
					<div className="sec_title_space">
						<div className="sec_title_box">
							<h2>Latest Work</h2>
							<div className="sec_title_underline" />
						</div>
					</div>

					<div className="portfolio_space">
						<div className="portfolio_box">
							<Card className="portfolio_card" style={{}}>
								<Card.Img variant="top" src="" />
								<Card.Body>
									<Card.Title>Beverty General</Card.Title>
									<Card.Text>Hardware Store</Card.Text>
								</Card.Body>
							</Card>
							<Card className="portfolio_card" style={{}}>
								<Card.Img variant="top" src="" />
								<Card.Body>
									<Card.Title>Beverty General</Card.Title>
									<Card.Text>Hardware Store</Card.Text>
								</Card.Body>
							</Card>
							<Card className="portfolio_card" style={{}}>
								<Card.Img variant="top" src="" />
								<Card.Body>
									<Card.Title>Beverty General</Card.Title>
									<Card.Text>Hardware Store</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</div>
				</div>
			</section>

			<section className="sec_padding">
				<div className="container">
					<div className="sec_title_space">
						<div className="sec_title_box">
							<h2>Testimonials</h2>
							<div className="sec_title_underline" />
						</div>
					</div>

					<div className="testimonial_space">
						<div className="testimonial_box">
							<div className="testimonial">
								<div className="testimonial_img_box">
									<img alt="testimonial_quote_icon" />
								</div>
								<p className="testimonial_name">Ginger Spice</p>
								<p className="testimonial_body">
									coolest nigaga on the parke djfsadkldf
									loerjalfd fads fdwath jtej hell yo
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="sec_padding sec_grey">
				<div className="container">
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
							<p className="my_title">Full Stack Web Developer</p>

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
								Front-end Developer, author of CSS3 Foundations,
								and graduate of Internet Technology. Ian
								combines his education with 10 years commercial
								experience in front-end development to produce
								high-quality websites and exceptional user
								experience. Lorem sump son goku dsnan Iche Ne
								sa. Watashi wo nakudsu gran salma come on a nd
								jamd
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

			<section className="sec_padding sec_pop">
				<div className="container">
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
											<button type="submit">Send</button>
										</div>
									</div>
								</Form>
							</Formik>
						</div>
					</div>
				</div>
			</section>

			<footer className="sec_padding">
				<div className="container">
					<h3>&Copy; 2019 Joshua Wiggins. All Rights Reserved.</h3>
				</div>
			</footer>
		</div>
	);
};

export default mainPage;
