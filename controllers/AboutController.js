import TableAbout from "../models/AboutModel.js";

export const getAboutAll = async (req, res) => {
  try {
    const dataAbout = await TableAbout.findAll();
    res.status(200).json(dataAbout);
  } catch (error) {
    console.log(error);
  }
};
export const getAboutById = async (req, res) => {
  try {
    const dataAbout = await TableAbout.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(dataAbout);
  } catch (error) {
    console.log(error);
  }
};
export const createAbout = async (req, res) => {
  try {
    await TableAbout.create(req.body);
    res.status(201).json({ Pesan: "About berhasil ditambahkan!" });
  } catch (error) {
    console.log(error);
  }
};
export const updateAbout = async (req, res) => {
  try {
    await TableAbout.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ Pesan: "About berhasil diupdate!" });
  } catch (error) {
    console.log(error);
  }
};
export const deleteAbout = async (req, res) => {
  try {
    await TableAbout.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ Pesan: "About berhasil didelete!" });
  } catch (error) {
    console.log(error);
  }
};
