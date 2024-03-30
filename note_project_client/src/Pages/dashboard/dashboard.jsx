import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { toast } from "react-toastify";

const Dashboard = () => {
    const [produits, setProduits] = useState([]);

    const handleDeleteProduit = async (id) => {
        const res = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/produits/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const data = await res.json();

        setProduits(produits.filter((produit) => produit._id !== id));

        if (data.success) {
            toast.success("Produit supprimé avec succès");
        }
    };

    const getAllProduits = async () => {
        const res = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/produits`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
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
        <>
            <h3>Liste des produits</h3>
            <Link to='/produit/create'>Nouvel Article</Link>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Reference</th>
                        <th>Description</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                        <th>Photo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {produits.map((produit) => (
                        <tr key={produit._id}>
                            <td>{produit.reference}</td>
                            <td>{produit.description}</td>
                            <td>{produit.price}</td>
                            <td>{produit.qte_stock}</td>
                            <td>
                                <img src={produit.photo} alt="" style={{ maxWidth: '100px' }} />
                            </td>
                            <td>
                                <Link to={`/produit/update/${produit._id}`} className='btn btn-primary mr-2'>
                                    Modifier
                                </Link>
                                <button className='btn btn-danger' onClick={() => handleDeleteProduit(produit._id)}>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default Dashboard;
