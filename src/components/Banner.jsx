import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Banner.css'
import {bannerVariants} from "./utils/BannerData"
import clsx from "clsx"
import {useContext, createContext} from "react"

const BannerContext = createContext()

export function Banner({children, variant}) {
    return (
        <BannerContext.Provider value={variant}>
            <div className={`banner banner-${variant}`}>
                {children}
            </div>
        </BannerContext.Provider>
    )
}

export function BannerTitle({children}) {
    const variant = useContext(BannerContext)
    const type = bannerVariants.find(banVariant=>banVariant.variant===variant) || ""

    const allClasses = clsx("banner-title", `banner-${variant}-title`)
    return (
        <div className="banner-title-container">
            {type?.icon && <FontAwesomeIcon 
                className={`icon banner-${variant}-icon`}
                icon={type.icon} 
            />}
            <p className={allClasses}>{children}</p>
        </div>
    )
}

export function BannerText({children}) {
    const variant = useContext(BannerContext)

    const allClasses = clsx("banner-text", `banner-${variant}-text`)
    return <p className={allClasses}>{children}</p>
}
