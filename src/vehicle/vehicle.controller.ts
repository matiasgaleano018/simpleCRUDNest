import { Controller, Get } from '@nestjs/common';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {

    constructor(private vehicleService: VehicleService){}

    @Get('/')
    getAll(){
        return this.vehicleService.getAllVehicles();
    }
}
