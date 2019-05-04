import React from "react";
import styles from "./Footer.module.css";

const footer = () => {
	return (
		<footer className={styles.sec_padding}>
			<div className={styles.wrapper}>
				<h3 className={styles.footer_text}>
					&copy; 2019 Joshua Wiggins. All Rights Reserved.
				</h3>
			</div>
		</footer>
	);
};

export default footer;
