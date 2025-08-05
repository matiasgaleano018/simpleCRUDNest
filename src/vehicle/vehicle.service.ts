import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from './vehicle.entity';
import { Repository } from 'typeorm';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehicleService {
    constructor(
        @InjectRepository(Vehicle)
        private vehicleRepository: Repository<Vehicle>,
    ) {}

    getAllVehicles(): Promise<Vehicle[]> {
        return this.vehicleRepository.find();
    }

    async getVehicleById(id: number): Promise<Vehicle> {
        const vehicle = await this.vehicleRepository.findOne({
            where: { id }
        });

        if (!vehicle) {
            throw new NotFoundException(`Vehículo con id ${id} no encontrado`);
        }

        return vehicle;
    }

    setVehicle(vehicle: Partial<Vehicle>): Promise<Vehicle> {
        return this.vehicleRepository.save(vehicle);
    }

    async editVehicle(id: number, dto: UpdateVehicleDto): Promise<Vehicle> {
        const vehicle = await this.vehicleRepository.findOne({ where: { id } });

        if (!vehicle) {
        throw new NotFoundException(`Vehículo con id ${id} no encontrado`);
        }

        Object.assign(vehicle, dto);

        return this.vehicleRepository.save(vehicle);
    }
}