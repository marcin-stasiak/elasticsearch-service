import { Resolver, Query, Args, Int } from '@nestjs/graphql';

import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [Product], { name: 'products' })
  public findAll() {
    return this.productsService.findAll();
  }

  @Query(() => Product, { name: 'product' })
  public findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.findOne(id);
  }
}
