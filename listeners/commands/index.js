const { scheduleMeeting } = require('./meetings')

const commandListeners = [
    scheduleMeeting
]

module.exports = {
    commandListeners
}