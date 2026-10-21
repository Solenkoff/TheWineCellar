export default function formatDate(dateString) {
    if (!dateString) return "";

    const date = new Date(dateString);
    const today = new Date();

    if (Number.isNaN(date.getTime())) return "";

    const isToday =
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate();

    if (isToday) {
        const time = new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        }).format(date);

        return `Today at ${time}`;
    }

    return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(date);
}