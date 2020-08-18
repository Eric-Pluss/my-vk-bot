const Scene = require('node-vk-bot-api/lib/scene');
const Markup = require('node-vk-bot-api/lib/markup');
const fs = require('../../common/fileSystem');

module.exports = new Scene('dir get',
  ctx => {
    // ctx.scene.next();
    ctx.scene.leave();
    ctx.reply('Вот что у меня есть:', null, Markup
      .keyboard(fs.dir('get')).inline(),
    );
  }
);