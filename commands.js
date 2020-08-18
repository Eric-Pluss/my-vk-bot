module.exports = bot => {
  bot.command('/dir', ctx => {
    ctx.scene.enter('dir');
  });

  bot.command('/create', ctx => {
    ctx.scene.enter('dir create');
  });

  bot.command('/delete', ctx => {
    ctx.scene.enter('dir delete');
  });

  bot.command('/get', ctx => {
    ctx.scene.enter('dir get');
  });
}