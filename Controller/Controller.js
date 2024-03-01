
import product from "../Model/Schema.js";
export const uploadimage = async (req, res) => {
    try {
      const { productIndex, title, discribtion, price, image } = req.body;
  
      console.log(req.body);
      console.log(req.file);
  
      const product1 = new product({
        productIndex,
        image,
        title,
        discribtion,
        price,
      });
      await product1.validate();
      await product1.save();
      res.status(200).json({ message: "Product is successfully added" });
    } catch (error) {
      console.log("Error", error);
      if (error.name === "ValidationError") {
        return res.status(400).json({ message: error.message });
      }
  
      res.status(500).json({ message: "Product is not added" });
    }
  };
  
  export const getProduct = async (req, res) => {
    try {
      const product2 = await product.find().maxTimeMS(30000); // Set timeout to 30 seconds
      res.status(200).json(product2);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Error fetching products",error: error.message  });
    }
  };
  export const getproductbyindex = async (req, res) => {
    try {
      const productIndex = req.params.productIndex;
  
      const product2 = await product.findOne({ productIndex });
  
      if (!product2) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json(product2);
    } catch (error) {
      console.error("Error fetching product by index:", error);
      res.status(500).json({ message: "Error fetching product by index" });
    }
  };
  