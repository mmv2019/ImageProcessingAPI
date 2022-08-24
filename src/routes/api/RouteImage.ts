import express, { Request, Response } from 'express';
import fs from 'fs/promises';
import path from 'path';
import help from '../../helpers/ImageHelp';
import { Stats } from 'fs';

const RouteImage = express.Router();

RouteImage.get('/', async (req: Request, res: Response): Promise<void> => {
    const filename = req.query['filename'];
    const height = req.query['height'] ? parseInt(req.query['height'] as string, 10) : null;
    const width = req.query['width'] ? parseInt(req.query['width'] as string, 10) : null;

    if (!filename || !height || !width) {
        res.status(400).send('Please make sure url contains correct filename, height and width params');
        return;
    }

    const ImagePath = `${path.resolve(__dirname, `../../../assets/Old/${filename}.jpg`)}`;

    const NewImagePath = `${path.resolve(__dirname, `../../../assets/New/${filename}-${height}x${width}.jpg`)}`;

    
    const fullImage: Stats | null = await fs.stat(ImagePath).catch(() => {
        res.status(404).send('Image does not exist');
        return null;
    });

    if (!fullImage) {
        return;
    }

    const existingImage: Stats | null = await fs.stat(NewImagePath).catch(() => {
        return null;
    });

    if (existingImage) {
        fs.readFile(NewImagePath)
            .then((thumbData: Buffer) => {
                res.status(200).contentType('jpg').send(thumbData);
            })
        
    } else {
        // resize image
        help
            .resizedImage({
                ImagePath,
                NewImagePath,
                height,
                width,
            })
            .then((resizedImage: Buffer) => {
                res.status(200).contentType('jpg').send(resizedImage);
            })
            .catch(() => {
                res.status(500).send('Error occured processing the image');
            });
    }
});

export default RouteImage;
