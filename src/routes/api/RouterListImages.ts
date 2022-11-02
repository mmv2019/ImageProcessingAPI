import express, { Response, Request } from 'express';
import fs from 'fs/promises';
import path from 'path';

const RouterListImages = express.Router();

RouterListImages.get('/', async (_req: Request, res: Response): Promise<void> => {
    const imageFolderPath = `${path.resolve(__dirname, '../../../assets/Old')}`;

    const files: string[] | null = await fs.readdir(imageFolderPath).catch(() => {
        res.status(500).send('Error occured reading the images');
        return null;
    });

    if (!files) {
        return;
    }

    let htmlResponse = `
        <h1>Available images</h1>
        <p>Below you can find all images that are accessible via the route /api/imageAPI</p>
        <ul>
    `;

    files.forEach((file: string): void => {
        htmlResponse = htmlResponse + `<li>${file}</li>`;
    });

    res.status(200).send(`${htmlResponse}</ul>`);
});

export default RouterListImages;
