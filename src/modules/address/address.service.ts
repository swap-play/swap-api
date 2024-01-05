import { Injectable } from '@nestjs/common';

import { AddressDto } from './dto/address.dto';
import { AddressRepository } from 'src/shared/database/repositories/address.repository';

@Injectable()
export class AddressService {
  constructor(private readonly addressRepo: AddressRepository) {}

  async create(addresDto: AddressDto, userId: string) {
    const { cep, city, complement, neighbourhood, number, state, street } =
      addresDto;

    return this.addressRepo.create({
      data: {
        cep,
        city,
        complement,
        neighbourhood,
        number,
        state,
        street,
        userId,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }
}
