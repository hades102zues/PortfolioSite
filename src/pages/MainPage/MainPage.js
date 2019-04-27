import React from "react";
import "./MainPage.css";

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
			<div className="showcase">
				<div className="selling_point_space">
					<div className="selling_point_box">
						<h1>Need A Web Presence</h1>
						<p>Offlaa</p>
					</div>
				</div>
				<div className="find_out_space">
					<div className="find_out_box">P</div>
				</div>
			</div>
		</div>
	);
};

export default mainPage;
