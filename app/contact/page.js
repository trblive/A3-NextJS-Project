// app/pages/contact/page.js

// Import the ContactFormGroup component for form fields
import ContactFormGroup from "@/app/components/form-groups";

/**
 * Contact Component
 *
 * Renders the contact page layout, including a contact form.
 * This form allows users to send messages to the site administrators.
 *
 * @returns {JSX.Element} The contact page structure
 */
export default function Contact() {
    return (
        <main>
            {/* Main container for the page content */}
            <div className="container">
                <div className="row">
                    {/* Main column displaying the contact form */}
                    <div className="main col-sm-12">
                        <h1 className="section-title">Contact Us</h1>

                        <div className="contact-form">
                            {/* Contact form */}
                            <form action="#" method="post">

                                {/* Form group fields imported from a reusable component */}
                                <ContactFormGroup />

                                {/* Textarea for message input */}
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

                                {/* Submit button */}
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
