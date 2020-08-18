const Scene = require('node-vk-bot-api/lib/scene');
const Markup = require('node-vk-bot-api/lib/markup');
const fs = require('../../common/fileSystem');

module.exports = new Scene('dir delete',
  ctx => {
    ctx.scene.next()
    ctx.reply('Что будем удалять?', null, Markup
      .keyboard(fs.dir('get')).inline(),
    );
  },
  ctx => {
    ctx.scene.leave();
    fs.dir('delete', ctx.message.text);
    ctx.reply('Все ок');
  }
);