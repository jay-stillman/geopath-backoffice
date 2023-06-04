import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EntityServiceBase } from "./base/entity.service.base";

@Injectable()
export class EntityService extends EntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
