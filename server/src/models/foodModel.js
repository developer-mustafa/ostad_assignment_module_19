import mongoose from "mongoose";

const foodApiSchema = mongoose.Schema(
  {
    foodName: {
      type: String,
      require: true,
    },
    foodCode: {
      type: String,
      require: true,
    },
    foodImg: {
      type: String,
      require: true,
    },
    foodCat: {
      type: String,
      require: true,
    },
    foodQTY: {
      type: Number,
      require: true,
    },
    foodPrice: {
      type: Number,
      require: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const foodModel = mongoose.model("Food", foodApiSchema);

export default foodModel;
