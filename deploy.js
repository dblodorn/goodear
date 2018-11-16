require('dotenv').config();
var fs = require('fs');
var Client = require('ssh2-sftp-client');

var sftp = new Client();

const REMOTE_DIRECTORY = '/var/www/html/wp-content/themes/gems-api';
const PUB_KEY = fs.readFileSync('/Users/dmbk/.ssh/id_rsa')

sftp.connect({
  host: process.env.SFTP_HOST,
  port: '22',
  privateKey: PUB_KEY,
  username: process.env.SFTP_USER,
  passphrase: process.env.SFTP_PASS
}).then(() => {
  return sftp.list(REMOTE_DIRECTORY);
}).then((data) => {
  console.log(data, 'the data info');
}).catch((err) => {
  console.log(err, 'catch error');
});