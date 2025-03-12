import "./Card.css"
import brandIcon from "../assets/brand-icon.png"

export function Card({children}) {
    return (
        <div className="card">
            <img src={brandIcon}/> 
            {children}
        </div>
    )
}

export function CardTitle({children}) {
    return (
        <div className="card-title">{children}</div>
    )
}

export function CardText({children}) {
    return (
        <div className="card-text">{children}</div>
    )
}