import React from "react";
import "./MainPage.css";
import { Card } from "react-bootstrap";

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
							<div class="hamburger_box">
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

			<section className="showcase">
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

			<section className="sec_padding">
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
		</div>
	);
};

export default mainPage;
