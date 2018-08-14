const fs = require('fs');

const argv = process.argv.slice(2);

if (argv.length !== 1 || !argv[0].startsWith('--file=')) {
  console.log('missing --file');
  process.exit(1);
}

const filename = argv[0].slice('--file='.length);

const file = fs.readFileSync(filename, 'utf-8');
const json = JSON.parse(file);

delete json.id.nick;
json.contact.address.firstLine = json.contact.address.secondLine;
delete json.contact.address.secondLine;
delete json.contact.tel;

fs.writeFileSync(filename, JSON.stringify(json, 2, 2));
