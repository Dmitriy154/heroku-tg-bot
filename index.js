//telegram_boot
const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '1331879609:AAFiFjCz8BCARiy-xvR61tkozjQ0tKyFBQ0'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
	bot.sendMessage(msg.chat.id, `Hello, bot says: "Hi, ${msg.from.first_name}"`)
})