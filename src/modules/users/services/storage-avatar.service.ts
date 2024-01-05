import { Injectable } from '@nestjs/common';
import { uploadsFolder } from 'src/shared/config/upload';
import { resolve } from 'path';
import { promises } from 'fs';

@Injectable()
export class StorageAvatarService {
  async deleteFile(file: string) {
    const filepath = resolve(uploadsFolder, file);

    try {
      await promises.stat(filepath);
    } catch {
      return;
    }
    await promises.unlink(filepath);
  }
}
