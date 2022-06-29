import "reflect-metadata";
import express from "express";
import { appDataSource } from "./models/db";
import { router } from "./users/users.routes";

const app = express();
const PORT = 9000;
app.use(express.json());

//TODO: problemas con esta ruta corregir esto
app.use(router);



app.get('/bienvenida', (req, res) => {
    res.json({
        message: "welcome to api",
        user: 'unknown'
    })
});


// base da datos
appDataSource.initialize()
    .then(() => app.listen(PORT))
    .then(() => console.log(`server on running in port ${PORT}`))
    .catch((err) => {
        console.log(err);
    });




