import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

// CRATE
router.post("/users", UserController.create);

// READ
router.get("/users", UserController.findAll);

router.get("/users/:userCPF", UserController.findOne);

// UPDATE
router.put("/users/:userCPF", UserController.update);

// DELETE
router.delete("/users/:userCPF", UserController.destroy);

export { router };
