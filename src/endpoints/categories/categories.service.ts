import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  public findAll() {
    return `This action returns all categories`;
  }

  public findOne(id: number) {
    return `This action returns a #${id} category`;
  }
}
