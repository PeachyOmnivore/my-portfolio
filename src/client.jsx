import { useLocation } from "react-router-dom"

const ChangeClassColour = () => {

    const location = useLocation()
    const locationPath = location.pathname

    const body = document.querySelector("body")
    if (locationPath === "/") {
        body.classList = "babyBlue"
    } else if (locationPath === "/about-me") {
        body.classList = "navyBlue"
    } else if (locationPath === "/projects") {
        body.classList = "forestGreen"
    } else if (locationPath === "/education-experience") {
        body.classList = "burntRed"
    } else if (locationPath === "/tech-stack") {
        body.classList = "peach"
    } else if (locationPath === "/message") {
        body.classList = "cream"
    }
}

export { ChangeClassColour }