import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllFavs = async (req, res) => {
  try {
    const fav = await prisma.fav.findMany();
    if (fav.length >= 1) {
      res.status(200).json(fav);
    } else {
      res.status(204).json({ error: true, messageError: "No content" });
    }
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const getOneUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        userid: +id,
      },
    });
    if (user && Object.keys(user).length > 0) {
      res.status(200).json(user);
    } else {
      res.status(204).json({ error: true, messageError: "No content" });
    }
  } catch (error) {
    res.status(500).send({ error });
  }
};

export const createFav = async (req, res) => {
  try {
    const newfav = await prisma.fav.create({
      data: req.body,
    });
    res.status(201).json(newfav);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.update({
      where: {
        userid: +id,
      },
      data: req.body,
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await prisma.user.delete({
      where: {
        userid: +id,
      },
    });
    res.json(deleted);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};
