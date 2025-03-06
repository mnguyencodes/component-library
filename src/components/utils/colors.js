export const colors = [
    {
        backgroundColor: "var(--badge-gray-bg)",
        color: "var(--badge-gray-txt)"
    },
    {
        backgroundColor: "var(--badge-red-bg)",
        color: "var(--badge-red-txt)"
    },
    {
        backgroundColor: "var(--badge-yellow-bg)",
        color: "var(--badge-yellow-txt)"
    },
    {
        backgroundColor: "var(--badge-green-bg)",
        color: "var(--badge-green-txt)"
    },
    {
        backgroundColor: "var(--badge-blue-bg)",
        color: "var(--badge-blue-txt)"
    },
    {
        backgroundColor: "var(--badge-indigo-bg)",
        color: "var(--badge-indigo-txt)"
    },
    {
        backgroundColor: "var(--badge-purple-bg)",
        color: "var(--badge-purple-txt)"
    },
    {
        backgroundColor: "var(--badge-pink-bg)",
        color: "var(--badge-pink-txt)"
    }
]

export function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}