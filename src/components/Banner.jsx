import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Banner.css'
import {bannerVariants} from "./utils/BannerData"
import clsx from "clsx"
import {useContext} from "react"

export function Banner({children, variant}) {
    const type = bannerVariants.find(banVariant=>banVariant.variant===variant) || ""

    return (
        <div className="banner">
            {type?.icon && <FontAwesomeIcon 
                className="icon" 
                icon={type.icon} 
            />}
            <div className="banner-text-container">
                {children}
            </div>
        </div>
    )
}

export function BannerTitle({children}) {
    return <p>{children}</p>
}

export function BannerParagraph({children}) {
    return <p>{children}</p>
}
