import "./Testimonial.css"

export function TestimonialWithPicture({children}) {
    return (
        <h1 className="testimonial-text">{children}</h1>
    )
}

export function TestimonialWithoutPicture({children}) {
    return (
        <h1 className="testimonial-no-text">{children}</h1>
    )
}

