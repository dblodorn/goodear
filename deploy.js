require('dotenv').config();
let Client = require('ssh2-sftp-client');
let sftp = new Client();

const REMOTE_DIRECTORY = '/var/www/html/wp_content/themes/gems-api';

sftp.connect({
  host: process.env.SFTP_HOST,
  port: '22',
  privateKey: require('fs').readFileSync('id_rsa'),
  username: process.env.SFTP_USER,
  passphrase: process.env.SFTP_PASS
}).then(() => {
  return sftp.list(REMOTE_DIRECTORY);
}).then((data) => {
  console.log(data, 'the data info');
}).catch((err) => {
  console.log(err, 'catch error');
});