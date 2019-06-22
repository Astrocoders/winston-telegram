/*
 * Using custom format message.
 */

var winston = require('winston')

require('../lib/winston-telegram').Telegram

winston.add(winston.transports.Telegram, {
  token: 'TELEGRAM_TOKEN',
  chatId: 'CHAT_ID',
  level: 'warn',
  unique: true,
  formatMessage: function (opts) {
    var message = opts.message

    if (opts.level === 'warn') {
      message = '[Warning] ' + message
    }
    return message
  }
})

winston.warn('Some warning!!')

// Output: [Warning] Some warning!!
