
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

@Entity()
export class Pokemons {
    @PrimaryGeneratedColumn()
    pokemon_id: number

    @Column()
    user_id: number // relacion uno a muchos

    @Column()
    url: string

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_at: Date
}