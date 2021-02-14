import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import booksRouter from './routes/books';
import booksModel from './models/books';

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.models = { Books : booksModel };

booksRouter(app);

export default app;