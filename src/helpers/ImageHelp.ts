import fs from 'fs/promises';
import sharp from 'sharp';

interface ResizeImageProps {
    width: number;
    height: number;
    ImagePath: string;
    NewImagePath: string;
}

const resizedImage = async ({
    width,
    height,
    ImagePath,
    NewImagePath,
}: ResizeImageProps): Promise<Buffer> => {
    const data: Buffer | null = await fs.readFile(ImagePath).catch(() => null);

    if (!data) {
        return Promise.reject();
    }

    const imageBuffer: Buffer | null = await sharp(data)
        .resize(width, height)
        .toBuffer()
        .catch(() => null);

    if (!imageBuffer) {
        return Promise.reject();
    }

    return fs
        .writeFile(NewImagePath, imageBuffer)
        .then(() => {
            return imageBuffer;
        })
        .catch(() => {
            return Promise.reject();
        });
};

export default { resizedImage };
