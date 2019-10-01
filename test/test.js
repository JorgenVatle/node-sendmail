const FS = require('fs');
const Path = require('path');

const SendMail = require('../sendmail')({
    dkim: {
        privateKey: FS.readFileSync(Path.join(__dirname, 'dkim')),
        keySelector: '1569962793',
    }
});

SendMail({
    from: 'dev-server@wheelchairapocalypse.com',
    to: 'jorgen@wcaservices.net',
    subject: 'Mailserver Test',
    html: 'It works!',
}, (err, resp) => {
    console.log('Promise fulfilled!', {
        err, resp
    })
});