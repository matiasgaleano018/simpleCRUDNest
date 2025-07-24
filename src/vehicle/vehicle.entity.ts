import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    license: string;

    @Column()
    type_id: number;

    @Column()
    model: string;

    @Column()
    brand: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
}