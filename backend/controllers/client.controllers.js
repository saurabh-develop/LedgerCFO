import Client from "../models/client";

export const getClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};
