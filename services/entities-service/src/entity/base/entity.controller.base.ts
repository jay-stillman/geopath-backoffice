/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { EntityService } from "../entity.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EntityCreateInput } from "./EntityCreateInput";
import { EntityWhereInput } from "./EntityWhereInput";
import { EntityWhereUniqueInput } from "./EntityWhereUniqueInput";
import { EntityFindManyArgs } from "./EntityFindManyArgs";
import { EntityUpdateInput } from "./EntityUpdateInput";
import { Entity } from "./Entity";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EntityControllerBase {
  constructor(
    protected readonly service: EntityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Entity })
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: EntityCreateInput): Promise<Entity> {
    return await this.service.create({
      data: {
        ...data,

        accountOwner: {
          connect: data.accountOwner,
        },

        entityAccountContact: {
          connect: data.entityAccountContact,
        },

        entityBillingContact: data.entityBillingContact
          ? {
              connect: data.entityBillingContact,
            }
          : undefined,

        parentEntity: data.parentEntity
          ? {
              connect: data.parentEntity,
            }
          : undefined,
      },
      select: {
        accountOwner: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        entityAccountContact: {
          select: {
            id: true,
          },
        },

        entityAccountsPayableEmail: true,

        entityBillingContact: {
          select: {
            id: true,
          },
        },

        entityName: true,
        entityStatus: true,
        entityType: true,
        entityWebsite: true,
        id: true,

        parentEntity: {
          select: {
            id: true,
          },
        },

        remoteAccountingId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Entity] })
  @ApiNestedQuery(EntityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Entity[]> {
    const args = plainToClass(EntityFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        accountOwner: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        entityAccountContact: {
          select: {
            id: true,
          },
        },

        entityAccountsPayableEmail: true,

        entityBillingContact: {
          select: {
            id: true,
          },
        },

        entityName: true,
        entityStatus: true,
        entityType: true,
        entityWebsite: true,
        id: true,

        parentEntity: {
          select: {
            id: true,
          },
        },

        remoteAccountingId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Entity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: EntityWhereUniqueInput
  ): Promise<Entity | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        accountOwner: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        entityAccountContact: {
          select: {
            id: true,
          },
        },

        entityAccountsPayableEmail: true,

        entityBillingContact: {
          select: {
            id: true,
          },
        },

        entityName: true,
        entityStatus: true,
        entityType: true,
        entityWebsite: true,
        id: true,

        parentEntity: {
          select: {
            id: true,
          },
        },

        remoteAccountingId: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Entity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() data: EntityUpdateInput
  ): Promise<Entity | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          accountOwner: {
            connect: data.accountOwner,
          },

          entityAccountContact: {
            connect: data.entityAccountContact,
          },

          entityBillingContact: data.entityBillingContact
            ? {
                connect: data.entityBillingContact,
              }
            : undefined,

          parentEntity: data.parentEntity
            ? {
                connect: data.parentEntity,
              }
            : undefined,
        },
        select: {
          accountOwner: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          entityAccountContact: {
            select: {
              id: true,
            },
          },

          entityAccountsPayableEmail: true,

          entityBillingContact: {
            select: {
              id: true,
            },
          },

          entityName: true,
          entityStatus: true,
          entityType: true,
          entityWebsite: true,
          id: true,

          parentEntity: {
            select: {
              id: true,
            },
          },

          remoteAccountingId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Entity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: EntityWhereUniqueInput
  ): Promise<Entity | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          accountOwner: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          entityAccountContact: {
            select: {
              id: true,
            },
          },

          entityAccountsPayableEmail: true,

          entityBillingContact: {
            select: {
              id: true,
            },
          },

          entityName: true,
          entityStatus: true,
          entityType: true,
          entityWebsite: true,
          id: true,

          parentEntity: {
            select: {
              id: true,
            },
          },

          remoteAccountingId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/childEntities")
  @ApiNestedQuery(EntityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "read",
    possession: "any",
  })
  async findManyChildEntities(
    @common.Req() request: Request,
    @common.Param() params: EntityWhereUniqueInput
  ): Promise<Entity[]> {
    const query = plainToClass(EntityFindManyArgs, request.query);
    const results = await this.service.findChildEntities(params.id, {
      ...query,
      select: {
        accountOwner: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        entityAccountContact: {
          select: {
            id: true,
          },
        },

        entityAccountsPayableEmail: true,

        entityBillingContact: {
          select: {
            id: true,
          },
        },

        entityName: true,
        entityStatus: true,
        entityType: true,
        entityWebsite: true,
        id: true,

        parentEntity: {
          select: {
            id: true,
          },
        },

        remoteAccountingId: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/childEntities")
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async connectChildEntities(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: EntityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      childEntities: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/childEntities")
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async updateChildEntities(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: EntityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      childEntities: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/childEntities")
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async disconnectChildEntities(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: EntityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      childEntities: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
