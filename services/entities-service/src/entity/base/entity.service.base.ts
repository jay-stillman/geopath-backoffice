/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Entity, User } from "@prisma/client";

export class EntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EntityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EntityFindManyArgs>
  ): Promise<number> {
    return this.prisma.entity.count(args);
  }

  async findMany<T extends Prisma.EntityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EntityFindManyArgs>
  ): Promise<Entity[]> {
    return this.prisma.entity.findMany(args);
  }
  async findOne<T extends Prisma.EntityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EntityFindUniqueArgs>
  ): Promise<Entity | null> {
    return this.prisma.entity.findUnique(args);
  }
  async create<T extends Prisma.EntityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EntityCreateArgs>
  ): Promise<Entity> {
    return this.prisma.entity.create<T>(args);
  }
  async update<T extends Prisma.EntityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EntityUpdateArgs>
  ): Promise<Entity> {
    return this.prisma.entity.update<T>(args);
  }
  async delete<T extends Prisma.EntityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EntityDeleteArgs>
  ): Promise<Entity> {
    return this.prisma.entity.delete(args);
  }

  async findChildEntities(
    parentId: string,
    args: Prisma.EntityFindManyArgs
  ): Promise<Entity[]> {
    return this.prisma.entity
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .childEntities(args);
  }

  async getAccountOwner(parentId: string): Promise<User | null> {
    return this.prisma.entity
      .findUnique({
        where: { id: parentId },
      })
      .accountOwner();
  }

  async getEntityAccountContact(parentId: string): Promise<User | null> {
    return this.prisma.entity
      .findUnique({
        where: { id: parentId },
      })
      .entityAccountContact();
  }

  async getEntityBillingContact(parentId: string): Promise<User | null> {
    return this.prisma.entity
      .findUnique({
        where: { id: parentId },
      })
      .entityBillingContact();
  }

  async getParentEntity(parentId: string): Promise<Entity | null> {
    return this.prisma.entity
      .findUnique({
        where: { id: parentId },
      })
      .parentEntity();
  }
}