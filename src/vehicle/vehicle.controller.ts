import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { Response } from 'express';

@Controller('vehicle')
export class VehicleController {

    constructor(private vehicleService: VehicleService){}

    @Get('/')
    getAll(){
        return this.vehicleService.getAllVehicles();
    }

    @Post('/')
    async createVehicle(@Body() vehicleBody: CreateVehicleDto, @Res() res: Response){
        const vehicle = vehicleBody;
        try{
            const vehicleCreated = await this.vehicleService.setVehicle(vehicle);

            return res.status(201).json(vehicleCreated);
        }catch(err){
            console.error(err);
            
            return res.status(500).json({
                message: 'Error al crear el vehiculo',
                error: err?.message || 'Error interno del servidor'
            });
        }

    }
}
