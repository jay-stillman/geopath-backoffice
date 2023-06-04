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
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EntityUpdateManyWithoutEntitiesInput } from "./EntityUpdateManyWithoutEntitiesInput";
import { EnumEntityEntityStatus } from "./EnumEntityEntityStatus";
import { EnumEntityEntityType } from "./EnumEntityEntityType";
import { EntityWhereUniqueInput } from "./EntityWhereUniqueInput";

@InputType()
class EntityUpdateInput {
  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  accountOwner?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => EntityUpdateManyWithoutEntitiesInput,
  })
  @ValidateNested()
  @Type(() => EntityUpdateManyWithoutEntitiesInput)
  @IsOptional()
  @Field(() => EntityUpdateManyWithoutEntitiesInput, {
    nullable: true,
  })
  childEntities?: EntityUpdateManyWithoutEntitiesInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  entityAccountContact?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  entityAccountsPayableEmail?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  entityBillingContact?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  entityName?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumEntityEntityStatus,
  })
  @IsEnum(EnumEntityEntityStatus)
  @IsOptional()
  @Field(() => EnumEntityEntityStatus, {
    nullable: true,
  })
  entityStatus?: "Active" | "Suspended" | "Disabled" | "Lead";

  @ApiProperty({
    required: false,
    enum: EnumEntityEntityType,
  })
  @IsEnum(EnumEntityEntityType)
  @IsOptional()
  @Field(() => EnumEntityEntityType, {
    nullable: true,
  })
  entityType?:
    | "GeopathVendor"
    | "GeopathPartner"
    | "MemberMediaOperator"
    | "MemberAgency"
    | "GeopathInternal";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  entityWebsite?: string | null;

  @ApiProperty({
    required: false,
    type: () => EntityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EntityWhereUniqueInput)
  @IsOptional()
  @Field(() => EntityWhereUniqueInput, {
    nullable: true,
  })
  parentEntity?: EntityWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  remoteAccountingId?: string | null;
}

export { EntityUpdateInput as EntityUpdateInput };