// aqui establesco la conexion con la base de datos
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users } from "./entitys/Users";
import { Pokemons } from "./entitys/pokemons";

export const appDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "siuu",
    password: "contraseña",
    database: "pokeapi",
    entities: [Users, Pokemons],
    synchronize: true,
    logging: false
});