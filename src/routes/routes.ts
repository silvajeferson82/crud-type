import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

// CRATE
router.post("/users", UserController.create);

// READ
router.get("/users", UserController.findAll);

router.get("/users/:userCpf", UserController.findOne);

// UPDATE
router.put("/users/:userCpf", UserController.update);

// DELETE
router.delete("/users/:userCpf", UserController.destroy);

export { router };
