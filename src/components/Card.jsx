import "./Card.css"
import brandIcon from "../assets/brand-icon.png"

export function Card() {
    return (
        <div className="card">
            <img src={brandIcon}/> 
            {children}
        </div>
    )
}

export function CardTitle() {
    return (
        <div className="card-title">CardTitle Component Goes Here!</div>
    )
}

export function CardText() {
    return (
        <div className="card-text">CardText Component Goes Here!</div>
    )
}