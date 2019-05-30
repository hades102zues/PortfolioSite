import React from "react";
import styles from "./Portfolio.module.css";
import { Card } from "react-bootstrap";
import { Element } from "react-scroll";

const portfolio = () => {
    const portfolioCardData = [
        {
            imgUrl: "ooofnut",
            hrefUrl: "facebook.com",
            websiteName: "Beverty General",
            businessType: "Hardware Store"
        },
        {
            imgUrl: "ooofnut",
            hrefUrl: "facebook.com",
            websiteName: "Beverty General",
            businessType: "Hardware Store"
        },
        {
            imgUrl: "ooofnut",
            hrefUrl: "facebook.com",
            websiteName: "Beverty General",
            businessType: "Hardware Store"
        }
    ];

    const portfolioCards = portfolioCardData.map((config, index) => (
        <a key={index} className={styles.portfolio_card} href={config.hrefUrl} rel="noopener noreferrer" target="_blank">
            <Card
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none"
                }}
            >
                <div className={styles.portfolio_card_box}>
                    <Card.Img className={styles.portfolio_card_img} variant="top" src={config.imgUrl} />
                </div>

                <Card.Body>
                    <Card.Title className={styles.portfolio_card_title}>{config.websiteName}</Card.Title>
                    <Card.Text className={styles.portfolio_card_text}>{config.businessType}</Card.Text>
                </Card.Body>
            </Card>
        </a>
    ));
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
                        <div className={styles.portfolio_box}>{portfolioCards}</div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default portfolio;
