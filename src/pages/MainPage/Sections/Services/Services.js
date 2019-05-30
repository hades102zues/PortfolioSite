import React from "react";
import styles from "./Services.module.css";
import { Element } from "react-scroll";

const services = () => {
    const servicesData = [
        {
            imgUrl:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADKgAAAyoBEJdYGAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHRSURBVGiB7ZYxSxxBGIafb+4S5CxEonhptBQLU6j5ESJiLUgUBIMWdoIIGgi26UyRQEBEsJeAf+KURIjCWcUmES+Cghqi7mdhcmzMjc7lXMeFeaplvvlm3ndfdmYhEAgEfCK2Qnf32CPT8vO1KoNA2z1qivNVhJVor25uff39WaUJWVvnb/HTyWlzok2VaZpPFZipNMHYOlUZTkxWlYjIiK1mTQB4+ufhuZzwUkqoCO+iJxQ0B0DU/piLvhwgZD4eY4q/ys0L81N0dbb/t+jC5jaTs2/+0XIdawJxJqREi5yT54xxUyqPX/TXo40ZtNFw3p/7q6cW8QA9zzqc5jkZMLFP3WisEBsXsZ4HieJkYCFq4odmOSDLW20qj2dWj+EoQo6iq+cYn7d2ahL26UvRaZ71tfX0vlBbzQeFtaWKWp0SeMik3oD9GB2YvUcZDqwtVRxOfQKpN3DTTVxmqKu15o2WN3arXi/eYyP1CQQDvgkGfBMM+CYY8E3qDTj9Srhc6b5IfQKpN+Dlb/QuSX0CwYBvggHf3HQKfQfycPcnSPXryTdbxZqAKItV7pIYii7aatYEInM4Z6IGFEYRmhNRdhvKvsAHNYevvOwfCAQCt3IJSIxvw5vafesAAAAASUVORK5CYII=",
            serviceTitle: "WEB DEVELOPMENT",
            serviceDesc: `Invest in a high-quality website that
									will engage your clients, sells your
									services and give credibility to your
									business.`
        },
        {
            imgUrl:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJeSURBVGiB7ZlNaBNBFMd/k82hPVhJGgsttoJ4FBQs9OjJSg4ifoEfkLN4UTxUQk8FoeghSHuQHr1IK62CRfQQLz2KgR4qUq0t1lJLbBoTCU1hk/FQk9Zsstu0mayx8zu9eTPz5v2Z3Z2PBY1mfyPKOa/cvteFNCISTgOBOue0imDKyHv6xobvf3FqbBFw9W5/p2nKacCvJL2ds5aX5onnww+X7Bp5Sh1mTj7C/eQB/B7hjTg18lo8kjMF89L1mwTa2muclz2r8WUmno5sFgS9Tu0tMwAcKBj1Tn5zzI6tguSgU/tyAhoKLcBtrC+xAn4mE7waH2Ph8ycymV9V9e0Ohn4gmJJS9MVeP7GsC8pnIJVcY2hwgJnpWNXJ/yGA5KJAvusJ3jhcWqlcwOT4KOuZTC1C+fNl1gXlj9Dcxw9Fu//WNTrbD1XV/+tynMHHowBIKS3rgvIZ2NjIFu1qkwc40tG2vWhZFxr+K6QFuI0W4DZagNtoAW6jBbhNOQHpghFfsb3R+Cco7kZ7zp5PAS3fZrd2j0MDd/Y+gsfxXL638AVDSN4qHUkRRQGmR4aBpIu57IqigPdvXs6aufxJYALY1dnPDf46kcWik4vA5VoO0B0MyVrGK+W//Iw2FFqA29RVwMLSStV95he/29bX5WqxwIORZzWPWQ8BaaClUqXpayZx4TgAgRczGMl1u1ipUofyR0hiv0XJHmsl52sm52sme7TVKVq01KNcgJD5sLDZojTNJTDSWbypLE3zicpxIGkYRriMXz2nzoW6hCkjIHrZ9gtrh6QRRCtdr2s0+53fo/ukGkbaEQgAAAAASUVORK5CYII=",
            serviceTitle: "RESPONSIVE DESIGN",
            serviceDesc: `User experience matters. A well crafted website looks great across all devices: mobile, tablet and
										desktop.`
        }
    ];

    const servicesCards = servicesData.map((config, index) => (
        <article key={index} className={styles.service_card}>
            <div className={styles.service_img_space}>
                <div className={styles.service_img_box}>
                    <img alt="webpage_icon" src={config.imgUrl} />
                </div>
            </div>
            <div className={styles.service_body}>
                <p className={styles.service_title}>{config.serviceTitle}</p>
                <p className={styles.service_description}>{config.serviceDesc}</p>
            </div>
        </article>
    ));

    return (
        <React.Fragment>
            <Element name="services" />
            <section className={styles.sec_padding}>
                <div className={styles.wrapper}>
                    <div className={styles.sec_title_space}>
                        <div className={styles.sec_title_box}>
                            <h2>Services</h2>
                            <div className={styles.sec_title_underline} />
                        </div>
                    </div>

                    <div className={styles.services_space}>
                        <div className={styles.services_box}>{servicesCards}</div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default services;
