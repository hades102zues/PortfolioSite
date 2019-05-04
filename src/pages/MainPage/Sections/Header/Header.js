import React from "react";
import styles from "./Header.module.css";

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const header = () => {
	return (
		<header>
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
				className={styles.nav_space}
			>
				<div className={`container ${styles.wrapper}`}>
					<Link
						to="showcase"
						activeClass="sec_pop"
						smooth
						duration={1000}
					>
						<Navbar.Brand>
							<span class={styles.brand}>Joshua Wiggins</span>
						</Navbar.Brand>
					</Link>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto" />
						<Nav className={styles.adjust}>
							<Link to="services" duration={1000} smooth>
								<Nav.Link href="#">
									<span className={styles.nav_text}>
										Serivces
									</span>
								</Nav.Link>
							</Link>

							<Link to="portfolio" duration={1000} smooth>
								<Nav.Link href="#">
									<span className={styles.nav_text}>
										Portfolio
									</span>
								</Nav.Link>
							</Link>
							<Link to="about" duration={1000} smooth>
								<Nav.Link href="#">
									<span className={styles.nav_text}>
										About
									</span>
								</Nav.Link>
							</Link>

							<Link to="contact" duration={1000} smooth>
								<Nav.Link href="#">
									<span className={styles.nav_text}>
										Contact
									</span>
								</Nav.Link>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</header>
	);
};

export default header;
