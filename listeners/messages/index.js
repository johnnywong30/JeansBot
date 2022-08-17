const { listenHello } = require('./hello')

const messageListeners = [
    listenHello
]

module.exports = {
    messageListeners
}