import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Attribute {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  public exampleField: number;
}
