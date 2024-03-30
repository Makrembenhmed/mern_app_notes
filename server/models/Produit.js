import mongoose from "mongoose";

const produitSchema = new mongoose.Schema({

  //userId: {
    //type: String,
   // required: [false, "Please provide a user id"],
  //},
  reference: {
    type: String,
    unique: true,
    required: [true, "Please provide Code item"],
    maxlength: [40, "cpde cannot be more than 40 characters"],
    
  },
  description: {
    type: String,
    required: true,
    maxlength: [200, "Description cannot be more than 200 characters"],
  },
  price: {
    type: Number,
    required: true,
    min:0, 
  },
  qte_stock: {
    type: Number,
    required: true,
    min:0, 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  photo: {
    type: String, // Assuming you'll store the URL of the photo
    required: true
  }
});

export default mongoose.model("Produit", produitSchema);
