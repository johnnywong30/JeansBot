const scheduleMeetingBlocks = (currentDate, initialTime) => [
    {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "Select a Date"
        },
        "accessory": {
            "type": "datepicker",
            "action_id": "datepicker-action",
            "initial_date": currentDate,
            "placeholder": {
                "type": "plain_text",
                "text": "Select a date",
                "emoji": true
            }
        }
    },
    {
        "type": "section",
        "text": {
            "type": "mrkdwn",
            "text": "Select a Time"
        },
        "accessory": {
            "type": "timepicker",
            "initial_time": initialTime,
            "placeholder": {
                "type": "plain_text",
                "text": "Select time",
                "emoji": true
            },
            "action_id": "timepicker-action"
        }
    },
    {
        "type": "input",
        "element": {
            "type": "plain_text_input",
            "action_id": "meeting-input-action"
        },
        "label": {
            "type": "plain_text",
            "text": "Meeting Link",
            "emoji": true
        }
    }
]

module.exports = {
    scheduleMeetingBlocks
}