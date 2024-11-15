import React from "react";
import contactInputs from "@/app/data/contact-inputs";

export default function ContactFormGroup() {
    return (
        <div>
            {contactInputs.map((item) => (
                <div key={item.id} className="form-group">
                    <label htmlFor={item.name}>{item.name}:</label>
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
    )
}