import express, { Response, Request } from 'express';
import fs from 'fs/promises';
import path from 'path';

const RouterListImages = express.Router();

RouterListImages.get('/', async (_req: Request, res: Response): Promise<void> => {
    const imageFolderPath = `${path.resolve(__dirname, '../../../assets/Old')}`;

    const Listfiles: string[] | null = await fs.readdir(imageFolderPath).catch(() => {
        res.status(500).send('Error occured reading the images');
        return null; });

    if (!Listfiles) {
        return;
    }

    let respo = `
        <h1>Images</h1>
        <p>All images that are accessible via the route /api/imageAPI</p>
        <ul>
    `;

    Listfiles.forEach((file: string): void => {
        respo = respo + `<li>${file}</li>`;
    });

    res.status(200).send(`${respo}</ul>`);
});

export default RouterListImages;
