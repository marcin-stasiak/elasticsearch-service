import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAttributeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
