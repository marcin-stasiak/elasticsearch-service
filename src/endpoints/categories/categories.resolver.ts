import { Resolver, Query, Args, Int } from '@nestjs/graphql';

import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Query(() => [Category], { name: 'categories' })
  public findAll() {
    return this.categoriesService.findAll();
  }

  @Query(() => Category, { name: 'category' })
  public findOne(@Args('id', { type: () => Int }) id: number) {
    return this.categoriesService.findOne(id);
  }
}
