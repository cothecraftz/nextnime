import { UserLogin, UserLoginWithGoogle } from "@/types/auth";
import { prisma } from "./prisma";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";

export const login = async (email: string) => {
  const user: User | null = await prisma.user.findUnique({ where: { email: email } });
  if (!user || !user.password) {
    throw new Error("User not found.");
  }
  return user;
};

export const register = async (userData: { username: string; email: string; password: string }) => {
  const query = await prisma.user.findUnique({ where: { email: userData.email } });

  if (query) {
    return { status: false, statusCode: 400, message: "email sudah ada" };
  }

  try {
    userData.password = await bcrypt.hash(userData.password, 5);

    const user = await prisma.user.create({
      data: {
        username: userData.username,
        email: userData.email,
        password: userData.password,
      },
    });

    return { status: true, statusCode: 200, message: "success register", user };
  } catch (error) {
    return { status: false, statusCode: 400, message: "gagal register" };
  }
};

export const loginWithGoogle = async (userData: UserLoginWithGoogle, callback: any) => {
  const query = await prisma.user.findUnique({
    where: {
      email: userData.email!,
    },
  });

  if (query) {
    await prisma.user
      .update({ where: { email: userData.email! }, data: userData })
      .then(() => {
        callback({ status: true, message: "login google berhasil", data: userData });
      })
      .catch((error) => {
        callback({ status: false, message: error });
      });
  } else {
    await prisma.user
      .create({ data: userData })
      .then(() => {
        callback({ status: true, message: "login google berhasil", data: userData });
      })
      .catch((error) => {
        callback({ status: false, message: error });
      });
  }
};
