import React from "react";
import "./MainPage.css";

const mainPage = () => {
	return (
		<div class="mainPage">
			<header>
				<div class="container">
					<div class="header_orderer">
						<div class="logo_space">
							<div class="logo_box">P</div>
						</div>
						<div class="nav_space">
							<nav class="nav_box">
								<ul>
									<li>Logo</li>
									<li>Services</li>
									<li>Contact</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
			<div class="showcase" />
		</div>
	);
};

export default mainPage;
