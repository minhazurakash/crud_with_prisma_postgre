import { Request, Response } from "express";
import { UserService } from "./user.service";

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUsers();

    res.send({
      success: true,
      message: "user fetched successful",
      data: result,
    });
  } catch (error) {
    res.json(error);
  }
};
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getSingleUser(Number(req.params.id));

    res.send({
      success: true,
      message: "user fetched successful",
      data: result,
    });
  } catch (error) {
    res.json(error);
  }
};
const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);

    res.send({
      success: true,
      message: "user create successful",
      data: result,
    });
  } catch (error) {
    res.json(error);
  }
};

const createOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createOrUpdateProfile(req.body);

    res.send({
      success: true,
      message: "Profile create/update successful",
      data: result,
    });
  } catch (error) {
    res.json(error);
  }
};

export const UserController = {
  getUsers,
  getSingleUser,
  createUser,
  createOrUpdateProfile,
};
