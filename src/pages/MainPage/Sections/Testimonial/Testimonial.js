import React from "react";
import styles from "./Testimonial.module.css";
import { Carousel } from "react-bootstrap";

const testimonial = () => {
	return (
		<section className={styles.sec_padding}>
			<div className={styles.wrapper}>
				<div className={styles.sec_title_space}>
					<div className={styles.sec_title_box}>
						<h2>Testimonials</h2>
						<div className={styles.sec_title_underline} />
					</div>
				</div>

				<div className={styles.testimonial_space}>
					<div className={styles.testimonial_box}>
						<Carousel>
							<Carousel.Item>
								<div className={styles.testimonial}>
									<div className={styles.testimonial_img_box}>
										<img
											alt="testimonial_quote_icon"
											src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFbSURBVGiB7Zc9LwRRFIafszM20aHZQqdU20rhR2iUYiMKtUIjW9GITkUolBIJUfIfNBLZVlZ8RHZFFGRnj0J0d2d2rnFH4jzlvGeeO29xZ+6AYRiGYRiGN5IWLtNbAjaB2pC+B4X1feLDED6ASoZgO8diADX5uieUL7PAeI7FvpkI6Mss8OexAmVjBcrGCpSNFSibrAJPHs6XgD7itLAPjQqyJeioK1eYclyuhvJBxmk0jUV0bISk44i6e8S5zzy+Pu89UCWZdSd6F9LnWUBFYc2ZIFchfal7wEUTrbTp7YDMDRg5C+kbusAKOq0k9TbJKkjdNaNw/050HtI3dIE+yXXWjMDGEfIW0lfkh+xikmjgv+tv+QoqoK0q0UIT6YX2FVHgNCGe2UWeC3Dl9nkXELgFGl2i+QPk1dfzU1+O16i2QB4VbgROOkSXx8iHx7P+ks8wDMMwDOP/8Qk5GYXDsbv1GAAAAABJRU5ErkJggg=="
										/>
									</div>
									<p className={styles.testimonial_name}>
										Ginger Spice
									</p>
									<p className={styles.testimonial_body}>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore. Lorem
										ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore
									</p>
								</div>
							</Carousel.Item>
							<Carousel.Item>
								<div className={styles.testimonial}>
									<div className={styles.testimonial_img_box}>
										<img
											alt="testimonial_quote_icon"
											src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFbSURBVGiB7Zc9LwRRFIafszM20aHZQqdU20rhR2iUYiMKtUIjW9GITkUolBIJUfIfNBLZVlZ8RHZFFGRnj0J0d2d2rnFH4jzlvGeeO29xZ+6AYRiGYRiGN5IWLtNbAjaB2pC+B4X1feLDED6ASoZgO8diADX5uieUL7PAeI7FvpkI6Mss8OexAmVjBcrGCpSNFSibrAJPHs6XgD7itLAPjQqyJeioK1eYclyuhvJBxmk0jUV0bISk44i6e8S5zzy+Pu89UCWZdSd6F9LnWUBFYc2ZIFchfal7wEUTrbTp7YDMDRg5C+kbusAKOq0k9TbJKkjdNaNw/050HtI3dIE+yXXWjMDGEfIW0lfkh+xikmjgv+tv+QoqoK0q0UIT6YX2FVHgNCGe2UWeC3Dl9nkXELgFGl2i+QPk1dfzU1+O16i2QB4VbgROOkSXx8iHx7P+ks8wDMMwDOP/8Qk5GYXDsbv1GAAAAABJRU5ErkJggg=="
										/>
									</div>
									<p className={styles.testimonial_name}>
										Ginger Spice
									</p>
									<p className={styles.testimonial_body}>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore. Lorem
										ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore
									</p>
								</div>
							</Carousel.Item>
							<Carousel.Item>
								<div className={styles.testimonial}>
									<div className={styles.testimonial_img_box}>
										<img
											alt="testimonial_quote_icon"
											src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFbSURBVGiB7Zc9LwRRFIafszM20aHZQqdU20rhR2iUYiMKtUIjW9GITkUolBIJUfIfNBLZVlZ8RHZFFGRnj0J0d2d2rnFH4jzlvGeeO29xZ+6AYRiGYRiGN5IWLtNbAjaB2pC+B4X1feLDED6ASoZgO8diADX5uieUL7PAeI7FvpkI6Mss8OexAmVjBcrGCpSNFSibrAJPHs6XgD7itLAPjQqyJeioK1eYclyuhvJBxmk0jUV0bISk44i6e8S5zzy+Pu89UCWZdSd6F9LnWUBFYc2ZIFchfal7wEUTrbTp7YDMDRg5C+kbusAKOq0k9TbJKkjdNaNw/050HtI3dIE+yXXWjMDGEfIW0lfkh+xikmjgv+tv+QoqoK0q0UIT6YX2FVHgNCGe2UWeC3Dl9nkXELgFGl2i+QPk1dfzU1+O16i2QB4VbgROOkSXx8iHx7P+ks8wDMMwDOP/8Qk5GYXDsbv1GAAAAABJRU5ErkJggg=="
										/>
									</div>
									<p className={styles.testimonial_name}>
										Ginger Spice
									</p>
									<p className={styles.testimonial_body}>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore. Lorem
										ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore
									</p>
								</div>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
			</div>
		</section>
	);
};

export default testimonial;
