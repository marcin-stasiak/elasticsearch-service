import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  public findAll() {
    return `This action returns all products`;
  }

  public findOne(id: number) {
    return `This action returns a #${id} product`;
  }
}
