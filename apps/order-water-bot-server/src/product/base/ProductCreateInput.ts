/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { CartCreateNestedManyWithoutProductsInput } from "./CartCreateNestedManyWithoutProductsInput";
import { Type } from "class-transformer";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

@InputType()
class ProductCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => CartCreateNestedManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => CartCreateNestedManyWithoutProductsInput)
  @IsOptional()
  @Field(() => CartCreateNestedManyWithoutProductsInput, {
    nullable: true,
  })
  carts?: CartCreateNestedManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutProductsInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutProductsInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutProductsInput;
}

export { ProductCreateInput as ProductCreateInput };
