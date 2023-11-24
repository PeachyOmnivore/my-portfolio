export default function MessageMe() {

const handleSubmit = (event) => {
    event.preventDefault()
}

    return (
        <>
            <div className=" main backgroundImagePapers "></div>
            <section className="main form-container">
                <form onSubmit={handleSubmit}className="messageForm">
                    <h1>SEND ME A MESSAGE</h1>
                    <div>
                        <label> Your Name:</label>
                        <input type="text" name="name" placeholder="Enter your name" />
                        <hr />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" placeholder="Enter your email" />
                        <hr />
                    </div>
                    <div>
                        <label>Your message:</label>
                        <textarea type="textbox" name="message" />
                    </div>
                    <input className="submitButton" type="submit" name="submit" />
                </form>
            </section>
        </>
    )
}