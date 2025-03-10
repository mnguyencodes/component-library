import { 
    faCircleCheck,
    faTriangleExclamation,
    faCircleXmark,
    faCircleInfo
} from '@fortawesome/free-solid-svg-icons'

export const bannerVariants = [
    {
        variant: "success",
        icon: faCircleCheck
    },
    {
        variant: "warning",
        icon: faTriangleExclamation,

    },
    {
        variant: "error",
        icon: faCircleXmark,

    },
    {
        variant: "neutral",
        icon: faCircleInfo
    }
]