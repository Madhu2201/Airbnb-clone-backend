import mongoose from "mongoose";
const productschema = new mongoose.Schema({
    productIndex: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    discribtion: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  });
  const product = mongoose.model("product", productschema);
  
  export default product;