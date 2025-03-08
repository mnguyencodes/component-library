import clsx from "clsx"
import {getRandomColor} from "./utils/colors"
import "./Badge.css"

export default function Badge({
    children="Badge", 
    type="square", 
    color="gray", 
    useRandomColor=false
}) {
    if (useRandomColor) {
        color = getRandomColor()
    }

    const allClasses = clsx("badge", type, color)
    return (
        <div 
            className={allClasses}>
            {children}
        </div>
    )
}
