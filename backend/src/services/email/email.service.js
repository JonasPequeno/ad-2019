const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.KEY_SENDGRID);


exports.sendEmail = (personName, to, friendName) => {
    const msg = {
        to,
        from: 'jonaspdasilva31@gmail.com',
        subject: 'Amigo secreto',
        text: 'Amigo secreto - ad-2019',
        html: `           
            Olá <strong>${personName}</strong> seu amigo secreto é <strong>${friendName}</strong>
        `,
    };
    sgMail.send(msg)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
};

