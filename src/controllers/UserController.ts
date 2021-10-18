import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";

class UserController {
  async findAll(req: Request, res: Response) {
    const users = await UserModel.findAll();

    return users.length > 0 
      ? res.status(200).json(users)
      : res.status(204).send();
  }
  async findOne(req: Request, res: Response) {
    const { userCPF } = req.params;
    const users = await UserModel.findOne({ 
      where: { 
        cpf: userCPF, 
      }, 
    });
    return users 
     ? res.status(200).json(users) 
     : res.status(204).send();
  }
  async create(req: Request, res: Response) {
    const { nome, idade, email, cpf } = req.body;
    const user = await UserModel.create({
      nome,
      idade,
      email,
      cpf,
    });

    return res.status(201).json(user);
  }
  async update(req: Request, res: Response) {}
  async destroy(req: Request, res: Response) {}
}

export default new UserController();
