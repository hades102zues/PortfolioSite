import React, { Component } from "react";
import "./MainPage.css";
import { Card, Carousel, Navbar, Nav } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { Link, Element } from "react-scroll";
import { Parallax } from "react-parallax";

import showcase_img from "./assests/paralax1.jpeg";
import xd_img from "./assests/1200px-Adobe_XD_CC_icon.svg.png";

import Header from "./Sections/Header/Header.js";
import Showcase from "./Sections/Showcase/Showcase";
import Services from "./Sections/Services/Services";

class MainPage extends Component {
	render() {
		return (
			<div className="mainPage">
				<Header />
				<Showcase />
				<Services />

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
									Full-Stack Web Developer
								</p>

								<div className="social_link_space">
									<div className="social_link_box">
										<a
											target="_blank"
											href="https://www.linkedin.com/in/joshua-wiggins-108b92b0/"
											rel="noopener"
										>
											<div class="social_link_icon">
												<img
													class="social_link_icon_img"
													alt="social_link"
													src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKISURBVGhD7Zk9axRRGIV3MljYaidYa+s/sLDx29I/4Y8QxZnFwohYaGGlCHa2QVT8qBScWTYSwQSigkrQwLoxidFc5yxHcic5Yd67rDsJzAMP2eV9OXOYvRvCpNXQ0NCws4nbnXNRmj+ZSPL+RJq7sVhcC9eM2/kZ1hiOKM1SeYExGiXZZdYJI07ysyqwDuMkO81adgbHRoTVYZTkj1nLzljPfJVJ1mMtOzKoRlnLjgqBh2/PuGcf+67/6497XvzEe7U3alnLjgqBKO/z9ENf7o1a1rKjQuBSced98EmovVHLWnZUCNzyCcz/kHujlrXsqBCIM4+zjzuP43Po1i77DtQla9lRIXXKWnZUCFRY5gdvvnXXXy246YVlt7y27hZXfrsXxVG8MPXJ7b3aKWUoWcuOCoGKqvmRO+/c16U1vtvK688/3YEb06WczbKWHRUCFVXz2cVVvtoe/DaLvZzNspYdFQIVVXMrxx/MlbJ8WcuOCoGKqvl64WRx/o/dn3XnH84P7rbibvd7KcuXteyoEKioml96+aW0s6fdcVNzPU43mPm2UtrzZS07KgQqqub7J7ulHXj03ntON+itbv9nCWvZUSFQETL/575rXU7LqF3IWnZUCFSEzH0Vag+ylh0VAhUhc1+F2oOsZUeFQEXI3Feh9iBr2VEhUBEy91WoPchadlQIVITMfRVqD7KWHRUCFSFzX4Xag6xlR4VARcjcV6H2IGvZUSFQETL3Vag9yFp2VAhUhMx9FWoPspYdFVKnrGVn1z9axANVGVaDQz3cxSNtFVaHcfLmJGuFgX8uqMBxGqX5RdYZjridnRocp+Icqgv8F4trFTfvUXylc4I1GhoaGnYkrdZftCOe5rpU+ZQAAAAASUVORK5CYII="
												/>
											</div>
										</a>
									</div>
								</div>

								<p className="my_body">
									Joshua Wiggins is a meticulous individual
									with a keen eye for detail. Possessing a
									degree in Computer Science, Joshua has set
									out to use his expertise to help businesses
									solve their problems. <br />
									<br />
									His goal is to provide businesses with
									solutions that will build memorable
									relationships between them and their clients
									through interactive and clean web spaces.
								</p>

								<p className="my_tool">Tools</p>
								<div className="tool_box_list">
									<div className="tool_img_box">
										<img
											className="tool_img"
											alt="tool_item"
											src="data:image/png;base64,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"
										/>
									</div>
									<div className="tool_img_box">
										<img
											className="tool_img"
											alt="tool_item"
											src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKfSURBVGhD7ZbPaxNBFMe3UDxL6d/QQw+NTbI/bKLb1GZ2kzSzEawXQfCs955sEErR1krxUA9i1VqlamtPeimCnsQ/QCwoeBPEey+1Gd+bzm4nm0ncKFIC84HHZN775s17yezMGhqNRqPRaDSa48UmwSfHq12Ej32Hnh7D9gIm7K1w9RZSA0y4egvdwHGjGwhJucFJONIWwH7iiHMRUuI+dQeLa6V3/kalkZ133mduZwZFqC2qNTo1kKim4enpExapXuMiKRnO0Y9xIeW4dbe/+MRfLW9WD6a2awyt8KDIRmbTB5k5c9WoG/1CGtFpDXku5Mlrsj1KLS/40iSK2WGcUtRPPvJn/OdTe2Hhkb2qMfPWaTZyPc1S9cze6Jw9wxcAkqwRWlJ9VJNF6K+mIAk+gO8yjrIfdZi89KLaaCleGHlWxn9BNJFtoB5JugZaN3pek+xwCL0E3w+v8z6cy3F0nr03oSw+tNxdlzdgwb/BswByjiRryPM/6psmCuJx506ekfWysni0ymbAMvMOQx1PAMRzxInH43NraazgLOW+4SjHLY++6To5FoZ7vbIVKBtAgwf8vzYAW+er6dPz+Lnr5NbCGN/n+ZVxZfGhnVkpRPnkHP+4hVqRxcLVRDx+qp4NTxoG57+yeDR/oxrlUz2UNqFXlA+lQg9b5SOM4zxZnCMh3RauJtAfanAO5/xyaja9j03Yizll8eWXdL+4RpZ5AqCrY7GDHhp7bfl0mCcNAeHnaD+1AeOoE1PDqTsDozfMHdhKjYmHXlR4ZYs24GbeIffJgJBG8IvJo1fhV2+9mMAfvyzb6cH3wyEXWvL/FeZ8fsi86eziyTO5Xto997g0JEJtOXo1oN9xVL4aSCR6ldBoNBqNRqPRaDSa3sMwfgN4ZcdyRwSisQAAAABJRU5ErkJggg=="
										/>
									</div>
									<div className="tool_img_box">
										<img
											className="tool_img"
											alt="tool_item"
											src="data:image/png;base64,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"
										/>
									</div>
									<div className="tool_img_box">
										<img
											className="tool_img"
											alt="tool_item"
											src="data:image/png;base64,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"
										/>
									</div>
									<div className="tool_img_box">
										<img
											alt="tool_item"
											className="tool_img"
											src={xd_img}
										/>
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
