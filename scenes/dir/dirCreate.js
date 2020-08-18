const Scene = require('node-vk-bot-api/lib/scene');
const fs = require('../../common/fileSystem');

module.exports = new Scene('dir create',
  ctx => {
    ctx.scene.next()
    ctx.reply('Как назовем?');
  },
  ctx => {
    ctx.scene.leave();
    fs.dir('create', ctx.message.text);
    ctx.reply('Все ок');
  }
);