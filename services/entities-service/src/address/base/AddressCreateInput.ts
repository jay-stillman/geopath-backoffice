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
import { IsString, IsOptional, IsInt, IsEnum } from "class-validator";
import { EnumAddressAddressStatus } from "./EnumAddressAddressStatus";
import { EnumAddressAddressType } from "./EnumAddressAddressType";

@InputType()
class AddressCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressCity?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  addressFax?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressGeopoint?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressLine_1?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressLine_2?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  addressPhone?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressState?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumAddressAddressStatus,
  })
  @IsEnum(EnumAddressAddressStatus)
  @IsOptional()
  @Field(() => EnumAddressAddressStatus, {
    nullable: true,
  })
  addressStatus?: "Active" | "Disabled" | null;

  @ApiProperty({
    required: true,
    enum: EnumAddressAddressType,
  })
  @IsEnum(EnumAddressAddressType)
  @Field(() => EnumAddressAddressType)
  addressType!: "HeadOffice" | "Billing" | "FieldOffice";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  addressZipcode?: string | null;
}

export { AddressCreateInput as AddressCreateInput };
