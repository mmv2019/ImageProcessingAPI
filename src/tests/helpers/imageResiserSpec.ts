import path from 'path';
import help from '../../helpers/ImageHelp';

const ImagePath = path.resolve(__dirname, '../../../assets/Old/palmtunnel.jpg');
const NewImagePath = path.resolve(__dirname, '../../../assets/New/palmtunnel.jpg');

describe('The imageResizer', (): void => {
    it('returns a buffer after sucessfully resizing an image', async () => {
        const imageBuffer: Buffer = await help.resizedImage({
            height: 100,
            width: 150,
            ImagePath,
            NewImagePath,
        });
        expect(imageBuffer).toBeInstanceOf(Buffer);
    });

    it('rejects promise if something went wrong', async (): Promise<void> => {
        await expectAsync(
            help.resizedImage({
                height: 100,
                width: 150,
                ImagePath: '',
                NewImagePath,
            }),
        ).toBeRejected();
    });
});
