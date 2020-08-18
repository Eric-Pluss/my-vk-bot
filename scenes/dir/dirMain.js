const Scene = require('node-vk-bot-api/lib/scene');
const Markup = require('node-vk-bot-api/lib/markup');

module.exports = new Scene('dir',
  ctx => {
    ctx.scene.next();
    ctx.reply('Управление файлами', null, Markup
      .keyboard([
        [Markup.button('Создать', 'positive', {action: 'create'})],
        [Markup.button('Обзор', 'primary', {action: 'get'})],
        [Markup.button('Удалить', 'negative', {action: 'delete'})]
      ]).inline(),
    );
  },
  ctx => {
    if (ctx.message.payload) {
      let action = JSON.parse(ctx.message.payload).action;
      switch (action) {
        case "create":
          ctx.scene.enter('dir create');
          break;

        case "get":
          ctx.scene.enter('dir get');
          break;

        case "delete":
          ctx.scene.enter('dir delete');
          break;
      }
    } else {
      ctx.scene.leave();
    }
  });


