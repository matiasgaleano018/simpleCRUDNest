import { IsString, IsNumber, MinLength, Min, IsDate, IsEnum } from 'class-validator';
import { VehicleType } from '../vehicle.enum';

export class CreateVehicleDto {
    @IsEnum(VehicleType)
    type_id: number;

    @IsString()
    @MinLength(3)
    license: string;

    @IsString()
    @MinLength(3)
    model: string;

    @IsString()
    @MinLength(3)
    brand: string;
}