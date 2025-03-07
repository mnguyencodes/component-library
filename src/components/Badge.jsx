import clsx from "clsx"
import {colors, getRandomColor} from "./utils/colors"
import "./Badge.css"

export default function Badge({children="Badge", type="square", color="gray"}) {
    const allClasses = clsx("badge", type, color)
    return (
        <div 
            className={allClasses}>
            {children}
        </div>
    )
}
