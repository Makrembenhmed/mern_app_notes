import React, { useEffect, useState } from 'react';

const Produit = () => {
    const [Produis, setProduits] = useState([]);
    
    const getAllProduits = async () => {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/v1/produits`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${user}`,
            },
          }
        );
        
      const data = await res.json();
      
  
      if (data.success) {
        setProduits(data.data);
      }
    };
  
    

    useEffect(() => {
        getAllProduits();
      }, []);
    
    
    return (
        <div>
           
           {Produis.map((produit) => (
            <div
              key={produit._id}
              className="flex flex-col gap-4 p-4 items-center justify-center rounded-md  text-gray-800"
              style={{ backgroundColor:"green" }}
            >
              <h1 className="text-2xl font-bold">{produit.reference}</h1>
              <p className="text-xl">{produit.description}</p>
             <div>  
            
             <img src={produit.photo} alt="" />
             </div>
            </div>
          ))}

        </div>
    );
}

export default Produit;
