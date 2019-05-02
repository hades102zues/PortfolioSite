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
											<img
												alt="webpage_icon"
												src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADKgAAAyoBEJdYGAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHRSURBVGiB7ZYxSxxBGIafb+4S5CxEonhptBQLU6j5ESJiLUgUBIMWdoIIGgi26UyRQEBEsJeAf+KURIjCWcUmES+Cghqi7mdhcmzMjc7lXMeFeaplvvlm3ndfdmYhEAgEfCK2Qnf32CPT8vO1KoNA2z1qivNVhJVor25uff39WaUJWVvnb/HTyWlzok2VaZpPFZipNMHYOlUZTkxWlYjIiK1mTQB4+ufhuZzwUkqoCO+iJxQ0B0DU/piLvhwgZD4eY4q/ys0L81N0dbb/t+jC5jaTs2/+0XIdawJxJqREi5yT54xxUyqPX/TXo40ZtNFw3p/7q6cW8QA9zzqc5jkZMLFP3WisEBsXsZ4HieJkYCFq4odmOSDLW20qj2dWj+EoQo6iq+cYn7d2ahL26UvRaZ71tfX0vlBbzQeFtaWKWp0SeMik3oD9GB2YvUcZDqwtVRxOfQKpN3DTTVxmqKu15o2WN3arXi/eYyP1CQQDvgkGfBMM+CYY8E3qDTj9Srhc6b5IfQKpN+Dlb/QuSX0CwYBvggHf3HQKfQfycPcnSPXryTdbxZqAKItV7pIYii7aatYEInM4Z6IGFEYRmhNRdhvKvsAHNYevvOwfCAQCt3IJSIxvw5vafesAAAAASUVORK5CYII="
											/>
										</div>
									</div>
									<div className="service_body">
										<p className="service_title">
											WEB DEVELOPMENT
										</p>
										<p className="service_description">
											Invest in a high-quality website
											that will engage your clients, sells
											your services and give credibility
											to your business.
										</p>
									</div>
								</article>
								<article className="service_card">
									<div className="service_img_space">
										<div className="service_img_box">
											<img
												alt="pc_and_mobile_icon"
												src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJeSURBVGiB7ZlNaBNBFMd/k82hPVhJGgsttoJ4FBQs9OjJSg4ifoEfkLN4UTxUQk8FoeghSHuQHr1IK62CRfQQLz2KgR4qUq0t1lJLbBoTCU1hk/FQk9Zsstu0mayx8zu9eTPz5v2Z3Z2PBY1mfyPKOa/cvteFNCISTgOBOue0imDKyHv6xobvf3FqbBFw9W5/p2nKacCvJL2ds5aX5onnww+X7Bp5Sh1mTj7C/eQB/B7hjTg18lo8kjMF89L1mwTa2muclz2r8WUmno5sFgS9Tu0tMwAcKBj1Tn5zzI6tguSgU/tyAhoKLcBtrC+xAn4mE7waH2Ph8ycymV9V9e0Ohn4gmJJS9MVeP7GsC8pnIJVcY2hwgJnpWNXJ/yGA5KJAvusJ3jhcWqlcwOT4KOuZTC1C+fNl1gXlj9Dcxw9Fu//WNTrbD1XV/+tynMHHowBIKS3rgvIZ2NjIFu1qkwc40tG2vWhZFxr+K6QFuI0W4DZagNtoAW6jBbhNOQHpghFfsb3R+Cco7kZ7zp5PAS3fZrd2j0MDd/Y+gsfxXL638AVDSN4qHUkRRQGmR4aBpIu57IqigPdvXs6aufxJYALY1dnPDf46kcWik4vA5VoO0B0MyVrGK+W//Iw2FFqA29RVwMLSStV95he/29bX5WqxwIORZzWPWQ8BaaClUqXpayZx4TgAgRczGMl1u1ipUofyR0hiv0XJHmsl52sm52sme7TVKVq01KNcgJD5sLDZojTNJTDSWbypLE3zicpxIGkYRriMXz2nzoW6hCkjIHrZ9gtrh6QRRCtdr2s0+53fo/ukGkbaEQgAAAAASUVORK5CYII="
											/>
										</div>
									</div>
									<div className="service_body">
										<p className="service_title">
											RESPONSIVE DESIGN
										</p>
										<p className="service_description">
											User experience matters. A well
											crafted website looks great across
											all devices: mobile, tablet and
											desktop.
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
								<a
									className="portfolio_card"
									href="https://facebook.com"
									rel="noopener"
									target="_blank"
								>
									<Card
										style={{
											width: "100%",
											height: "100%",
											border: "none"
										}}
									>
										<div className="portfolio_card_box">
											<Card.Img
												className="portfolio_card_img"
												variant="top"
												src="https://images.pexels.com/photos/2205564/pexels-photo-2205564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
											/>
										</div>

										<Card.Body>
											<Card.Title className="portfolio_card_title">
												Beverty General
											</Card.Title>
											<Card.Text className="portfolio_card_text">
												Hardware Store
											</Card.Text>
										</Card.Body>
									</Card>
								</a>
								<a
									className="portfolio_card"
									href="https://facebook.com"
									rel="noopener"
									target="_blank"
								>
									<Card
										style={{
											width: "100%",
											height: "100%",
											border: "none"
										}}
									>
										<div className="portfolio_card_box">
											<Card.Img
												className="portfolio_card_img"
												variant="top"
												src="https://images.pexels.com/photos/2205564/pexels-photo-2205564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
											/>
										</div>

										<Card.Body>
											<Card.Title className="portfolio_card_title">
												Beverty General
											</Card.Title>
											<Card.Text className="portfolio_card_text">
												Hardware Store
											</Card.Text>
										</Card.Body>
									</Card>
								</a>
								<a
									className="portfolio_card"
									href="https://facebook.com"
									rel="noopener"
									target="_blank"
								>
									<Card
										style={{
											width: "100%",
											height: "100%",
											border: "none"
										}}
									>
										<div className="portfolio_card_box">
											<Card.Img
												className="portfolio_card_img"
												variant="top"
												src="https://images.pexels.com/photos/2205564/pexels-photo-2205564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
											/>
										</div>

										<Card.Body>
											<Card.Title className="portfolio_card_title">
												Beverty General
											</Card.Title>
											<Card.Text className="portfolio_card_text">
												Hardware Store
											</Card.Text>
										</Card.Body>
									</Card>
								</a>
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
												<img
													alt="testimonial_quote_icon"
													src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFbSURBVGiB7Zc9LwRRFIafszM20aHZQqdU20rhR2iUYiMKtUIjW9GITkUolBIJUfIfNBLZVlZ8RHZFFGRnj0J0d2d2rnFH4jzlvGeeO29xZ+6AYRiGYRiGN5IWLtNbAjaB2pC+B4X1feLDED6ASoZgO8diADX5uieUL7PAeI7FvpkI6Mss8OexAmVjBcrGCpSNFSibrAJPHs6XgD7itLAPjQqyJeioK1eYclyuhvJBxmk0jUV0bISk44i6e8S5zzy+Pu89UCWZdSd6F9LnWUBFYc2ZIFchfal7wEUTrbTp7YDMDRg5C+kbusAKOq0k9TbJKkjdNaNw/050HtI3dIE+yXXWjMDGEfIW0lfkh+xikmjgv+tv+QoqoK0q0UIT6YX2FVHgNCGe2UWeC3Dl9nkXELgFGl2i+QPk1dfzU1+O16i2QB4VbgROOkSXx8iHx7P+ks8wDMMwDOP/8Qk5GYXDsbv1GAAAAABJRU5ErkJggg=="
												/>
											</div>
											<p className="testimonial_name">
												Ginger Spice
											</p>
											<p className="testimonial_body">
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit, sed
												do eiusmod tempor incididunt ut
												labore et dolore. Lorem ipsum
												dolor sit amet, consectetur
												adipiscing elit, sed do eiusmod
												tempor incididunt ut labore et
												dolore
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className="testimonial">
											<div className="testimonial_img_box">
												<img
													alt="testimonial_quote_icon"
													src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFbSURBVGiB7Zc9LwRRFIafszM20aHZQqdU20rhR2iUYiMKtUIjW9GITkUolBIJUfIfNBLZVlZ8RHZFFGRnj0J0d2d2rnFH4jzlvGeeO29xZ+6AYRiGYRiGN5IWLtNbAjaB2pC+B4X1feLDED6ASoZgO8diADX5uieUL7PAeI7FvpkI6Mss8OexAmVjBcrGCpSNFSibrAJPHs6XgD7itLAPjQqyJeioK1eYclyuhvJBxmk0jUV0bISk44i6e8S5zzy+Pu89UCWZdSd6F9LnWUBFYc2ZIFchfal7wEUTrbTp7YDMDRg5C+kbusAKOq0k9TbJKkjdNaNw/050HtI3dIE+yXXWjMDGEfIW0lfkh+xikmjgv+tv+QoqoK0q0UIT6YX2FVHgNCGe2UWeC3Dl9nkXELgFGl2i+QPk1dfzU1+O16i2QB4VbgROOkSXx8iHx7P+ks8wDMMwDOP/8Qk5GYXDsbv1GAAAAABJRU5ErkJggg=="
												/>
											</div>
											<p className="testimonial_name">
												Ginger Spice
											</p>
											<p className="testimonial_body">
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit, sed
												do eiusmod tempor incididunt ut
												labore et dolore. Lorem ipsum
												dolor sit amet, consectetur
												adipiscing elit, sed do eiusmod
												tempor incididunt ut labore et
												dolore
											</p>
										</div>
									</Carousel.Item>
									<Carousel.Item>
										<div className="testimonial">
											<div className="testimonial_img_box">
												<img
													alt="testimonial_quote_icon"
													src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFbSURBVGiB7Zc9LwRRFIafszM20aHZQqdU20rhR2iUYiMKtUIjW9GITkUolBIJUfIfNBLZVlZ8RHZFFGRnj0J0d2d2rnFH4jzlvGeeO29xZ+6AYRiGYRiGN5IWLtNbAjaB2pC+B4X1feLDED6ASoZgO8diADX5uieUL7PAeI7FvpkI6Mss8OexAmVjBcrGCpSNFSibrAJPHs6XgD7itLAPjQqyJeioK1eYclyuhvJBxmk0jUV0bISk44i6e8S5zzy+Pu89UCWZdSd6F9LnWUBFYc2ZIFchfal7wEUTrbTp7YDMDRg5C+kbusAKOq0k9TbJKkjdNaNw/050HtI3dIE+yXXWjMDGEfIW0lfkh+xikmjgv+tv+QoqoK0q0UIT6YX2FVHgNCGe2UWeC3Dl9nkXELgFGl2i+QPk1dfzU1+O16i2QB4VbgROOkSXx8iHx7P+ks8wDMMwDOP/8Qk5GYXDsbv1GAAAAABJRU5ErkJggg=="
												/>
											</div>
											<p className="testimonial_name">
												Ginger Spice
											</p>
											<p className="testimonial_body">
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit, sed
												do eiusmod tempor incididunt ut
												labore et dolore. Lorem ipsum
												dolor sit amet, consectetur
												adipiscing elit, sed do eiusmod
												tempor incididunt ut labore et
												dolore
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
