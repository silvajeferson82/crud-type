import { Router } from "express";

const router = Router();

// CRATE
router.post("/users");

// READ
router.get("/users");

router.get("/users/:userCPF");

// UPDATE
router.put("/users/:userCPF");

// DELETE
router.delete("/users/:userCPF");

export { router };
