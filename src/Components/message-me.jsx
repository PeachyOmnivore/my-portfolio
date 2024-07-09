import { useState } from "react"

export default function MessageMe() {

    const initialForm = {
        name: "",
        subject: "",
        title: "",
        email: "",
        message: ""
    }

    const [formData, setFormData] = useState(initialForm);

    const onInput = (event) => {
        const { name, value } = event.target

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await fetch('/.netlify/functions/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(response => response.json())
                .then(data => console.log('Email sent:', data))
        }

        catch (error) {
            console.error('Error:', error);
        }

        setFormData(initialForm)
        event.target.reset()
    }

    return (
        <>
            <div className=" main backgroundImagePapers backgroundImageSizing "></div>
            <section className="main form-container matchImage">
                <form onSubmit={handleSubmit} className="messageForm">
                    <h1>SEND ME A MESSAGE</h1>
                    <div>
                        <label> Your Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            onChange={(event) => { onInput(event) }} />
                        <hr />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={(event) => { onInput(event) }} />
                        <hr />
                    </div>
                    <div>
                        <label>Subject:</label>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Enter a subject"
                            onChange={(event) => { onInput(event) }} />
                        <hr />
                    </div>
                    <div>
                        <label>Your message:</label>
                        <textarea
                            type="textbox"
                            name="message"
                            onChange={(event) => { onInput(event) }} />
                    </div>
                    <input className="submitButton" type="submit" name="submit" />
                </form>
                <p>Or email me directly at: <a href="mailto:lukas.dembicki@outlook.com">lukas.dembicki@outlook.com</a></p>
            </section>
        </>
    )
}