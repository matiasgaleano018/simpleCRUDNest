import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { Response } from 'express';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Controller('vehicle')
export class VehicleController {

    constructor(private vehicleService: VehicleService){}

    @Get('/')
    getAll(){
        return this.vehicleService.getAllVehicles();
    }

    @Get('/:id')
    async getVehicleById(@Res() res: Response, @Param('id', ParseIntPipe) id: number){
        try{
            const vehicle = await this.vehicleService.getVehicleById(id);

            return res.status(200).json(vehicle);
        }catch(err){
            console.error(err);

            return res.status(500).json({
                message: 'Error al obtener el vehiculo',
                error: err?.message || 'Error interno del servidor'
            });
        }
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

    @Put('/:id')
    async updateVehicle(@Res() res: Response, @Param('id', ParseIntPipe) id: number, @Body() vehicleBody: UpdateVehicleDto){
        const vehicle = vehicleBody;
        try{
            const vehicleUpdated = await this.vehicleService.editVehicle(id, vehicle);

            return res.status(200).json(vehicleUpdated);
        }catch(err){
            console.error(err);

            return res.status(500).json({
                message: 'Error al actualizar el vehiculo',
                error: err?.message || 'Error interno del servidor'
            });
        }
    }
}
