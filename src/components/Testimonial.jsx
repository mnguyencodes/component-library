import "./Testimonial.css"

export function TestimonialWithPicture({children, src}) {
    return (
        <div className="test-pic-container">
            <div className="test-pic-container-top">
                <img src={src} />
            </div>
            <div className="test-pic-container-bottom">
                {children}
            </div>
        </div>
    )
}

export function TestimonialText({children}) {
    return (
        <p className="testimonial-text">
            {children}
        </p>
    )
}

export function TestimonialName({children}) {
    return (
        <p className="m0 testimonial-name">{children}</p>
    )
}

export function TestimonialTitle({children}) {
    return (
        <p className="m0 testimonial-title">{children}</p>
    )
}

export function TestimonialWithoutPicture({children}) {
    return (
        <h1 className="testimonial-no-text">{children}</h1>
    )
}

    