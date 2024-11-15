// app/components/ContactFormGroup.js

// Import required modules and data
import React from "react";
import contactInputs from "@/app/data/contact-inputs";

/**
 * ContactFormGroup Component
 *
 * Dynamically renders a group of form fields based on input data.
 * Each field includes a label and an input element with required validation.
 *
 * @returns {JSX.Element} The contact form group structure
 */
export default function ContactFormGroup() {
    return (
        <div>
            {contactInputs.map((item) => (
                <div key={item.id} className="form-group">
                    {/* Label for the input field */}
                    <label htmlFor={item.name}>{item.name}:</label>

                    {/* Input field dynamically configured based on the item */}
                    <input
                        type={item.type}
                        className="form-control"
                        id={item.id}
                        name={item.name}
                        required
                    />
                </div>
            ))}
        </div>
    );
}
