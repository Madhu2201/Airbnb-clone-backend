import product from "../Model/Schema.js";



export const uploadimage = async (req, res) => {
  try {
   
    const { title, discribtion, price, image} = req.body;


    console.log(req.body);
    console.log(req.file);

    const product1 = new product({ image, title, discribtion, price });
    await product1.validate();
    await product1.save();
    res.status(200).json({ message: "Product is successfully added" });
  } catch (error) {
    console.log("Error", error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: "Product is not added" });
  }
};



export const getProduct=async(req,res)=>{
  try {
    const products = await product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products' });
  }

}