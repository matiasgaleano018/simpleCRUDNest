import { IsString, IsNumber, MinLength, Min, IsDate, IsEnum, IsOptional } from 'class-validator';
import { VehicleType } from '../vehicle.enum';

export class UpdateVehicleDto {
    @IsOptional()
    @IsEnum(VehicleType)
    type_id?: number;

    @IsOptional()
    @IsString()
    @MinLength(3)
    model?: string;

    @IsOptional()
    @IsString()
    @MinLength(3)
    brand?: string;
}