// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    return new Intl
    .DateTimeFormat('en-US', { weekday: "long" })
    .format(new Date(dateString));
}
