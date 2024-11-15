// app/pages/contact/page.js

import ContactFormGroup from "@/app/components/form-groups";
export default function Contact() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="main col-sm-12">
                        <h1 className="section-title">Contact Us</h1>

                        <div className="contact-form">
                            <form action="#" method="post">

                                <ContactFormGroup />

                                <div className="form-group">
                                    <label htmlFor="message">Message:</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}