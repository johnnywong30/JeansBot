const { listenHello } = require('./hello')

const listeners = [
    listenHello
]

const loadListeners = async app => {
    listeners.forEach(listener => {
        const [message, response] = listener
        app.message(message, response)
    })
}

module.exports = {
    loadListeners
}