import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCircleCheck,
    faTriangleExclamation,
    faCircleXmark,
    faCircleInfo
} from '@fortawesome/free-solid-svg-icons'
import './Banner.css'

export function Banner({children}) {
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
