const VkBot = require('node-vk-bot-api');
const Session = require('node-vk-bot-api/lib/session');
const Stage = require('node-vk-bot-api/lib/stage');
const commands = require('./commands');
const dirScene = require('./scenes/dir/dir');
const TOKEN = 'dbe325b02d4fc6243d484baf1ad263c2a3a7ddd9aedcc919810485be2f6887711bf7ad6df5f83848e243f';

console.log('Стартуем...');

const bot = new VkBot({
  token: TOKEN,
  group_id: 186384405,
  execute_timeout: 50, // in ms   (50 by default)
  polling_timeout: 25, // in secs (25 by default)
});

const session = new Session();
const stage = new Stage(...dirScene);

bot.use(session.middleware());
bot.use(stage.middleware());

commands(bot);

bot.startPolling(err => {
  if (err) {
    console.error(err);
  }
});

console.log('Бот готов');