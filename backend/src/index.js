const app = require('./config/app');

app.listen(app.get('port'), () => {
    console.info(`server running on: ${app.get('port')}`);
});