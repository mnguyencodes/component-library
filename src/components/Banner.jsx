import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Banner.css'
import {bannerVariants} from "./utils/BannerData"
import clsx from "clsx"
import {useContext, createContext} from "react"

const BannerContext = createContext()

export function Banner({children, variant}) {
    return (
        <BannerContext.Provider value={variant}>
            <div className="banner">
                {children}
            </div>
        </BannerContext.Provider>
    )
}

export function BannerTitle({children}) {
    const variant = useContext(BannerContext)
    const type = bannerVariants.find(banVariant=>banVariant.variant===variant) || ""
    return (
        <div className="banner-title-container">
            {type?.icon && <FontAwesomeIcon 
                className="icon" 
                icon={type.icon} 
            />}
            <p className="banner-title">{children}</p>
        </div>
    )
}

export function BannerText({children}) {
    return <p className="banner-text">{children}</p>
}
