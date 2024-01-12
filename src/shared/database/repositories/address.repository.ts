import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(addressDto: Prisma.AddressCreateArgs) {
    return this.prismaService.address.create(addressDto);
  }
}
