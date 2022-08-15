const { helloRegex } = require('../const/regex')

const listenHello = [
    helloRegex,
    async ({ context, say }) => {
        const greeting = context.matches[0]
        await say(`${greeting} fucker, you makin' pesto tonight?`)
    }
]

module.exports = {
    listenHello
}