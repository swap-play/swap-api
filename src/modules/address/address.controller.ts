import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressDto } from './dto/address.dto';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  create(@ActiveUserId() userId: string, @Body() addressDto: AddressDto) {
    return this.addressService.create(addressDto, userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(+id);
  }
}
