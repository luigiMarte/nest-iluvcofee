//import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  //@Type(() => Number)// We don't need @Type decorator here because we are using transformOptions:{enableImplicitConversion: true} in main.ts
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @IsPositive()
  offset: number;
}
