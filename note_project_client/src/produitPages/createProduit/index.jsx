import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const CreateProduit = () => {
  const [reference, setReference] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [qte_stock, setQte_stock] = useState(0);
  const [photo, setPhoto] = useState("");

  

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const produit = {
        reference,
      description,
      price,
      qte_stock,
      photo
    };

    const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/produits`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            
          },
          body: JSON.stringify(produit),
        }
      );
  
    const data = await res.json();

    if (data.success) {
        setReference("");
        setDescription("");
        setPrice(0);
        setQte_stock(0)
        setPhoto("")

      toast.success("Produit created");
      navigate("/admin");
    }

    if (!data.success) {
      toast.error(data.error);
    }
  };

  return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="reference"
          >
            Reference
          </label>
          <input
            type="text"
            placeholder="Reference"
            name="reference"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="qte_stock"
          >
            Quantité En Stock
          </label>
          <input
            type="number"
            placeholder="Quantité En Stock"
            name="qte_stock"
            value={qte_stock}
            onChange={(e) => setQte_stock(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="photo"
          >
            URL de la photo du produit
          </label>
          <input
            type="text"
            placeholder="URL de la photo du produit"
            name="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Créer Produit
          </button>
        </div>
      </form>   
      </div>
    );
};

export default CreateProduit;
