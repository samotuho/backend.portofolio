import TableContact from "../models/ContactModel.js";

export const getContactAll = async (req, res) => {
  try {
    const dataContact = await TableContact.findAll();
    res.status(200).json(dataContact);
  } catch (error) {
    console.log(error);
  }
};
export const getContactById = async (req, res) => {
  try {
    const dataContact = await TableContact.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(dataContact);
  } catch (error) {
    console.log(error);
  }
};
export const createContact = async (req, res) => {
  try {
    await TableContact.create(req.body);
    res.status(201).json({ Pesan: "Contact berhasil ditambahkan!" });
  } catch (error) {
    console.log(error);
  }
};
export const updateContact = async (req, res) => {
  try {
    await TableContact.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ Pesan: "Contact berhasil diupdate!" });
  } catch (error) {
    console.log(error);
  }
};
export const deleteContact = async (req, res) => {
  try {
    await TableContact.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ Pesan: "Contact berhasil didelete!" });
  } catch (error) {
    console.log(error);
  }
};
