import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Banner.css'
import {bannerVariants} from "./utils/BannerData"
import clsx from "clsx"

export function Banner({children, variant}) {

    return (
        <div className="banner">
            {children}
        </div>
    )
}

export function BannerTitle({children}) {
    return <p>{children}</p>
}

export function BannerParagraph({children}) {
    return <p>{children}</p>
}
