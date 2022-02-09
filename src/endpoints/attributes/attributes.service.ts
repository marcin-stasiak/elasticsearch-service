import { Injectable } from '@nestjs/common';

@Injectable()
export class AttributesService {
  public findAll() {
    return `This action returns all attributes`;
  }

  public findOne(id: number) {
    return `This action returns a #${id} attribute`;
  }
}
