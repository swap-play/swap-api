import { randomBytes } from 'crypto';
import { resolve } from 'path';
import { diskStorage } from 'multer';

const tmpFolder = resolve('src', '..', 'tmp');

const uploadsFolder = resolve(tmpFolder, 'uploads');

const storage = diskStorage({
  destination: uploadsFolder,
  filename(request, file, callback) {
    const fileHash = randomBytes(10).toString('hex');
    const fileName = `${fileHash}-${file.originalname}`;

    return callback(null, fileName);
  },
});
export { tmpFolder, uploadsFolder, storage };
