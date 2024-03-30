import Produit from "../models/Produit.js";

export const getProduits = async (req, res) => {


  try {
    const produits = await Produit.find();
    res.status(200).json({
      success: true,
      data: produits ,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};
export const getProduit = async (req, res) => {
  try {
    const produit = await Produit.findById(req.params.id);
    if (!produit) {
      return res.status(400).json({
        success: false,
        error: "produit innexistant",
      });
    }
    res.status(200).json({
      success: true,
      data: produit,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const createProduit = async (req, res) => {
  const refart = req.body.reference;
  const prod = await Produit.findOne({reference:refart})
  console.log(refart,prod)
  if (prod){
    return res.status(400).json({
      success: false,
      error: "L'article existe déjà",
    });
    
    }

    

  
  try {
    const produit = await Produit.create({
      ...req.body,
      //userId:userId,
    });
    res.status(201).json({
      success: true,
      data: produit,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const updateProduit = async (req, res) => {
  try {
    const produit = await Produit.findById(req.params.id);
    if (!produit) {
      return res.status(400).json({
        success: false,
        error: "produit innexistant",
      });
    }
    const updatedProduit = await Produit.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      data: updatedProduit,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const deleteProduit = async (req, res) => {

  try {
    const produit = await Produit.findById(req.params.id);
    if (!produit) {
      return res.status(400).json({
        success: false,
        error: "No note found",
      });
    }
    await Produit.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const getProduitsWithStock = async (req, res) => {
  try {
    const produitsWithStock = await Produit.find({ qte_stock: { $gt: 5 } });
    res.status(200).json({
      success: true,
      data: produitsWithStock,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
