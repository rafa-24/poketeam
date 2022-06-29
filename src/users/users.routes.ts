import { Router } from "express";

import { createUser, getUsersByEmail } from "./users.controllers";

export const router = Router();

router.post('/users', createUser);

router.get('/users/:email', getUsersByEmail);





