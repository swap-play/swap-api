import { ConflictException, Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repository';
import { hash } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

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

    return user;
  }

  async findAll() {
    return this.usersRepo.findAll();
  }
}
