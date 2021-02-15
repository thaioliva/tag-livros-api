import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import booksRouter from './routes/books';
import usersRouter from './routes/users';
import authRouter from './routes/auth';
import booksModel from './models/books';
import usersModel from './models/users';
import authorization from './auth';

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.models = { Books : booksModel };
app.models = { ...app.models, Users : usersModel };

const auth = authorization(app);
app.auth = auth;
app.use(auth.initialize());

booksRouter(app);
usersRouter(app);
authRouter(app);

export default app;