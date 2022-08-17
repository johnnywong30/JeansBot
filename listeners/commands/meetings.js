const { getNextHour } = require('../../utils/time')
const { scheduleMeetingBlocks } = require('../../const/modals')

const scheduleMeeting = [
    '/schedule',
    async ({ ack, body, client, logger, respond }) => {
        await ack()
        try {
            const currentDate = new Date().toISOString().slice(0, 10)
            const initialTime = getNextHour().toTimeString().slice(0, 5)
            const result = await client.views.open({
                // Pass a valid trigger_id within 3 seconds of receiving it
                trigger_id: body.trigger_id,
                // View payload
                view: {
                    type: 'modal',
                    // View identifier
                    callback_id: 'schedule_meeting_view',
                    title: {
                        type: 'plain_text',
                        text: 'Schedule a Meeting'
                    },
                    blocks: scheduleMeetingBlocks(currentDate, initialTime),
                    submit: {
                        type: 'plain_text',
                        text: 'Submit'
                    }
                }
            });
            logger.info(result)
        } catch (e) {
            logger.error(e)
        }
        // await respond(`you said to schedule me fucking ${command.text}`)
    }
]

module.exports = {
    scheduleMeeting
}