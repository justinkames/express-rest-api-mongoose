import express from 'express';
import bodyParser from 'body-parser';
import router from '../routes/index';
import db from '../db/db';

let app = express();
let port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', router(db));
app.listen(port);

console.log(`Server listening @ ${port}`);

export default app;
