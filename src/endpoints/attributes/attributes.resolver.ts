import { Resolver, Query, Args, Int } from '@nestjs/graphql';

import { AttributesService } from './attributes.service';
import { Attribute } from './entities/attribute.entity';

@Resolver(() => Attribute)
export class AttributesResolver {
  constructor(private readonly attributesService: AttributesService) {}

  @Query(() => [Attribute], { name: 'attributes' })
  public findAll() {
    return this.attributesService.findAll();
  }

  @Query(() => Attribute, { name: 'attribute' })
  public findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attributesService.findOne(id);
  }
}
