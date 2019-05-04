import React from "react";
import styles from "./Portfolio.module.css";
import { Card } from "react-bootstrap";
import { Element } from "react-scroll";

const portfolio = () => {
	return (
		<React.Fragment>
			<Element name="portfolio" />
			<section className={`${styles.sec_padding} ${styles.sec_grey}`}>
				<div className={styles.wrapper}>
					<div className={styles.sec_title_space}>
						<div className={styles.sec_title_box}>
							<h2>Latest Work</h2>

							<div className={styles.sec_title_underline} />
						</div>
					</div>

					<div className={styles.portfolio_space}>
						<div className={styles.portfolio_box}>
							<a
								className={styles.portfolio_card}
								href="https://facebook.com"
								rel="noopener noreferrer"
								target="_blank"
							>
								<Card
									style={{
										width: "100%",
										height: "100%",
										border: "none"
									}}
								>
									<div className={styles.portfolio_card_box}>
										<Card.Img
											className={
												styles.portfolio_card_img
											}
											variant="top"
											src="https://images.pexels.com/photos/2205564/pexels-photo-2205564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
										/>
									</div>

									<Card.Body>
										<Card.Title
											className={
												styles.portfolio_card_title
											}
										>
											Beverty General
										</Card.Title>
										<Card.Text
											className={
												styles.portfolio_card_text
											}
										>
											Hardware Store
										</Card.Text>
									</Card.Body>
								</Card>
							</a>
							<a
								className={styles.portfolio_card}
								href="https://facebook.com"
								rel="noopener noreferrer"
								target="_blank"
							>
								<Card
									style={{
										width: "100%",
										height: "100%",
										border: "none"
									}}
								>
									<div className={styles.portfolio_card_box}>
										<Card.Img
											className={
												styles.portfolio_card_img
											}
											variant="top"
											src="https://images.pexels.com/photos/2205564/pexels-photo-2205564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
										/>
									</div>

									<Card.Body>
										<Card.Title
											className={
												styles.portfolio_card_title
											}
										>
											Beverty General
										</Card.Title>
										<Card.Text
											className={
												styles.portfolio_card_text
											}
										>
											Hardware Store
										</Card.Text>
									</Card.Body>
								</Card>
							</a>
							<a
								className={styles.portfolio_card}
								href="https://facebook.com"
								rel="noopener noreferrer"
								target="_blank"
							>
								<Card
									style={{
										width: "100%",
										height: "100%",
										border: "none"
									}}
								>
									<div className={styles.portfolio_card_box}>
										<Card.Img
											className={
												styles.portfolio_card_img
											}
											variant="top"
											src="https://images.pexels.com/photos/2205564/pexels-photo-2205564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
										/>
									</div>

									<Card.Body>
										<Card.Title
											className={
												styles.portfolio_card_title
											}
										>
											Beverty General
										</Card.Title>
										<Card.Text
											className={
												styles.portfolio_card_text
											}
										>
											Hardware Store
										</Card.Text>
									</Card.Body>
								</Card>
							</a>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default portfolio;
