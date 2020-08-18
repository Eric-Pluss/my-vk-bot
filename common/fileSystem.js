const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'catalogue.json');

module.exports.dir = (action, name) => {
  const catalogue = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  switch (action) {
    case 'create':
      catalogue[name] = {};
      break;

    case 'delete':
      delete catalogue[name];
      break;

    case 'get':
      const buttons = [];

      for (let cat in catalogue) {
        if (catalogue.hasOwnProperty(cat)) {
          buttons.push(cat);
        }
      }

      return buttons;
  }

  fs.writeFile(filePath,  JSON.stringify(catalogue), (err => {
    if (err) console.error(err);
  }))
}