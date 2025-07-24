import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from './vehicle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleService {
    constructor(
        @InjectRepository(Vehicle)
        private vehicleRepository: Repository<Vehicle>,
    ) {}

    getAllVehicles(): Promise<Vehicle[]> {
        return this.vehicleRepository.find();
    }
}