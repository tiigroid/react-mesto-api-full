require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { errors } = require('celebrate');
const routerUsers = require('./routes/users');
const routerCards = require('./routes/cards');
const { createUser, login, logout } = require('./controllers/users');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { cors } = require('./middlewares/cors');
const handleErrors = require('./middlewares/handle-errors');
const { validateSignIn, validateSignUp } = require('./middlewares/handle-validation');
const NotFoundError = require('./utils/errors/NotFoundError');

const { PORT = 51441 } = process.env;
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(requestLogger);
app.use(cors);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signup', validateSignUp(), createUser);
app.post('/signin', validateSignIn(), login);
app.get('/signout', logout);

app.use(auth);

app.use('/users', routerUsers);
app.use('/cards', routerCards);

app.use('/', (req, res, next) => next(new NotFoundError('Путь не найден')));

app.use(errorLogger);
app.use(errors());
app.use(handleErrors);

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/mestodb');

app.listen(PORT);
