export const colors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink"
]

export function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}