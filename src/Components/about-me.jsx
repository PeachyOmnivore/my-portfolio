import lukas from "/assets/images/lukas.jpeg"

export default function AboutMe() {
    return (
        <>
            <div className=" main backgroundImageRevy backgroundImageSizing "></div>
            <section className="main about-container matchImage">
                <article className="aboutme">
                    <h1>ABOUT ME:</h1>
                    <br />
                    <h2>Hello, my name is Lukas Allen Dembicki</h2>
                    <p>I am a Full-Stack Developer with a passion to build scalable applications and websites. <br /> <br />
                        Originally from Canada, I moved to the UK in 2020 and have been enjoying it very much. Myself and my wife live up in Scotland. I am legally here on a spousal Visa through my wife and am on route for citizennship. <br /> <br />
                        I have a passion and love being an avid outdoorsman and also a nerd. I enjoy digging into puzzles and problem solving. <br /> <br />
                        After a long 9 years of working in lift operations management, I made the big move to the UK and decided to persue a passion in technology. This naturally lead me to coding and I have spent the last 6 months and over 1000 hours learning with a coding bootcamp academy called Boolean.</p>
                    <img src={lukas} className="lukasImage" alt="A photo of Lukas" />
                </article>
            </section>
        </>
    )
}