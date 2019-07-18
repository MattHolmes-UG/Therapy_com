const express = require('express');
const expressEdge = require('express-edge');
const edge = require('edge.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo'); //store session on the server
const connectFlash = require('connect-flash');
const app = express();
const http = require('http').createServer(app);
const socket = require('socket.io')(http);


const homePageController = require('./controllers/homePage');
const commentController = require('./controllers/comment');
const registerController = require('./controllers/register');
const storeUserController = require('./controllers/storeUser');
const loginController = require('./controllers/login');
const userLoginController = require('./controllers/userLogin');
const logoutController = require('./controllers/logout');
const userProfileController = require('./controllers/userProfile');
const userChatController = require('./controllers/userChat');


mongoose.connect('mongodb://localhost/project-t', (error) => {
    console.log('mongodb connected');
});

const Message = require('./database/models/message');

const auth = require('./middleware/auth');
const redirectifauth = require('./middleware/redirectifauth');

const mongoStore = connectMongo(expressSession);

app.use(connectFlash());
app.use(expressSession({
    secret: 'secret',
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    }) 
}))
app.use(express.static('UI'))
app.use(expressEdge)
app.set('views', `${__dirname}/views`);
app.use('*', (req, res, next) => {
    edge.global('auth', req.session.userId)
    next()
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', homePageController);
app.post('/comment', auth, commentController);
app.get('/register', redirectifauth, registerController);
app.post('/users/register',redirectifauth, storeUserController);
app.get('/user/login', redirectifauth, loginController);~
app.post('/auth/login', redirectifauth, userLoginController);
app.get('/auth/logout', auth, logoutController);
app.get('/auth/profile', auth, userProfileController);

socket.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on("chat message", function (msg) {
        console.log("message: " + msg);
        socket.emit('received', { message: msg })
    });
});

port = process.env.PORT || 3000
http.listen(3000, () => console.log(`Listening on port ${port}`))