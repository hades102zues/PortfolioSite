import React from "react";
import styles from "./Contact.module.css";
import { Element } from "react-scroll";
import { Formik, Form, Field } from "formik";

const contact = () => {
	return (
		<React.Fragment>
			<Element name="contact" />
			<section
				className={`${styles.sec_pop} 
				       ${styles.sec_padding} 
				       ${styles.sec_grey}`}
			>
				<div className={styles.wrapper}>
					<div className={styles.sec_title_space}>
						<div className={styles.sec_title_box}>
							<h2 style={{ color: "white" }}>Get In Touch</h2>
						</div>
					</div>

					<div className={styles.form_space}>
						<div className={styles.form_box}>
							<Formik>
								<Form className={styles.form}>
									<Field
										className={styles.form_input}
										name="name"
										type="text"
										placeholder="Enter Your Full Name"
									/>
									<Field
										className={styles.form_input}
										name="email"
										type="email"
										placeholder="Enter Your Email Address"
									/>
									<Field
										className={styles.form_input}
										name="subject"
										type="text"
										placeholder="Subject"
									/>
									<Field
										className={styles.form_textarea}
										name="message"
										component="textarea"
										placeholder="Enter Your Message Here!"
									/>
									<div className={styles.form_button_space}>
										<div className={styles.form_button_box}>
											<button type="submit">Send</button>
										</div>
									</div>
								</Form>
							</Formik>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default contact;
