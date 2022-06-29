import { Request, Response } from "express";
import { hashPassword } from "../tools/crypto";
import { Users } from "../models/entitys/Users";
import { appDataSource } from "../models/db";


export const createUser = async (req: Request, res: Response) => {

    const { name, username, email, password, age } = req.body;

    const encryptPassword = hashPassword(password);

    // object
    const user = new Users();
    user.name = name;
    user.username = username;
    user.email = email;
    user.password = encryptPassword;
    user.age = age;

    // crear un repositorio
    const userRepository = appDataSource.getRepository(Users);
    await userRepository.save(user);
    console.log(user);

    return res.status(201).json({
        message: 'new user created in to Data Base',
        users: user
    });
}

// obtener un usuario por su email
export const getUsersByEmail = async (req: Request, res: Response) => {
    const { email } = req.params;
    const userRepository = appDataSource.getRepository(Users);

    const users = await userRepository.findOneBy({
        email: email
    });

    res.status(200).json({
        message: 'email que estas buscando',
        email: users
    });
}






