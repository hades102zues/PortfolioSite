import React from "react";
import styles from "./Showcase.module.css";

import { Parallax } from "react-parallax";
import { Link, Element } from "react-scroll";
import showcase_img from "./assests/paralax1.jpeg";

const showcase = () => {
	return (
		<Element name="showcase">
			<Parallax
				bgImageAlt="showcase_image"
				bgImage={showcase_img}
				strength={700}
			>
				<section className={styles.showcase}>
					<div className={styles.selling_point_space}>
						<div className={styles.selling_point_box}>
							<h1>
								Hi. I am Joshua.
								<br />
								Freelance Web Developer.
							</h1>
							<p>Producing high quality responsive websites.</p>
						</div>
					</div>
					<div className={styles.find_out_space}>
						<div className={styles.find_out_box}>
							<Link to="services" duration={1000} smooth>
								<button>Find out More </button>
							</Link>
						</div>
					</div>
				</section>
			</Parallax>
		</Element>
	);
};

export default showcase;
