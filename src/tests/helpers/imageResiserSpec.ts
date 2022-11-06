import path from 'path';
import help from '../../helpers/ImageHelp';

const ImagePath = path.resolve(__dirname, '../../../assets/Old/palmtunnel.jpg');
const NewImagePath = path.resolve(__dirname, '../../../assets/New/palmtunnel.jpg');

describe('The imageResizer', (): void => {
    it('resize the image and return buffer', async () => {
        const imageBuffer: Buffer = await help.resizedImage({
            height: 100,
            width: 150,
            ImagePath,
            NewImagePath,
        });
        expect(imageBuffer).toBeInstanceOf(Buffer);
    });

    it('rejects if something wrong', async () => {
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
