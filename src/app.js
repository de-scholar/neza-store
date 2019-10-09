import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import controller from './server/controller';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/view', express.static(path.join(__dirname, 'view')));
app.use('/', controller.indexRouter);


app.listen(port);
