import express, { Response } from 'express';
import fs from 'fs';
import path from 'path';
import routes from './routes/index';

const app = express();
const port = 3000;

app.use('/api', routes);

app.get('/', (_, res: Response): void => {
    res.status(200).send('Server is connected!');
});

app.listen(port, (): void => {
    const NewPath = path.resolve(__dirname, '../assets/New');

    if (!fs.existsSync(NewPath)) {
        fs.mkdirSync(NewPath);
    }

    console.log(`Running on port ${port}`);
});

export default app;