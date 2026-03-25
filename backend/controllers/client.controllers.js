import Client from "../models/Client.js";

export const getClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};

export const addCLients = async (req, res) => {
  try {
    const client = new Client(req.body);
    await client.save();
    res.status(201).json(client);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
