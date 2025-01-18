const express = require('express')
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');

const app = express(); 

app.use(bodyParser.urlencoded({ extended: true }));//use function automatically applies in that case bodyParser to all route handlers
app.use(
    cookieSession({
        keys: ['lalasldl234kjjnb'] //that's the key of authorisation and "base" for making a Cookie
    })
);
app.use(authRouter);

app.listen(3000, () => {
    console.log('Listening');
});