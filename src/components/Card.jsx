import "./Card.css"
import brandIcon from "../assets/brand-icon.png"

export function Card({children}) {
    return (
        <div className="card">
            <img src={brandIcon} alt="Card logo"/> 
            {children}
        </div>
    )
}

export function CardTitle({children}) {
    return (
        <p className="card-title">{children}</p>
    )
}

export function CardText({children}) {
    return (
        <p className="card-text">{children}</p>
    )
}