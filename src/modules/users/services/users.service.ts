import { ConflictException, Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repository';
import { hash } from 'bcryptjs';
import { UpdateUserDto } from '../dto/update-user.dto';
import { StorageAvatarService } from './storage-avatar.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepo: UsersRepository,
    private readonly storageAvatarService: StorageAvatarService,
  ) {}

  async create(userDto: UserDto) {
    const { email, password } = userDto;

    const emailAlreadyUsed = await this.usersRepo.findUnique({
      where: { email },
    });

    if (emailAlreadyUsed) {
      throw new ConflictException('This E-mail is already in use.');
    }

    const hashedPassword = await hash(password, 12);

    const user = await this.usersRepo.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return { email: user.email };
  }

  async update(userId: string, userDto: UpdateUserDto) {
    const { name, gender, birthday } = userDto;

    const user = await this.usersRepo.update({
      where: { id: userId },
      data: { name, gender, birthday },
    });

    delete user.password;
    return user;
  }

  async updateAvatar(userId: string, avatarFilename: string) {
    const user = await this.getUserById(userId);

    if (!user) {
      throw new ConflictException('Unable to change user avatar.');
    }

    if (user.avatar) {
      await this.storageAvatarService.deleteFile(user.avatar);
    }

    return await this.usersRepo.update({
      where: { id: userId },
      data: { avatar: avatarFilename },
      select: { avatar: true },
    });
  }

  // exclude fields, podemos implementar no futuro para so excluir a senha
  getUserById(userId: string) {
    return this.usersRepo.findUnique({
      where: { id: userId },
      select: {
        name: true,
        email: true,
        gender: true,
        avatar: true,
        birthday: true,
      },
    });
  }

  async findAll() {
    return this.usersRepo.findAll();
  }
}
