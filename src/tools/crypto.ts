import bcrypt from "bcrypt";

export const hashPassword = (plainPassword: string) => {
    return bcrypt.hashSync(plainPassword, 10);
}

export const comparePassword = (plainPassword: string, hashPassword: string) => {
    bcrypt.compareSync(plainPassword, hashPassword);
}








