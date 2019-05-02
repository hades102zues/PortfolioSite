import React, { Component } from "react";
import "./MainPage.css";
import { Card, Carousel, Navbar, Nav } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { Link, Element } from "react-scroll";
import { Parallax } from "react-parallax";

import showcase_img from "./assests/paralax1.jpeg";
import xd_img from "./assests/1200px-Adobe_XD_CC_icon.svg.png";

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
										<a
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
									Front-end Developer, author of CSS3
									Foundations, and graduate of Internet
									Technology. Ian combines his education with
									10 years commercial experience in front-end
									development to produce high-quality websites
									and exceptional user experience. Lorem sump
									son goku dsnan Iche Ne sa. Watashi wo
									nakudsu gran salma come on a nd jamd
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
