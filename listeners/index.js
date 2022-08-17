const { messageListeners } = require('./messages')
const { commandListeners } = require('./commands')
const { viewListeners } = require('./views')

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

const loadViewListeners = async app => {
    viewListeners.forEach(listener => {
        const [view, response] = listener
        app.view(view, response)
    })
}

module.exports = {
    loadMessageListeners,
    loadCommandListeners,
    loadViewListeners
}