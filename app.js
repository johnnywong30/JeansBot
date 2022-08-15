const { App } = require('@slack/bolt')
require('dotenv').config()

const { loadListeners } = require('./listeners')

const PORT = 3000

// Initializes your app with your bot token and signing secret
const app = new App({
	token: process.env.SLACK_BOT_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET,
	socketMode: true,
	appToken: process.env.APP_TOKEN,
	port: process.env.PORT || 3000,
});

(async () => {
	// Start your app
	await loadListeners(app)
	await app.start(process.env.PORT || PORT)
	console.log(`⚡️ Slack Bolt app is running on port ${PORT}!`)
})()
