import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

// definiendo tabla en la db
@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    user_id: number

    @Column()
    name: string

    @Column()
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    age: number

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_at: Date
}
