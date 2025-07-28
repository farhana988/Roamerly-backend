import { Router } from "express";
import { UserControllers } from "./user.controller";
import { validateRequest } from "../../middlewares/validateRequests";
import { createUserZodSchema } from "./user.validate";

const router = Router()


router.post("/register", validateRequest(createUserZodSchema), UserControllers.createUser)
router.post  ("/all-users",UserControllers.getAllUsers)

export const UserRoutes =router






