const { listenHello } = require('./hello')
const { scheduleMeeting } = require('./meetings')

const messageListeners = [
    listenHello
]

const commandListeners = [
    scheduleMeeting
]

const loadMessageListeners = async app => {
    messageListeners.forEach(listener => {
        const [message, response] = listener
        app.message(message, response)
    })
}

const loadCommandListeners = async app => {
    commandListeners.forEach(listener => {
        const [command, response] = listener
        app.command(command, response)
    })
}

module.exports = {
    loadMessageListeners,
    loadCommandListeners
}