const addHours = (numOfHours, date = new Date()) => {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000)
    return date
}

const getNextHour = () => {
    return addHours(1)
}

module.exports = {
    getNextHour
}