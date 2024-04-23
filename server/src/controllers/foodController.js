import foodModel from "../models/foodModel.js";

export const getFoods = async (req, res) => {
  const data = await foodModel.find();
  res.send(data);
};

export const createFood = async (req, res) => {
  try {
    await foodModel.create(req.body);
    res.json({ status: "Food created successfully" });
  } catch (err) {
    res.json({ status: "failed to create" });
  }
};

export const updateFood = async (req, res) => {
  const { id } = req.params;

  await foodModel.findOneAndUpdate({ _id: id }, req.body);
  res.json({ message: "Update single food" });
};

export const deleteFood = async (req, res) => {
  const { id } = req.params;

  await foodModel.findByIdAndDelete(id);
  res.json({ status: "Food deleted successfully" });
};
