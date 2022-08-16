const scheduleMeeting = [
    '/schedule',
    async ({ command, ack, respond }) => {
        await ack()
        await respond(`you said to schedule some bull ${command.text}`)
    }
]

module.exports = {
    scheduleMeeting
}