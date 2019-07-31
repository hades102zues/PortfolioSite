import React from "react";
import styles from "./Contact.module.css";
import { Element } from "react-scroll";
import { Formik, Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const contact = props => {
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
                            <Form className={styles.form}>
                                <Field
                                    className={styles.form_input}
                                    name="name"
                                    type="text"
                                    placeholder="Enter Your Full Name"
                                    style={{
                                        backgroundColor: props.touched["name"] && props.errors["name"] ? "#ff5252" : null
                                    }}
                                />
                                <Field
                                    className={styles.form_input}
                                    name="email"
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                    style={{
                                        backgroundColor: props.touched["email"] && props.errors["email"] ? "#ff5252" : null
                                    }}
                                />
                                <Field
                                    className={styles.form_input}
                                    name="subject"
                                    type="text"
                                    placeholder="Subject"
                                    style={{
                                        backgroundColor: props.touched["subject"] && props.errors["subject"] ? "#ff5252" : null
                                    }}
                                />
                                <Field
                                    className={styles.form_textarea}
                                    name="message"
                                    component="textarea"
                                    placeholder="Enter Your Message Here!"
                                    style={{
                                        backgroundColor: props.touched["message"] && props.errors["message"] ? "#ff5252" : null
                                    }}
                                />
                                <div className={styles.form_button_space}>
                                    <div className={styles.form_button_box}>
                                        <button type="submit">Send</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

const formSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, "Please Supply Your Full Name")
        .required("Please Enter Your Full Name"),

    email: Yup.string()
        .email("Please Enter A Valid Email Address")
        .required("Please Enter A Valid Email Address"),

    subject: Yup.string()
        .min(1, "Please Enter A Subject")
        .required("Please Enter A Subject"),

    message: Yup.string()
        .min(1, "Please Supply A Message")
        .required("Please Supply A Message")
});

const formikForm = withFormik({
    mapPropsToValues: () => ({
        name: "",
        email: "",
        subject: "",
        message: ""
    }),
    handleSubmit: (formValues, formikBag) => {
        console.log(formValues);
    },
    validationSchema: formSchema
})(contact);
export default formikForm;
