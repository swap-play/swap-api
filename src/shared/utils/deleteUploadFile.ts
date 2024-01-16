import { uploadsFolder } from 'src/shared/config/upload';
import { resolve } from 'path';
import { promises } from 'fs';

export async function deleteUploadFile(file: string) {
  const filepath = resolve(uploadsFolder, file);

  try {
    await promises.stat(filepath);
  } catch {
    return;
  }
  await promises.unlink(filepath);
}
